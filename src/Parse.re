open Relude.Globals;


let parseTitle = metadata: option(string) =>
    Js.Dict.get(metadata, "title")
        |> Option.flatMap(Array.at(0));


type parseTimestampError =
    | Missing
    | Malformed;


let matchDate = Js.Re.exec_(
    [%bs.re {|/^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2})$/|}]
);


let parseTimestamp = metadata =>
    Js.Dict.get(metadata, "date")
        |> Option.flatMap(Array.at(0))
        |> Result.fromOption(Missing)
        |> Result.flatMap(date =>
            matchDate(date)
                |> Result.fromOption(Malformed)
        )
        |> Result.flatMap(match => {
            let captures = Js.Re.captures(match)
                |> Js.Array.sliceFrom(1)
                |> Js.Array.map(capture =>
                    Js.Nullable.toOption(capture)
                        |> Option.flatMap(Int.fromString)
                );
            switch (captures) {
                | [| Some(year), Some(month), Some(day), Some(hour), Some(minute) |] =>
                    Date.make(~year, ~month, ~day, ~hour, ~minute, ())
                        |. Ok
                | _ => Error(Malformed)
            }
        });


let parseTags = metadata: option(list(string)) =>
    Js.Dict.get(metadata, "tags")
        |> Option.filter(array => Js.Array.length(array) > 0)
        |> Option.map(List.fromArray);


type parseEntryError =
    | TitleMissing
    | TimestampError(parseTimestampError)
    | TagsMissing
    | BadMetadata;


type parsedEntry = {
    title: string,
    date: Date.t,
    tags: list(string),
    text: string
};


let parseEntry = markdown => {
    let (metadata, text) = MarkdownMetadata.parseMetadata(markdown);
    switch (
        parseTitle(metadata),
        parseTimestamp(metadata),
        parseTags(metadata)
    ) {
        | (Some(title), Ok(date), Some(tags)) => Ok({
            title,
            date,
            tags,
            text
        })
        | (None, Ok(_), Some(_)) => Error(TitleMissing)
        | (Some(_), Error(error), Some(_)) => Error(TimestampError(error))
        | (Some(_), Ok(_), None) => Error(TagsMissing)
        | _ => Error(BadMetadata)
    }
};


type readAndParseEntriesDirectoryError =
    | ReadDirectoryError(NodeFS.Error.t)
    | ReadEntryError({ name: string, error: NodeFS.Error.t })
    | ParseError({ name: string, error: parseEntryError });


let readAndParseEntriesDirectory = directory => {
    open NodeFS;

    IO.Suspend(() => Js.Console.log({j|Reading from entries directory "$directory"|j}))
        |> IO.flatMap(() => ReadDir.readDir(directory))
        |> IO.mapError(error => ReadDirectoryError(error))
        |> IO.flatMap(entries =>
            entries
                |> Js.Array.filter((entry: ReadDir.DirectoryEntry.t) =>
                    Js.String.toLowerCase(entry.name)
                        |> Js.String.endsWith(".md")
                        && !ReadDir.DirectoryEntry.isDirectory(entry)
                )
                |> Js.Array.map(({ name }: ReadDir.DirectoryEntry.t) => {
                    let path = Node.Path.join2(directory, name);
                    IO.Suspend(() => Js.Console.log({j|Reading entry from "$path"|j}))
                        |> IO.flatMap(() => ReadFile.readFile(path))
                        |> IO.mapError(error => ReadEntryError({ name, error }))
                        |> IO.flatMap(text =>
                            parseEntry(text)
                                |> Result.mapError(error =>
                                    ParseError({ name, error })
                                )
                                |> IO.fromResult
                        )
                })
                |> Js.Array.reduce(
                    (accumulator, current) =>
                        IO.flatMap(
                            entries => IO.map(
                                entry => [ entry, ...entries ],
                                current
                            ),
                            accumulator
                        ),
                    IO.Pure([])
                )
        )
};


let readAndParseAboutPath = path =>
    IO.Suspend(() => Js.Console.log({j|Reading about text from "$path"|j}))
        |> IO.flatMap(() => NodeFS.ReadFile.readFile(path));


type parsedData = {
    about: string,
    entries: list(parsedEntry)
};


type readAndParseAllError =
    | AboutFileError(NodeFS.Error.t)
    | EntriesDirectoryError(readAndParseEntriesDirectoryError);


let readAndParseAll = (~aboutPath, ~entriesDirectory) =>
    readAndParseEntriesDirectory(entriesDirectory)
        |> IO.mapError(error => EntriesDirectoryError(error))
        |> IO.flatMap(entries =>
            readAndParseAboutPath(aboutPath)
                |> IO.bimap(
                    about => { about, entries },
                    error => AboutFileError(error)
                )
        );
