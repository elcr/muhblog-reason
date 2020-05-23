open Relude.Globals;


let makeResponse = (~entries, ~slug, ~page) =>
    entries
        |> List.foldLeft(
            (accumulator, entry: Parse.parsedEntry) => {
                let tag = List.find(
                    tag => Utils.slug(tag) === slug,
                    entry.tags
                );
                switch (tag, accumulator) {
                    | (Some(tag), Some((entries, _))) =>
                        Some(([ entry, ...entries ], tag))
                    | (Some(tag), None) =>
                        Some(([ entry ], tag))
                    | (None, Some(_))
                    | (None, None) =>
                        accumulator
                }
            },
            None
        )
        |> Option.flatMap(((filteredEntries, tag)) => {
            filteredEntries
                |> List.sortBy((a: Parse.parsedEntry, b) =>
                    Int.compare(
                        Date.toUnixTimestamp(b.date),
                        Date.toUnixTimestamp(a.date)
                    )
                )
                |> List.splitAt((page - 1) * Constants.entriesPerPage)
                |> Option.map(((_, tail)) => (filteredEntries, tail, tag))
        })
        |> Option.flatMap(((filteredEntries, tail, tag)) =>
            List.take(Constants.entriesPerPage, tail)
                |. Some
                |> Option.filter(pageEntries => List.length(pageEntries) !== 0)
                |> Option.map(pageEntries =>
                    Response.Page({
                        status: 200,
                        data: Some(TagSearch({
                            tag,
                            page,
                            total: List.length(filteredEntries),
                            entries: List.map(
                                (entry: Parse.parsedEntry) => PageData.{
                                    title: entry.title,
                                    date: entry.date,
                                    text: entry.text
                                },
                                pageEntries
                            )
                        }))
                    })
                )
        )
        |> IO.fromOption(ignore);
