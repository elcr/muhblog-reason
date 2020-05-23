let className = Css.(
    style([
        fontStyle(italic)
    ])
);


[@react.component]
let make = (~date) => {
    let iso = Date.toISOTimestamp(date);
    let formatted = Strftime.strftime("%d/%m/%Y %H:%M", date);

    <time className dateTime=iso>
        (formatted |> React.string)
    </time>
};
