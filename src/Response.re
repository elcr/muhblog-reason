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


let notFound = Page({
    data: None,
    status: 400
});
