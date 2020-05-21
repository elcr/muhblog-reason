open Relude.Globals;

open Squel;


let getPath = (~siteName) =>
    NodeFS.MakeTempDir.makeTempDir(Constants.tempDirPrefix)
        |> IO.map(path => Node.Path.join2(path, siteName ++ ".db"));


let connect = (~path) =>
    SQLiteRelude.open_(path)
        |> IO.flatMap(connection =>
            SQLiteRelude.run("PRAGMA foreign_keys=ON", connection)
                |> IO.map(() => connection)
        )
        |> IO.flatMap(connection =>
            SQLiteRelude.run("PRAGMA journal_mode=WAL", connection)
                |> IO.map(() => connection)
        );


let begin_ = SQLiteRelude.run("BEGIN");


let commit = SQLiteRelude.run("COMMIT");


let rollback = SQLiteRelude.run("ROLLBACK");


let close = SQLiteRelude.close;


type transactionError('a) =
    | BeginError(Js.Promise.error)
    | InnerError('a)
    | CommitError(Js.Promise.error)
    | RollbackError(Js.Promise.error);


let transaction = (func, connection) =>
    begin_(connection)
        |> IO.mapError(error => BeginError(error))
        // ugly as hell but it compiles and works - never touching again
        |> IO.flatMap(() =>
            func(connection)
                |> IO.summonError
                |> IO.flatMap(result =>
                    switch (result) {
                        | Ok(()) => commit(connection)
                            |> IO.mapError(error => CommitError(error))
                            |> IO.summonError
                        | Error(innerError) => rollback(connection)
                            |> IO.summonError
                            |> IO.map(result => {
                                let newError = switch (result) {
                                    | Ok(()) => InnerError(innerError)
                                    | Error(error) => RollbackError(error)
                                };
                                Error(newError)
                            })
                    }
                )
                |> IO.unsummonError
        );


let executeSelectOne = query => {
    let (query, params) = Select.build(query);
    SQLiteRelude.getWithParams(query, params)
};


let executeSelectExists = (query, connection) =>
    executeSelectOne(Select.field("1", "_", query), connection)
        |> IO.map(Option.isSome);


let executeSelectAll = query => {
    let (query, params) = Select.build(query);
    SQLiteRelude.getAllWithParams(query, params)
};


let executeInsert = query => {
    let (query, params) = Insert.build(query);
    SQLiteRelude.runInsertWithParams(query, params)
};
