let baseClassName = Css.(
    style([
        textDecoration(none),
        color(Style.linkColour),
        hover([
            color(Style.linkHoverColour)
        ])
    ])
);


[@react.component]
let make = (~route, ~activeRoute, ~className=?, ~activeClassName=?, ~children) => {
    let activeClassName = switch (activeRoute, activeClassName) {
        | (Some(activeRoute), Some(_)) when route == activeRoute =>
            activeClassName
        | _ =>
            None
    };
    let className = Style.combineClassNames([
        Some(baseClassName),
        className,
        activeClassName
    ]);
    let href = Router.build(route);

    <a className href>
        children
    </a>
};
