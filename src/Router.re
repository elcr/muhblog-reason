open Relude.Globals;


type route =
    | Index({ page: int })
    | TagSearch({ slug: string, page: int })
    | About
    | Entry({ year: int, month: int, day: int, slug: string })
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
                    Entry({ year, month, day, slug })
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
            Some(About)
        | [| page |] =>
            Int.fromString(page)
                |> Option.filter(page => page >= 1)
                |> Option.map(page => Index({ page: page }))
        | [||] =>
            Some(Index({ page: 1 }))
        | _ => None
    };


let build = route =>
    switch (route) {
        | Index({ page: 1 }) => "/"
        | Index({ page }) => {j|/$page/|j}
        | TagSearch({ slug, page: 1 }) => {j|/tag/$slug/|j}
        | TagSearch({ slug, page }) => {j|/tag/$slug/$page/|j}
        | About => "/about/"
        | Entry({ year, month, day, slug }) => {j|/$year/$month/$day/$slug/|j}
        | Uploads({ filename }) => {j|/uploads/$filename|j}
    };
