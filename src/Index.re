open Relude.Globals;


let printError = (error: Parse.readAndParseAllError) => {
    open NodeFS.Error;

    let message = switch (error) {
        | AboutFileError(IsADirectory(_)) =>
            "About path is a directory"
        | AboutFileError(NoSuchFileOrDirectory(_)) =>
            "About file does not exist"
        | AboutFileError(_) =>
            "Error reading about file"
        | EntriesDirectoryError(ReadDirectoryError(NotADirectory(_))) =>
            "Entries path is not a directory"
        | EntriesDirectoryError(ReadDirectoryError(NoSuchFileOrDirectory(_))) =>
            "Entries path does not exist"
        | EntriesDirectoryError(ReadDirectoryError(_)) =>
            "Error reading entries directory"
        | EntriesDirectoryError(ReadEntryError({ name })) =>
            "Error reading entry: " ++ name
        | EntriesDirectoryError(ParseError({ name })) =>
            "Error parsing entry: " ++ name
    };
    Js.Console.error(message)
}


let main = () => {
    let {
        siteName,
        aboutPath,
        entriesDirectory
    }: CLI.arguments = CLI.parseArguments();

    Parse.readAndParseAll(~aboutPath, ~entriesDirectory)
        |> IO.map(data => Server.make(~siteName, ~data))
        |> IO.bitap(Server.listen, printError)
        |> IO.unsafeRunAsync(ignore)
};


main();
