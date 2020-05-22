open Relude.Globals;


let makeResponse = (~entries, ~page) =>
    Response.Page({ data: None, status: 200 })
        |. IO.Pure;
