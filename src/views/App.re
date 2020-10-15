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


module MainContainer = {
    let className = Css.(
        style([
            display(flexBox),
            flexGrow(1.0),
            justifyContent(center),
            margin2(
                ~v=zero,
                ~h=rem(0.5)
            ),
            Style.desktopMediaQuery([
                margin(zero)
            ])
        ])
    );

    [@react.component]
    let make = (~children) =>
        <div className>
            children
        </div>;
};


module Main = {
    let className = Css.(
        merge([
            Style.centredColumnClassName,
            style([
                flexDirection(column)
            ])
        ])
    );

    [@react.component]
    let make = (~children) =>
        <main className>
            children
        </main>;
};


module HomeLink = {
    let className = Css.(
        style([
            marginRight(auto),
            fontSize(rem(1.125)),
            color(Style.linkHoverColour)
        ])
    );

    [@react.component]
    let make = (~children) =>
        <RouteLink className route=Route.index()>
            children
        </RouteLink>;
};


module NavLinks = {
    let className = Css.(
        merge([
            Style.centredColumnClassName,
            style([
                alignItems(center)
            ])
        ])
    );

    [@react.component]
    let make = (~children) =>
        <div className>
            children
        </div>;
};


module Nav = {
    let className = Css.(
        merge([
            Style.smallCapsClassName,
            Style.bottomBorderClassName,
            style([
                display(flexBox),
                justifyContent(center),
                marginBottom(rem(1.5)),
                padding(rem(0.5))
            ])
        ])
    );

    [@react.component]
    let make = (~children) =>
        <nav className>
            children
        </nav>;
};


[@react.component]
let make = (~siteName, ~state) => {
    let activeRoute = Option.map(State.toRoute, state);
    let page = switch (state) {
        | Some(Index(data)) => <IndexPage activeRoute data/>
        | Some(TagSearch(data)) => <TagSearchPage activeRoute data/>
        | Some(About(data)) => <AboutPage data/>
        | Some(Entry(data)) => <EntryPage data/>
        | None => <NotFoundPage/>
    };

    <Root>
        <Nav>
            <NavLinks>
                <HomeLink>
                    (siteName |> React.string)
                </HomeLink>
                <RouteLink activeRoute=?activeRoute route=Route.about()>
                    ("About" |> React.string)
                </RouteLink>
            </NavLinks>
        </Nav>
        <MainContainer>
            <Main>
                page
            </Main>
        </MainContainer>
    </Root>
};
