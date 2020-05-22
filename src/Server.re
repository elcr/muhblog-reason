open Relude.Globals;


let splitURLSegments = url =>
    Js.String.sliceToEnd(~from=1, url)
        |> Js.String.split("/")
        |> Js.Array.map(segment =>
            Js.Global.decodeURIComponent(segment)
                |> Js.String.trim
        )
        |> Js.Array.filter(segment => Js.String.length(segment) >= 1);


let makeResponse = (
    ~data as { about, entries }: Parse.parsedData,
    route: option(Router.route)
) =>
    switch (route) {
        | Some(Index({ page })) =>
            IndexController.makeResponse(~entries, ~page)
        | Some(TagSearch({ slug, page })) =>
            TagSearchController.makeResponse(~entries, ~slug, ~page)
        | Some(About) =>
            AboutController.makeResponse(~about)
        | Some(Entry({ year, month, day, slug })) =>
            EntryController.makeResponse(~entries, ~year, ~month, ~day, ~slug)
        | Some(Static({ directory, filename })) =>
            StaticController.makeResponse(~directory, ~filename)
        | None =>
            NotFoundController.response
    };


let make = (~siteName, ~data: Parse.parsedData) =>
    HTTP.Server.make((request, response) =>
        HTTP.Request.getURL(request)
            |> Option.getOrElse("/")
            |> splitURLSegments
            |> Router.route
            |> makeResponse(~data)
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
    );


let listen = HTTP.Server.listen(
    ~port=5000,
    ~host="127.0.0.1",
    () => Js.Console.log("Listening")
);
