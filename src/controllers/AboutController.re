open Relude.Globals;


let makeResponse = (~about) =>
    Response.Page({ data: None, status: 200 })
        |. IO.Pure;
