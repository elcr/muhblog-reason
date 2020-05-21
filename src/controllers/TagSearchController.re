open Relude.Globals;


let makeResponse = (~slug as _slug, ~page as _page) =>
    Response.Page({ data: None, status: 200 })
        |. IO.Pure;
