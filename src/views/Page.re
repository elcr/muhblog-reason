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
            minHeight(vh(100.0)),
            backgroundColor(Style.backgroundColour),
            color(Style.textColour)
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
    let activeRoute = Option.map(PageData.toRoute, pageData);
    let page = switch (pageData) {
        | Some(Index(data)) => <IndexPage data/>
        | Some(TagSearch(data)) => <TagSearchPage data/>
        | Some(About(data)) => <AboutPage data/>
        | Some(Entry(data)) => <EntryPage data/>
        | None => <NotFoundPage/>
    };

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
                    <Nav siteName activeRoute/>
                    <Content>
                        page
                    </Content>
                </Root>
            </body>
        </html>
    </Emotion.Provider>
};
