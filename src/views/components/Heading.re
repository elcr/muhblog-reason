[@react.component]
let make = (~level=1, ~className=?, ~id=?, ~children) => {
    let className = Style.combineClassNames([
        Some(Style.smallCapsClassName),
        className
    ]);
    let tag = "h" ++ ((level > 6 ? 6 : level) |> Js.String.make);

    ReactDOMRe.createElement(
        ~props=ReactDOMRe.props(~className, ~id=?id, ()),
        tag,
        [| children |]
    )
};
