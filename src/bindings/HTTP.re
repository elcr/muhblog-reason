module Request = {
    type t;

    [@bs.get]
    [@bs.return undefined_to_opt]
    external getURL: t => option(string) = "url";
};


module Response = {
    type t;

    [@bs.set]
    external _setStatusCode: (t, int) => unit = "statusCode";

    let setStatusCode = (status, response) => _setStatusCode(response, status);

    [@bs.send.pipe: t]
    external setHeader: (~key: string, ~value: string) => unit = "setHeader";

    let setContentType = value => setHeader(~key="Content-Type", ~value);
    let setContentLength = (length: int) =>
        setHeader(~key="Content-Length", ~value=Js.String.make(length));

    external getStream: t => NodeStream.Writeable.t = "%identity";
};


module Server = {
    type t;

    [@bs.module "http"]
    external make: ((Request.t, Response.t) => unit) => t = "createServer";

    [@bs.send.pipe: t]
    external listen: (~port: int, ~host: string, unit => unit) => unit = "listen";
};
