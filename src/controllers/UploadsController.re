open Relude.Globals;
open NodeFS;


let makeResponse = (~directory, ~filename) => {
    let sanitisedFilename = Sanitise.sanitiseFilename(filename);
    let path = Node.Path.join([| directory, sanitisedFilename |]);
    Stat.stat(path)
        |> IO.flatMap(({ size, mtime }: Stat.t) =>
            ReadStream.make(path)
                |> IO.map(stream =>
                    Response.stream(
                        ~stream,
                        ~type_=?MimeTypes.contentType(sanitisedFilename),
                        ~length=size,
                        ~modified=mtime
                    )
                )
        )
        |> IO.mapError(ignore)
};
