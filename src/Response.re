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


type io = Relude.IO.t(t, unit);
