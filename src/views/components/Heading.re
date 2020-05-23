[@react.component]
let make = (~size=1, ~className=?, ~children) => {
    let className = Style.combineClassNames([
        Some(Style.smallCapsClassName),
        className
    ]);
    let tag = "h" ++ ((size > 6 ? 6 : size) |> Js.String.make);

    ReactDOMRe.createElement(
        ~props=ReactDOMRe.props(~className, ()),
        tag,
        [| children |]
    )
};
