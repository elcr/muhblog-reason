open Relude.Globals;


let makeResponse = () =>
    Response.Page({ data: None, status: 200 })
        |. IO.Pure;
