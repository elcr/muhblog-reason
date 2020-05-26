module StringBooleanUnion: {
    type t;

    type case =
        | String(string)
        | Boolean(bool);

    let classify: t => case;
} = {
    [@unboxed]
    type t =
        | Any('a): t;

    let _ = () => Any();

    type case =
        | String(string)
        | Boolean(bool);

    let classify = (Any(value)) =>
        Js.Types.test(value, String)
            ? String(value |> Obj.magic)
            : Boolean(value |> Obj.magic);
};


[@bs.module "mime-types"]
external _contentType: string => StringBooleanUnion.t = "contentType";


let contentType = filename =>
    switch (filename |> _contentType |> StringBooleanUnion.classify) {
        | String(contentType) => Some(contentType)
        | Boolean(_) => None
    };
