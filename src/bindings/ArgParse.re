type t;


type _constructorArguments = {
    version: string,
    prog: string
};


[@bs.module "argparse"]
[@bs.new]
external _make: _constructorArguments => t = "ArgumentParser"


let make = (~version, ~prog) => _make({ version, prog });


type _addArgumentArguments = {
    dest: string,
    metavar: string,
    required: Js.Undefined.t(bool),
    [@bs.as "defaultValue"] default: Js.Undefined.t(string)
};


[@bs.send.pipe: t]
external _addArgument: (array(string), _addArgumentArguments) => unit = "addArgument";


let addRequiredArgument = (~shortName, ~longName, ~dest, ~metavar, parser) =>
    _addArgument(
        [| shortName, longName |],
        {
            dest,
            metavar,
            required: Js.Undefined.return(true),
            default: Js.Undefined.empty
        },
        parser
    );


let addOptionalArgument = (~shortName, ~longName, ~dest, ~metavar, ~default, parser) =>
    _addArgument(
        [| shortName, longName |],
        {
            dest,
            metavar,
            required: Js.Undefined.empty,
            default: Js.Undefined.return(default)
        },
        parser
    );


[@bs.send]
external parseArgs: t => 'a = "parseArgs";


[@bs.send.pipe: t]
external exit_: (~code: int, ~message: string) => unit = "exit";
