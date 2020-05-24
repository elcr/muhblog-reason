let className = Css.(
    style([
        backgroundColor(black),
        color(black),
        hover([
            color(white)
        ])
    ])
);


[@react.component]
let make = (~children) =>
    <span className>
        children
    </span>;
