open Relude.Globals;


module Root = {
    let className = Css.(
        style([
            display(flexBox),
            flexDirection(column),
            minHeight(vh(100.0)),
            backgroundColor(Style.backgroundColour),
            color(Style.textColour),
            fontSize(rem(0.875))
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
    let activeRoute = Option.map(PageData.toRoute, pageData);
    let page = switch (pageData) {
        | Some(Index(data)) => <IndexPage activeRoute data/>
        | Some(TagSearch(data)) => <TagSearchPage activeRoute data/>
        | Some(About(data)) => <AboutPage data/>
        | Some(Entry(data)) => <EntryPage data/>
        | None => <NotFoundPage/>
    };

    <Root>
        <Nav siteName activeRoute/>
        <Content>
            page
        </Content>
    </Root>
};
