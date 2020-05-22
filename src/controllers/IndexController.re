open Relude.Globals;


let makeResponse = (~entries, ~page) =>
    entries
        |> List.sortBy((a: Parse.parsedEntry, b) =>
            Int.compare(
                Date.toUnixTimestamp(b.date),
                Date.toUnixTimestamp(a.date)
            )
        )
        |> List.splitAt((page - 1) * Constants.entriesPerPage)
        |> Option.flatMap(((_, tail)) =>
            List.take(Constants.entriesPerPage, tail)
                |. Some
                |> Option.filter(pageEntries => List.length(pageEntries) !== 0)
                |> Option.map(pageEntries =>
                    Response.Page({
                        status: 200,
                        data: Some(Index({
                            page,
                            total: List.length(entries),
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
