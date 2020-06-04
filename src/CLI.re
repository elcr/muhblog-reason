open Relude.Globals;


type unconvertedArguments = {
    siteName: string,
    entriesDirectory: string,
    aboutPath: string,
    faviconPath: string,
    uploadsDirectory: string,
    host: string,
    port: string
};


type arguments = {
    siteName: string,
    entriesDirectory: string,
    aboutPath: string,
    faviconPath: string,
    uploadsDirectory: string,
    host: string,
    port: int
};


let parseArguments = (): arguments => {
    let { version, name }: Package.t = Package.json;
    let parser = ArgParse.make(~version, ~prog=name);
    ArgParse.addRequiredArgument(
        ~shortName="-s",
        ~longName="--site-name",
        ~dest="siteName",
        ~metavar="STRING",
        parser
    );
    ArgParse.addRequiredArgument(
        ~shortName="-e",
        ~longName="--entries-directory",
        ~dest="entriesDirectory",
        ~metavar="PATH",
        parser
    );
    ArgParse.addRequiredArgument(
        ~shortName="-a",
        ~longName="--about-path",
        ~dest="aboutPath",
        ~metavar="PATH",
        parser
    );
    ArgParse.addRequiredArgument(
        ~shortName="-f",
        ~longName="--favicon-path",
        ~dest="faviconPath",
        ~metavar="PATH",
        parser
    );
    ArgParse.addRequiredArgument(
        ~shortName="-u",
        ~longName="--uploads-directory",
        ~dest="uploadsDirectory",
        ~metavar="PATH",
        parser
    );
    ArgParse.addOptionalArgument(
        ~shortName="-H",
        ~longName="--host",
        ~dest="host",
        ~metavar="ADDRESS",
        ~default="127.0.0.1",
        parser
    );
    ArgParse.addOptionalArgument(
        ~shortName="-p",
        ~longName="--port",
        ~dest="port",
        ~metavar="PORT",
        ~default="5000",
        parser
    );

    let arguments: unconvertedArguments = ArgParse.parseArgs(parser);

    Int.fromString(arguments.port)
        |> Option.filter(port => port >= 0 && port <= 65535)
        |> Option.map(port => {
            siteName: arguments.siteName,
            entriesDirectory: arguments.entriesDirectory,
            aboutPath: arguments.aboutPath,
            faviconPath: arguments.faviconPath,
            uploadsDirectory: arguments.uploadsDirectory,
            host: arguments.host,
            port
        })
        // This is kinda cheating but I can't find a way to type a function
        // as non-returning in Reason
        |> Option.tapNone(() =>
            ArgParse.exit_(~code=2, ~message="Invalid port", parser)
        )
        |> Option.getOrThrow
};
