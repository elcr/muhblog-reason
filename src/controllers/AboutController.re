open Relude.Globals;


let makeResponse = (~about) =>
    Response.page(~state=About({ text: about }), ())
        |. IO.Pure;
