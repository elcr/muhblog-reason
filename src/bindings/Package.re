type t = {
    version: string,
    name: string
};


[@bs.module "../../package.json"]
external json: t = "default";
