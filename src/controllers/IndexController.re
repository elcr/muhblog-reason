open Relude.Globals;


let makeResponse = (~page as _page) =>
    Response.Page({ data: None, status: 200 })
        |. IO.Pure;
