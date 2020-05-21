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
                        |> Option.flatMap(Float.fromString)
                );
            switch (captures) {
                | [| Some(year), Some(month), Some(day), Some(hour), Some(minute) |] =>
                    Js.Date.makeWithYMDHM(
                        ~year,
                        ~month,
                        ~date=day,
                        ~hours=hour,
                        ~minutes=minute,
                        ()
                    )
                        |> Js.Date.getTime
                        |> Int.fromFloat
                        |. Ok
                | _ => Error(Malformed)
            }
        });


let parseTags = metadata: option(array(string)) =>
    Js.Dict.get(metadata, "tags")
        |> Option.filter(array => Js.Array.length(array) > 0);


type parseError =
    | TitleMissing
    | TimestampError(parseTimestampError)
    | TagsMissing
    | BadMetadata;


type parsedEntry = {
    title: string,
    timestamp: int,
    tags: array(string),
    text: string
};


let parseEntry = markdown => {
    let (metadata, text) = MarkdownMetadata.parseMetadata(markdown);
    switch (
        parseTitle(metadata),
        parseTimestamp(metadata),
        parseTags(metadata)
    ) {
        | (Some(title), Ok(timestamp), Some(tags)) => Ok({
            title,
            timestamp,
            tags,
            text
        })
        | (None, Ok(_), Some(_)) => Error(TitleMissing)
        | (Some(_), Error(error), Some(_)) => Error(TimestampError(error))
        | (Some(_), Ok(_), None) => Error(TagsMissing)
        | _ => Error(BadMetadata)
    }
};
