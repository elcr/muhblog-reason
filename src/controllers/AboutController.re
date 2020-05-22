open Relude.Globals;


let makeResponse = (~about) =>
    IO.Pure(
        Response.Page({
            status: 200,
            data: Some(About({ text: about }))
        })
    );
