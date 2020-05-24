let className = Css.(
    style([
        marginBottom(zero)
    ])
);


[@react.component]
let make = (~children) =>
    <p className>
        children
    </p>;
