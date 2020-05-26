[%raw {| require('source-map-support/register')|}]


open Relude.Globals;


let printError = (error: Parse.readAndParseAllError) => {
    open NodeFS.Error;

    let message = switch (error) {
        | AboutFileError(IsADirectory(_)) =>
            "About path is a directory"
        | AboutFileError(NoSuchFileOrDirectory(_)) =>
            "About path does not exist"
        | AboutFileError(_) =>
            "Error reading about path"
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
        | FaviconError(MimeTypeNotFound) =>
            "Error identifying favicon mimetype"
        | FaviconError(ReadError(IsADirectory(_))) =>
            "Favicon path is a directory"
        | FaviconError(ReadError(NoSuchFileOrDirectory(_))) =>
            "Favicon path does not exist"
        | FaviconError(ReadError(_)) =>
            "Error reading favicon path"
        | UploadsDirectoryError(NotADirectory(_)) =>
            "Uploads path is not a directory"
        | UploadsDirectoryError(NoSuchFileOrDirectory(_)) =>
            "Uploads directory does not exist"
        | UploadsDirectoryError(_) =>
            "Error checking existence of uploads directory"
    };
    Js.Console.error(message)
}


let main = () => {
    let {
        siteName,
        aboutPath,
        entriesDirectory,
        faviconPath,
        uploadsDirectory
    }: CLI.arguments = CLI.parseArguments();

    Parse.readAndParseAll(~aboutPath, ~entriesDirectory, ~faviconPath, ~uploadsDirectory)
        |> IO.map(data => Server.make(~siteName, ~uploadsDirectory, ~data))
        |> IO.bitap(Server.listen, printError)
        |> IO.unsafeRunAsync(ignore)
};


main();
