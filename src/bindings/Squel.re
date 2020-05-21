module Select = {
    type t;

    [@bs.module "squel"]
    external make: unit => t = "select";

    [@bs.send.pipe: t]
    external from: (string, string) => t = "from";

    [@bs.send.pipe: t]
    [@bs.variadic]
    external where: (string, array(string)) => t = "where";

    [@bs.send.pipe: t]
    external field: (string, string) => t = "field";

    [@bs.send.pipe: t]
    external join: (string, string, string) => t = "join";

    [@bs.send.pipe: t]
    external limit: int => t = "limit";

    [@bs.send.pipe: t]
    external offset: int => t = "offset";

    [@bs.send.pipe: t]
    external order: (string, bool) => t = "order";

    [@bs.send]
    external build: t => (string, array('a)) = "toParam";
}


module Block = {
    type t;

    [@bs.module "squel"]
    [@bs.scope "cls"]
    [@bs.new]
    external stringBlock: (Js.Undefined.t('a), string) => t = "StringBlock";

    [@bs.module "squel"]
    [@bs.scope "cls"]
    [@bs.new]
    external intoTableBlock: unit => t = "IntoTableBlock";

    [@bs.module "squel"]
    [@bs.scope "cls"]
    [@bs.new]
    external insertFieldValueBlock: unit => t = "InsertFieldValueBlock";
};


module Insert = {
    type t;

    [@bs.module "squel"]
    external make: unit => t = "insert";

    [@bs.module "squel"]
    external _makeWithBlocks: (Js.Undefined.t('a), array(Block.t)) => t = "insert";

    let makeInsertOrIgnore = () =>
        _makeWithBlocks(Js.Undefined.empty, [|
            Block.stringBlock(Js.Undefined.empty, "INSERT OR IGNORE"),
            Block.intoTableBlock(),
            Block.insertFieldValueBlock()
        |]);

    [@bs.send.pipe: t]
    external into: string => t = "into";

    [@bs.send.pipe: t]
    external setFields: 'a => t = "setFields";

    [@bs.send.pipe: t]
    external setFieldsRows: array('a) => t = "setFieldsRows";

    [@bs.send]
    external build: t => (string, array('a)) = "toParam";
};
