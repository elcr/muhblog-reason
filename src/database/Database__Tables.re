open Relude.Globals;


let createAboutPageTable = SQLiteRelude.run({|
    CREATE TABLE IF NOT EXISTS AboutPage (
        text TEXT PRIMARY KEY
    )
|});


let createEntryTable = SQLiteRelude.run({|
    CREATE TABLE IF NOT EXISTS Entry (
        slug TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        timestamp INTEGER NOT NULL,
        text TEXT NOT NULL
    )
|});


let createTagTable = SQLiteRelude.run({|
    CREATE TABLE IF NOT EXISTS Tag (
        slug TEXT PRIMARY KEY,
        name TEXT NOT NULL
    )
|});


let createEntryTagTable = SQLiteRelude.run({|
    CREATE TABLE IF NOT EXISTS EntryTag (
        entrySlug TEXT NOT NULL REFERENCES Entry(slug) ON UPDATE CASCADE ON DELETE CASCADE,
        tagSlug TEXT NOT NULL REFERENCES Tag(slug) ON UPDATE CASCADE ON DELETE CASCADE,
        PRIMARY KEY (entrySlug, tagSlug)
    )
|});


let createAllTables = Database__Connection.transaction(connection =>
    createAboutPageTable(connection)
        |> IO.flatMap(() => createEntryTable(connection))
        |> IO.flatMap(() => createTagTable(connection))
        |> IO.flatMap(() => createEntryTagTable(connection))
);
