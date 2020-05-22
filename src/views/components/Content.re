module Outer = {
    let className = Css.(
        style([
            display(flexBox),
            flexDirection(column),
            flexGrow(1.0)
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
        style([
            display(flexBox),
            justifyContent(center),
            backgroundColor(Style.grey7),
            color(Style.grey2)
        ])
    );

    [@react.component]
    let make = (~children) =>
        <div className>
            children
        </div>;

    module Inner = {
        let className = Css.(
            style([
                display(flexBox),
                justifyContent(spaceBetween),
                width(pct(100.0)),
                Style.desktopMediaQuery([
                    Style.desktopColumnWidth
                ])
            ])
        );

        [@react.component]
        let make = (~children) =>
            <nav className>
                children
            </nav>;

        module RightGroup = {
            let className = Css.(
                style([
                    display(flexBox),
                    alignItems(center)
                ])
            );

            [@react.component]
            let make = (~children) =>
                <div className>
                    children
                </div>;
        }
    }

    module Link = {
        let className = Css.(
            style([
                fontSize(rem(1.125)),
                padding2(
                    ~v=rem(0.25),
                    ~h=rem(0.625)
                ),
                color(Style.grey2),
                hover([
                    backgroundColor(Style.grey9),
                    color(white),
                    textDecoration(none)
                ])
            ])
        );

        [@react.component]
        let make = (~route, ~children) =>
            <RouterLink route className>
                children
            </RouterLink>;
    };
};


module Main = {
    let className = Css.(
        style([
            display(flexBox),
            flexDirection(column),
            flexGrow(1.0),
            alignItems(center),
            backgroundColor(Style.grey2),
            color(Style.grey7)
        ])
    );

    [@react.component]
    let make = (~children) =>
        <div className>
            children
        </div>;

    module Inner = {
        let className = Css.(
            style([
                display(flexBox),
                flexDirection(column),
                width(pct(100.0)),
                Style.desktopMediaQuery([
                    Style.desktopColumnWidth
                ]),
                border(px(1), solid, Style.lightBorderColour),
                backgroundColor(Style.grey1)
            ])
        );

        [@react.component]
        let make = (~children) =>
            <main className>
                children
            </main>;
    };
};


[@react.component]
let make = (~siteName, ~children) =>
    <Outer>
        <Nav>
            <Nav.Inner>
                <Nav.Link route=Router.Index({ page: 1 })>
                    (siteName |> React.string)
                </Nav.Link>
                <Nav.Inner.RightGroup>
                    <Nav.Link route=Router.About>
                        ("about" |> React.string)
                    </Nav.Link>
                </Nav.Inner.RightGroup>
            </Nav.Inner>
        </Nav>
        <Main>
            <Main.Inner>
                children
            </Main.Inner>
        </Main>
    </Outer>;
