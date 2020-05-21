open Relude.Globals;


let makeResponse = (~year as _year, ~month as _month, ~day as _day, ~slug as _slug) =>
    Response.Page({ data: None, status: 200 })
        |. IO.Pure;
