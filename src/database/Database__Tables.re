open Relude.Globals;


let createAboutPageTable = SQLiteRelude.run({|
    CREATE TABLE IF NOT EXISTS AboutPage (
        text TEXT PRIMARY KEY
    )
|});


let createEntryTable = SQLiteRelude.run({|
    CREATE TABLE IF NOT EXISTS Entry (
        json TEXT PRIMARY KEY
    )
|});


let createAllTables = Database__Connection.transaction(connection =>
    createAboutPageTable(connection)
        |> IO.flatMap(() => createEntryTable(connection))
);
