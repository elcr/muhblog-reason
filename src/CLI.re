type arguments = {
    siteName: string,
    entriesDirectory: string,
    aboutPath: string
};


let parseArguments = (): arguments => {
    let { version, name }: Package.t = Package.json;
    let parser = ArgParse.make(~version, ~prog=name);
    ArgParse.addArgument(~name="--site-name", ~dest="siteName", parser);
    ArgParse.addArgument(~name="--entries-directory", ~dest="entriesDirectory", parser);
    ArgParse.addArgument(~name="--about-path", ~dest="aboutPath", parser);
    ArgParse.parseArgs(parser);
};
