open Relude.Globals;

open Squel;


let insertAboutPage = (text: string, connection) =>
    Insert.make()
        |> Insert.into("AboutPage")
        |> Insert.setFields({ "text": text })
        |. Database__Connection.executeInsert(connection)
        |> IO.map(ignore);


let insertEntries = (entries, connection) =>
    Insert.make()
        |> Insert.into("Entry")
        |> Insert.setFieldsRows(
            Js.Array.map(
                ({ title, timestamp, tags, text }: Parse.parsedEntry) =>
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


let getIndexPageEntries = (~page, connection) =>
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
                        |> Select.field("json_extract(e.json, '$.title')", "title")
                        |> Select.field("json_extract(e.json, '$.timestamp')", "timestamp")
                        |> Select.field("json_extract(e.json, '$.text')", "text")
                        |> Select.order("(timestamp, title)", false)
                        |> Select.limit(Constants.entriesPerPage)
                        |> Select.offset((page - 1) * Constants.entriesPerPage)
                        |. Database__Connection.executeSelectAll(connection)
                        |> IO.map((entries: array(indexEntry)) => (count, entries))
            }
        );


type relatedEntry = {
    title: string,
    slug: string
};


type tag = {
    name: string,
    slug: string
}


type entry = {
    title: string,
    timestamp: int,
    text: string,
    tags: array(tag),
    previous: option(relatedEntry),
    next: option(relatedEntry),
};


let getEntry = (~slug, connection) =>
    Select.make()
        |> Select.from("Entry", "e")
        |> Select.field("e.json", "json")
        |> Select.subQuery(
            Select.make()
                |> Select.from("Entry", "eP")
                |> Select.field(
                    "json_object('title', json_extract(eP.json, '$.title'), 'slug', json_extract(eP.json, '$.slug'))",
                    "_previous"
                )
                |> Select.where("json_extract(eP.json, '$.timestamp') < json_extract(e.json, '$.timestamp')", [||])
                |> Select.order("(json_extract(eP.json, '$.timestamp'), json_extract(eP.json, '$.title'))", false),
            "previous"
        )
        |> Select.subQuery(
            Select.make()
                |> Select.from("Entry", "eN")
                |> Select.field(
                    "json_object('title', json_extract(eN.json, '$.title'), 'slug', json_extract(eN.json, '$.slug'))",
                    "_next"
                )
                |> Select.where("json_extract(eN.json, '$.timestamp') > json_extract(e.json, '$.timestamp')", [||])
                |> Select.order("(json_extract(eN.json, '$.timestamp'), json_extract(eN.json, '$.title'))", false),
            "next"
        )
        |> Select.where("json_extract(e.json, '$.slug') = ?", [| slug |])
        |> Select.limit(1)
        |. Database__Connection.executeSelectOne(connection)
        |> IO.map(
            Option.map(row => {
                let entry = JSON.parse(row##json);
                {
                    title: entry##title,
                    timestamp: entry##timestamp,
                    text: entry##text,
                    tags: JSON.parse(entry##tags),
                    previous: JSON.parse(row##previous),
                    next: JSON.parse(row##next)
                }
            })
        );


let getTagPageEntries = (~page, ~slug, connection) => {
    let (subquery, _params) = Select.make()
        |> Select.from("json_each(json_extract(e.json, '$.tags'))", "_each")
        |> Select.field("json_extract(json_each.value, '$.slug')", "_slug")
        |> Select.build;
    let predicate = {j|? IN ($subquery)|j};
    Select.make()
        |> Select.from("Entry", "e")
        |> Select.field("COUNT(*)", "count")
        |> Select.where(predicate, [| slug |])
        |. Database__Connection.executeSelectOne(connection)
        |> IO.flatMap(countRow =>
            switch (countRow) {
                | Some(0) | None => IO.Pure((0, [||]))
                | Some(count) =>
                    Select.make()
                        |> Select.from("Entry", "e")
                        |> Select.field("json_extract(e.json, '$.slug')", "slug")
                        |> Select.field("json_extract(e.json, '$.title')", "title")
                        |> Select.field("json_extract(e.json, '$.timestamp')", "timestamp")
                        |> Select.field("json_extract(e.json, '$.text')", "text")
                        |> Select.where(predicate, [| slug |])
                        |> Select.order("(timestamp, title)", false)
                        |> Select.limit(Constants.entriesPerPage)
                        |> Select.offset((page - 1) * Constants.entriesPerPage)
                        |. Database__Connection.executeSelectAll(connection)
                        |> IO.map((entries: array(indexEntry)) => (count, entries))
            }
        )
};
