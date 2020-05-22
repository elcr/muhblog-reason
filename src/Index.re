let main = () => {
    let { siteName }: CLI.arguments = CLI.parseArguments();

    Server.make(~siteName)
        |> Server.listen
};


main();
