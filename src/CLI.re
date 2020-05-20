type arguments = {
    siteName: string,
    entriesDirectory: string,
    aboutPath: string
};


let parseArguments = (): arguments => {
    let { version, name }: Package.t = Package.json;
    let parser = ArgParse.make(~version, ~prog=name);
    ArgParse.addArgument(
        ~shortName="-s",
        ~longName="--site-name",
        ~dest="siteName",
        ~metavar="STRING",
        ~required=true,
        parser
    );
    ArgParse.addArgument(
        ~shortName="-e",
        ~longName="--entries-directory",
        ~dest="entriesDirectory",
        ~metavar="PATH",
        ~required=true,
        parser
    );
    ArgParse.addArgument(
        ~shortName="-a",
        ~longName="--about-path",
        ~dest="aboutPath",
        ~metavar="PATH",
        ~required=true,
        parser
    );
    ArgParse.parseArgs(parser);
};
