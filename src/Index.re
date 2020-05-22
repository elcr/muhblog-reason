let main = () => {
    let {
        siteName,
        aboutPath,
        entriesDirectory
    }: CLI.arguments = CLI.parseArguments();

    Server.make(~siteName)
        |> Server.listen
};


main();
