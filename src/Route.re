open Relude.Globals;


type t =
    | Index({ page: int })
    | TagSearch({ slug: string, page: int })
    | About({ id: option(string) })
    | Entry({ year: int, month: int, day: int, slug: string, id: option(string) })
    | Uploads({ filename: string });


let index = (~page=1, ()) => Index({ page: page });
let tagSearch = (~slug, ~page=1, ()) => TagSearch({ slug, page });
let about = (~id=?, ()) => About({ id: id });
let entry = (~date, ~title, ~id=?, ()) =>
    Entry({
        year: Date.getYear(date),
        month: Date.getMonth(date),
        day: Date.getDay(date),
        slug: Utils.slug(title),
        id
    });
let uploads = (~filename) => Uploads({ filename: filename });


let fromURL = url => {
    let segments = Js.String.sliceToEnd(~from=1, url)
        |> Js.String.split("/")
        |> Js.Array.map(segment =>
            Js.Global.decodeURIComponent(segment)
                |> Js.String.trim
        )
        |> Js.Array.filter(segment => Js.String.length(segment) >= 1);

    switch (segments) {
        | [| year, month, day, slug |] =>
            switch (
                Int.fromString(year),
                Int.fromString(month),
                Int.fromString(day)
            ) {
                | (Some(year), Some(month), Some(day))
                        when month >= 1 && month <= 12 && day >= 1 && day <= 31 =>
                    Some(Entry({
                        year,
                        month,
                        day,
                        slug,
                        id: None
                    }))
                | _ => None
            }
        | [| "tag", slug, page |] =>
            switch (page |> Int.fromString) {
                | Some(page) when page >= 1 => Some(TagSearch({ slug, page }))
                | _ => None
            }
        | [| "tag", slug |] =>
            Some(TagSearch({ slug, page: 1 }))
        | [| "uploads", filename |] =>
            Some(Uploads({ filename: filename }))
        | [| "about" |] =>
            Some(About({ id: None }))
        | [| page |] =>
            switch (page |> Int.fromString) {
                | Some(page) when page >= 1 => Some(Index({ page: page }))
                | _ => None
            }
        | [||] =>
            Some(Index({ page: 1 }))
        | _ => None
    }
};


let _buildEntry = (~year: int, ~month, ~day, ~slug: string) => {
    let month = Int.toString(month)
        |> String.padStart(~targetLength=2, ~padWith="0");
    let day = Int.toString(day)
        |> String.padStart(~targetLength=2, ~padWith="0");
    {j|/$year/$month/$day/$slug/|j}
};


let toURL = route =>
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
