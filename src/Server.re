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
    ~uploadsDirectory,
    route: Router.route
) =>
    switch (route) {
        | Index({ page }) =>
            IndexController.makeResponse(~entries, ~page)
        | TagSearch({ slug, page }) =>
            TagSearchController.makeResponse(~entries, ~slug, ~page)
        | About =>
            AboutController.makeResponse(~about)
        | Entry({ year, month, day, slug }) =>
            EntryController.makeResponse(~entries, ~year, ~month, ~day, ~slug)
        | Uploads({ filename }) =>
            UploadsController.makeResponse(~directory=uploadsDirectory, ~filename)
    };


let make = (~siteName, ~uploadsDirectory, ~data as { favicon } as data: Parse.parsedData) =>
    HTTP.Server.make((request, response) => {
        let url = HTTP.Request.getURL(request)
            |> Option.getOrElse("/");
        splitURLSegments(url)
            |> Router.route
            |> IO.fromOption(ignore)
            |> IO.flatMap(makeResponse(~data, ~uploadsDirectory))
            |> IO.handleError(() => Response.notFound)
            |> IO.tap((res: Response.t) => {
                open HTTP;
                open NodeStream;

                let startTime = Date.unixTimestampNow();
                let output = Response.getStream(response);
                Writeable.on(
                    `close(() => {
                        let status = Response.getStatusCode(response);
                        let ms = Date.unixTimestampNow() - startTime;
                        Js.Console.log({j|$status $url $(ms)ms|j})
                    }),
                    output
                );

                switch (res) {
                    | Page({ data, status }) => {
                        let body = Render.render(
                            ~siteName,
                            ~favicon,
                            ~pageData=data
                        );
                        let length = Buffer.byteLength(body);

                        Response.setStatusCode(status, response);
                        Response.setContentType("text/html; charset=utf-8", response);
                        Response.setContentLength(length, response);
                        Writeable.end_(~chunk=body, ~encoding="utf-8", output)
                    }
                    | Stream({ stream, type_, length, modified }) => {
                        Response.setStatusCode(200, response);
                        Option.getOrElse("application/octet-stream", type_)
                            |. Response.setContentType(response);
                        Response.setContentLength(length, response);
                        Response.setLastModified(modified, response);
                        Readable.pipe(output, stream)
                    }
                };
            })
            |> IO.unsafeRunAsync(ignore)
    });


let listen = HTTP.Server.listen(
    ~port=5000,
    ~host="127.0.0.1",
    () => Js.Console.log("Listening")
);
