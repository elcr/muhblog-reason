type arguments = {
    siteName: string,
    entriesDirectory: string,
    aboutPath: string,
    faviconPath: string,
    uploadsDirectory: string
};


let parseArguments = (): arguments => {
    let { version, name }: Package.t = Package.json;
    let parser = ArgParse.make(~version, ~prog=name);
    ArgParse.addArgument(
        ~shortName="-s",
        ~longName="--site-name",
        ~dest="siteName",
        ~metavar="STRING",
        parser
    );
    ArgParse.addArgument(
        ~shortName="-e",
        ~longName="--entries-directory",
        ~dest="entriesDirectory",
        ~metavar="PATH",
        parser
    );
    ArgParse.addArgument(
        ~shortName="-a",
        ~longName="--about-path",
        ~dest="aboutPath",
        ~metavar="PATH",
        parser
    );
    ArgParse.addArgument(
        ~shortName="-f",
        ~longName="--favicon-path",
        ~dest="faviconPath",
        ~metavar="PATH",
        parser
    )
    ArgParse.addArgument(
        ~shortName="-u",
        ~longName="--uploads-directory",
        ~dest="uploadsDirectory",
        ~metavar="PATH",
        parser
    )
    ArgParse.parseArgs(parser);
};
