open Relude.Globals;
open Css;


let desktopColumnWidth = rem(50.0);
let desktopMediaQuery = media("(min-width: 37.5rem)");

let backgroundColour = black;
let textColour = rgb(173, 175, 174);
let linkColour = rgb(222, 226, 230);
let linkHoverColour = white;
let border = borderBottom(px(1), `solid, rgb(40, 40, 40));


let smallCapsClassName = style([
    fontFamily(`serif),
    fontVariant(`smallCaps)
]);


let centredColumnClassName = style([
    display(flexBox),
    width(pct(100.0)),
    desktopMediaQuery([
        maxWidth(desktopColumnWidth)
    ])
]);


let combineClassNames = classNames =>
    classNames
        |> List.mapOption(Relude.Function.identity)
        |> merge;
