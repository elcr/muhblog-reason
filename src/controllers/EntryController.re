open Relude.Globals;


let dayTimestamp = date => {
    let newDate = Date.make(
        ~year=Date.getYear(date),
        ~month=Date.getMonth(date),
        ~day=Date.getDay(date),
        ()
    );
    Date.toUnixTimestamp(newDate)
};


let makeResponse = (~entries, ~year, ~month, ~day, ~slug) => {
    let timestamp = Date.make(~year, ~month, ~day, ())
        |> Date.toUnixTimestamp;
    entries
        |> List.find((entry: Parse.parsedEntry) =>
            dayTimestamp(entry.date) === timestamp
                && Utils.slug(entry.title) === slug
        )
        |> IO.fromOption(ignore)
        |> IO.map((entry: Parse.parsedEntry) =>
            Response.Page({
                status: 200,
                data: Some(Entry({
                    title: entry.title,
                    date: entry.date,
                    text: entry.text,
                    tags: entry.tags,
                    previous: entries
                        |> List.sortBy((a: Parse.parsedEntry, b) =>
                            Int.compare(
                                Date.toUnixTimestamp(b.date),
                                Date.toUnixTimestamp(a.date)
                            )
                        )
                        |> List.find((entry: Parse.parsedEntry) =>
                            dayTimestamp(entry.date) < timestamp
                        )
                        |> Option.map((entry: Parse.parsedEntry) => entry.title),
                    next: entries
                        |> List.sortBy((a: Parse.parsedEntry, b) =>
                            Int.compare(
                                Date.toUnixTimestamp(a.date),
                                Date.toUnixTimestamp(b.date)
                            )
                        )
                        |> List.find((entry: Parse.parsedEntry) =>
                            dayTimestamp(entry.date) > timestamp
                        )
                        |> Option.map((entry: Parse.parsedEntry) => entry.title)
                }))
            })
        )
};
