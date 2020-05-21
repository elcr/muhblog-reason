open Relude.Globals;


let makeResponse = (~directory as _directory, ~filename as _filename) =>
    Response.Page({ data: None, status: 200 })
        |. IO.Pure;
