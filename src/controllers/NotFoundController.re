open Relude.Globals;


let response = IO.Pure(
    Response.Page({
        data: None,
        status: 404
    })
);
