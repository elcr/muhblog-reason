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
    required: bool
};


[@bs.send.pipe: t]
external _addArgument: (array(string), _addArgumentArguments) => unit = "addArgument";


let addArgument = (~shortName, ~longName, ~dest, ~required, ~metavar, parser) =>
    _addArgument(
        [| shortName, longName |],
        { dest, required, metavar },
        parser
    );


[@bs.send]
external parseArgs: t => 'a = "parseArgs";
