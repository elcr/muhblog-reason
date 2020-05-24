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
let make = (~url, ~active=false, ~className=?, ~children) => {
    let className = Style.combineClassNames([
        Some(baseClassName),
        className,
        active ? Some(activeClassName) : None
    ]);

    <a className href=url>
        children
    </a>
};
