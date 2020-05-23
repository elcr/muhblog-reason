module Link = {
    let baseClassName = Css.(
        style([
            padding2(
                ~v=rem(0.5),
                ~h=rem(0.625)
            )
        ])
    );

    [@react.component]
    let make = (~className=?, ~route, ~activeRoute, ~children) => {
        let className = Style.combineClassNames([
            Some(baseClassName),
            className
        ]);

        <RouteLink className route activeRoute>
            children
        </RouteLink>
    };
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
    let make = (~activeRoute, ~children) =>
        <Link className activeRoute route=Router.Index({ page: 1 })>
            children
        </Link>;
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
        style([
            display(flexBox),
            justifyContent(center),
            Style.border
        ])
    ])
);


[@react.component]
let make = (~siteName, ~activeRoute) =>
    <nav className>
        <Container>
            <HomeLink activeRoute>
                (siteName |> React.string)
            </HomeLink>
            <Link activeRoute route=Router.About>
                ("About" |> React.string)
            </Link>
        </Container>
    </nav>;
