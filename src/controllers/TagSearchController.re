open Relude.Globals;


let makeResponse = (~entries, ~slug, ~page) =>
    Response.Page({ data: None, status: 200 })
        |. IO.Pure;
