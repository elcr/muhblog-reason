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
            Response.page(
                ~state=Entry({
                    title: entry.title,
                    date: entry.date,
                    text: entry.text,
                    tags: entry.tags,
                    previous: entries
                        |> List.sortBy((a: Parse.parsedEntry, b) =>
                            Float.compare(
                                Date.toUnixTimestamp(b.date),
                                Date.toUnixTimestamp(a.date)
                            )
                        )
                        |> List.find((entry: Parse.parsedEntry) =>
                            dayTimestamp(entry.date) < timestamp
                        )
                        |> Option.map((entry: Parse.parsedEntry) =>
                            ({
                                date: entry.date,
                                title: entry.title
                            }: State.navigationEntry)
                        ),
                    next: entries
                        |> List.sortBy((a: Parse.parsedEntry, b) =>
                            Float.compare(
                                Date.toUnixTimestamp(a.date),
                                Date.toUnixTimestamp(b.date)
                            )
                        )
                        |> List.find((entry: Parse.parsedEntry) =>
                            dayTimestamp(entry.date) > timestamp
                        )
                        |> Option.map((entry: Parse.parsedEntry) =>
                            ({
                                date: entry.date,
                                title: entry.title
                            }: State.navigationEntry)
                        )
                }),
                ()
            )
        )
};
