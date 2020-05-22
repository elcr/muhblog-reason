open Relude.Globals;


let makeResponse = (~entries, ~year, ~month, ~day, ~slug) =>
    Response.Page({ data: None, status: 200 })
        |. IO.Pure;
