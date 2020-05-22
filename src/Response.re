type t =
    | Page({
        data: option(PageData.t),
        status: int
    })
    | Stream({
        stream: NodeStream.Readable.t,
        type_: option(string),
        length: int,
        modified: int
    });


type error =
    | DatabaseError(Js.Promise.error);