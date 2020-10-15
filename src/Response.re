type t =
    | Page({
        state: option(State.t),
        status: int
    })
    | Stream({
        stream: NodeStream.Readable.t,
        type_: option(string),
        length: int,
        modified: Date.t
    });


let notFound = Page({
    state: None,
    status: 404
});


let page = (~status=200, ~state=?, ()) =>
    Page({ state, status });
let stream = (~type_=?, ~stream, ~length, ~modified) =>
    Stream({ stream, type_, length, modified });
