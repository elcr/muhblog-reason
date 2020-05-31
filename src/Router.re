open Relude.Globals;


type route =
    | Index({ page: int })
    | TagSearch({ slug: string, page: int })
    | About({ id: option(string) })
    | Entry({ year: int, month: int, day: int, slug: string, id: option(string) })
    | Uploads({ filename: string });


let route = segments =>
    switch (segments) {
        | [| year, month, day, slug |] =>
            Int.fromString(year)
                |> Option.flatMap(year =>
                    Int.fromString(month)
                        |> Option.filter(month => month >= 1 && month <= 12)
                        |> Option.map(month => (year, month))
                )
                |> Option.flatMap(((year, month)) =>
                    Int.fromString(day)
                        |> Option.filter(day => day >= 1 && day <= 31)
                        |> Option.map(day => (year, month, day))
                )
                |> Option.map(((year, month, day)) =>
                    Entry({ year, month, day, slug, id: None })
                )
        | [| "tag", slug, page |] =>
            Int.fromString(page)
                |> Option.filter(page => page >= 1)
                |> Option.map(page => TagSearch({ slug, page }))
        | [| "tag", slug |] =>
            Some(TagSearch({ slug, page: 1 }))
        | [| "uploads", filename |] =>
            Some(Uploads({ filename: filename }))
        | [| "about" |] =>
            Some(About({ id: None }))
        | [| page |] =>
            Int.fromString(page)
                |> Option.filter(page => page >= 1)
                |> Option.map(page => Index({ page: page }))
        | [||] =>
            Some(Index({ page: 1 }))
        | _ => None
    };


let buildEntryRoute = (~date, ~title, ~id) =>
    Entry({
        year: Date.getYear(date),
        month: Date.getMonth(date),
        day: Date.getDay(date),
        slug: Utils.slug(title),
        id
    });


let _buildEntry = (~year: int, ~month, ~day, ~slug: string) => {
    let month = Int.toString(month)
        |> String.padStart(~targetLength=2, ~padWith="0");
    let day = Int.toString(day)
        |> String.padStart(~targetLength=2, ~padWith="0");
    {j|/$year/$month/$day/$slug/|j}
};


let build = route =>
    switch (route) {
        | Index({ page: 1 }) => "/"
        | Index({ page }) => {j|/$page/|j}
        | TagSearch({ slug, page: 1 }) => {j|/tag/$slug/|j}
        | TagSearch({ slug, page }) => {j|/tag/$slug/$page/|j}
        | About({ id: Some(id) }) => "/about/" ++ "#" ++ id
        | About({ id: None }) => "/about/"
        | Entry({ year, month, day, slug, id: Some(id) }) =>
            _buildEntry(~year, ~month, ~day, ~slug) ++ "#" ++ id
        | Entry({ year, month, day, slug, id: None }) =>
            _buildEntry(~year, ~month, ~day, ~slug)
        | Uploads({ filename }) => {j|/uploads/$filename|j}
    };
