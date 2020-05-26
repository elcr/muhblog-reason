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
        <RouteLink className route=Router.Index({ page: 1 })>
            children
        </RouteLink>;
};


module Container = {
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


let className = Css.(
    merge([
        Style.smallCapsClassName,
        Style.bottomBorderClassName,
        style([
            display(flexBox),
            justifyContent(center),
            margin4(
                ~top=rem(0.5),
                ~right=rem(0.5),
                ~bottom=rem(1.5),
                ~left=rem(0.5)
            ),
            padding2(
                ~v=rem(0.5),
                ~h=zero
            ),
            Style.desktopMediaQuery([
                margin4(
                    ~top=zero,
                    ~right=zero,
                    ~bottom=rem(1.5),
                    ~left=zero
                )
            ])
        ])
    ])
);


[@react.component]
let make = (~siteName, ~activeRoute) =>
    <nav className>
        <Container>
            <HomeLink>
                (siteName |> React.string)
            </HomeLink>
            <RouteLink activeRoute=?activeRoute route=Router.About>
                ("About" |> React.string)
            </RouteLink>
        </Container>
    </nav>;
