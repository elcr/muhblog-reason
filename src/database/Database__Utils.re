open Relude.Globals;

open Squel;


let insertAboutPage = (text: string, connection) =>
    Insert.make()
        |> Insert.into("AboutPage")
        |> Insert.setFields({ "text": text })
        |. Database__Connection.executeInsert(connection)
        |> IO.map(ignore);


type parsedEntry = {
    title: string,
    timestamp: int,
    tags: array(string),
    text: string
};


let insertEntries = (entries, connection) =>
    Insert.make()
        |> Insert.into("Entry")
        |> Insert.setFieldsRows(
            Js.Array.map(
                ({ title, timestamp, tags, text }: parsedEntry) =>
                    {
                        "json": JSON.stringify({
                            "slug": Utils.slug(title),
                            "title": title,
                            "timestamp": timestamp,
                            "tags": Js.Array.map(
                                tag => {
                                    "name": tag,
                                    "slug": Utils.slug(tag)
                                },
                                tags
                            ),
                            "text": text
                        })
                    },
                entries
            )
        )
        |. Database__Connection.executeInsert(connection)
        |> IO.map(ignore);


type insertAllError =
    | InsertAboutPageError(Js.Promise.error)
    | InsertEntriesError(Js.Promise.error);


let insertAll = (aboutText, entries) =>
    Database__Connection.transaction(connection =>
        insertAboutPage(aboutText, connection)
            |> IO.mapError(error => InsertAboutPageError(error))
            |> IO.flatMap(() =>
                insertEntries(entries, connection)
                    |> IO.mapError(error => InsertEntriesError(error))
            )
    );


let getAboutPageText = connection =>
    Select.make()
        |> Select.from("AboutPage", "a")
        |> Select.field("a.text", "text")
        |> Select.limit(1)
        |. Database__Connection.executeSelectOne(connection)
        |> IO.map(
            Option.map(row => (row##text: string))
        );


type indexEntry = {
    slug: string,
    title: string,
    timestamp: int,
    text: string
};


let getIndexPageEntries = (page, connection) =>
    Select.make()
        |> Select.from("Entry", "e")
        |> Select.field("COUNT(*)", "count")
        |. Database__Connection.executeSelectOne(connection)
        |> IO.flatMap(countRow =>
            switch (countRow) {
                | Some(0) | None => IO.Pure((0, [||]))
                | Some(count) =>
                    Select.make()
                        |> Select.from("Entry", "e")
                        |> Select.field("json_extract(e.json, '$.slug')", "slug")
                        |> Select.field("json_extract(e.json, '$.slug')", "title")
                        |> Select.field("json_extract(e.json, '$.timestamp')", "timestamp")
                        |> Select.field("json_extract(e.json, '$.text')", "text")
                        |> Select.order("timestamp", false)
                        |> Select.limit(Constants.entriesPerPage)
                        |> Select.offset((page - 1) * Constants.entriesPerPage)
                        |. Database__Connection.executeSelectAll(connection)
                        |> IO.map((entries: array(indexEntry)) => (count, entries))
            }
        );
