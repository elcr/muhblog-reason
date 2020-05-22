open Relude.Globals;


let formatTitle = (~siteName, pageData: option(PageData.t)) =>
    switch (pageData) {
        | Some(Index(_)) => siteName
        | Some(TagSearch({ tag })) => {j|$tag | $siteName|j}
        | Some(About(_)) => {j|About | $siteName|j}
        | Some(Entry({ title })) => {j|$title | $siteName|j}
        | None => {j|Not found | $siteName|j}
    };


module Root = {
    let className = Css.(
        style([
            display(flexBox),
            flexDirection(column),
            minHeight(vh(100.0))
        ])
    );

    [@react.component]
    let make = (~children) =>
        <div className>
            children
        </div>;
};


[@react.component]
let make = (~siteName, ~pageData) => {
    let title = formatTitle(~siteName, pageData);

    <Emotion.Provider>
        <html lang="en">
            <head>
                <meta charSet="utf-8"/>
                <meta name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <title>(title |> React.string)</title>
                <style>(Reboot.css |> React.string)</style>
            </head>
            <body>
                <Root>
                    ("hello" |> React.string)
                </Root>
            </body>
        </html>
    </Emotion.Provider>
};
