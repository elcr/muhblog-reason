open Relude.Globals;


let makeResponse = (route: option(Router.route)) =>
    switch (route) {
        | Some(Index({ page })) =>
            IndexController.makeResponse(~page)
        | Some(TagSearch({ slug, page })) =>
            TagSearchController.makeResponse(~slug, ~page)
        | Some(About) =>
            AboutController.makeResponse()
        | Some(Entry({ year, month, day, slug })) =>
            EntryController.makeResponse(~year, ~month, ~day, ~slug)
        | Some(Static({ directory, filename })) =>
            StaticController.makeResponse(~directory, ~filename)
        | None =>
            NotFoundController.response
    };


let make = () =>
    HTTP.Server.make((request, response) => {
        let startTime = Js.Date.now();

        HTTP.Request.getURL(request)
            |> Option.getOrElse("/")
            |> Js.String.sliceToEnd(~from=1)
            |> Js.String.split("/")
            |> Js.Array.map(segment =>
                Js.Global.decodeURIComponent(segment)
                    |> Js.String.trim
            )
            |> Js.Array.filter(segment => Js.String.length(segment) >= 1)
            |> Router.route
            |> makeResponse
            |> ignore
    });


let listen = HTTP.Server.listen(
    ~port=5000,
    ~host="127.0.0.1",
    () => Js.Console.log("Listening")
);
