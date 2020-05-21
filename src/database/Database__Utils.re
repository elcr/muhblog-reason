open Relude.Globals;

open Squel;


let insertAboutPage = (text: string, connection) =>
    Insert.make()
        |> Insert.into("AboutPage")
        |> Insert.setFields({ "name": text })
        |. Database__Connection.executeInsert(connection)
        |> IO.map(ignore);


type entry = {
    title: string,
    timestamp: int,
    tags: array(string),
    text: string
};


type insertEntryError =
    | EntryError(Js.Promise.error)
    | TagsError(Js.Promise.error)
    | EntryTagsError(Js.Promise.error);


let insertEntry = ({ title, timestamp, tags, text }, connection) => {
    let titleSlug = Utils.slug(title);

    Insert.make()
        |> Insert.into("Entry")
        |> Insert.setFields({
            "slug": titleSlug,
            "title": title,
            "timestamp": timestamp,
            "text": text,
        })
        |. Database__Connection.executeInsert(connection)
        |> IO.mapError(error => EntryError(error))
        |> IO.flatMap(_id => {
            let sluggedTags = Js.Array.map(
                name => {
                    "slug": Utils.slug(name),
                    "name": name
                },
                tags
            );
            Insert.makeInsertOrIgnore()
                |> Insert.into("Tag")
                |> Insert.setFieldsRows(sluggedTags)
                |. Database__Connection.executeInsert(connection)
                |> IO.bimap(
                    _id => sluggedTags,
                    error => TagsError(error)
                )
        })
        |> IO.flatMap(sluggedTags => {
            let mappedTags = Js.Array.map(
                tag => {
                    "entrySlug": titleSlug,
                    "tagSlug": tag##slug
                },
                sluggedTags
            );
            Insert.makeInsertOrIgnore()
                |> Insert.into("EntryTag")
                |> Insert.setFieldsRows(mappedTags)
                |. Database__Connection.executeInsert(connection)
                |> IO.bimap(
                    ignore,
                    error => EntryTagsError(error)
                )
        })
};
