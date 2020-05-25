let baseClassName = Css.(
    style([
        fontStyle(italic)
    ])
);


[@react.component]
let make = (~className=?, ~date) => {
    let iso = Date.toISOTimestamp(date);
    let formatted = Strftime.strftime("%d/%m/%Y %H:%M", date);
    let className = Style.combineClassNames([
        Some(baseClassName),
        className
    ]);

    <time className dateTime=iso>
        (formatted |> React.string)
    </time>
};
