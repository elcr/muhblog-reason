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
    dest: string
};


[@bs.send.pipe: t]
external _addArgument: (string, _addArgumentArguments) => unit = "addArgument";


let addArgument = (~name, ~dest, parser) =>
    _addArgument(name, { dest: dest }, parser);


[@bs.send]
external parseArgs: t => 'a = "parseArgs";
