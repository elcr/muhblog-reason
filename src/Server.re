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


let make = (~siteName) => {
    HTTP.Server.make((request, response) => {
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
            |> IO.tap((res: Response.t) => {
                open HTTP;
                open NodeStream;

                let output = Response.getStream(response);

                switch (res) {
                    | Page({ data, status }) => {
                        let body = Page.Render.render(
                            ~siteName,
                            ~pageData=data
                        );
                        let length = Buffer.byteLength(body);

                        Response.setStatusCode(status, response);
                        Response.setContentType("text/html; charset=utf-8", response);
                        Response.setContentLength(length, response);
                        Writeable.end_(~chunk=body, ~encoding="utf-8", output);
                    }
                    | Stream({ stream, type_, length, modified }) => {
                        Response.setStatusCode(200, response);
                        Option.getOrElse("application/octet-stream", type_)
                            |. Response.setContentType(response);
                        Response.setContentLength(length, response);
                        Response.setLastModified(modified, response);
                        Readable.pipe(output, stream);
                    }
                };
            })
            |> IO.unsafeRunAsync(ignore)
    })
};


let listen = HTTP.Server.listen(
    ~port=5000,
    ~host="127.0.0.1",
    () => Js.Console.log("Listening")
);
