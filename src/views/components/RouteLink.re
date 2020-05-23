open Relude.Globals;


let hoverStyles = Css.([
    textDecoration(none),
    color(Style.linkHoverColour)
])


let baseClassName = Css.(
    style([
        color(Style.linkColour),
        hover(hoverStyles)
    ])
);


let activeClassName = Css.style(hoverStyles);


[@react.component]
let make = (~route, ~activeRoute, ~className=?, ~children) => {
    let className = Style.combineClassNames([
        Some(baseClassName),
        className,
        Option.filter(activeRoute => route == activeRoute, activeRoute)
            |> Option.map(_ => activeClassName)
    ]);
    let href = Router.build(route);

    <a className href>
        children
    </a>
};
