type t = {
    version: string,
    name: string
};


[@bs.module]
external json: t = "../../package.json";
