open Relude.Globals;


let makeResponse = (~entries, ~year, ~month, ~day, ~slug) => {
    let timestamp = ()
        |> Js.Date.makeWithYMD(
            ~year=Int.toFloat(year),
            ~month=Int.toFloat(month),
            ~date=Int.toFloat(day)
        )
        |> Js.Date.getTime
        |> Int.fromFloat;

    entries
        |> List.find((entry: Parse.parsedEntry) =>
            entry.timestamp === timestamp
                && Utils.slug(entry.title) === slug
        )
        |> IO.fromOption(ignore)
        |> IO.map((entry: Parse.parsedEntry) =>
            Response.Page({
                status: 200,
                data: Some(Entry({
                    title: entry.title,
                    timestamp,
                    text: entry.text,
                    tags: entry.tags,
                    previous: entries
                        |> List.sortBy((a: Parse.parsedEntry, b) =>
                            Int.compare(b.timestamp, a.timestamp),
                        )
                        |> List.find((entry: Parse.parsedEntry) =>
                            entry.timestamp < timestamp
                        )
                        |> Option.map((entry: Parse.parsedEntry) => entry.title),
                    next: entries
                        |> List.sortBy((a: Parse.parsedEntry, b) =>
                            Int.compare(a.timestamp, b.timestamp),
                        )
                        |> List.find((entry: Parse.parsedEntry) =>
                            entry.timestamp > timestamp
                        )
                        |> Option.map((entry: Parse.parsedEntry) => entry.title)
                }))
            })
        )
};
