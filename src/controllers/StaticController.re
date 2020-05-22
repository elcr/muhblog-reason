open Relude.Globals;


let makeResponse = (~directory, ~filename) =>
    Response.Page({ data: None, status: 200 })
        |. IO.Pure;
