open Relude.Globals;
open Css;


let desktopColumnWidth = rem(48.0);
let desktopMediaQuery = media("(min-width: 37.5rem)");

let backgroundColour = black;
let textColour = rgb(173, 175, 174);
let linkColour = rgb(222, 226, 230);
let linkHoverColour = white;

let smallCapsClassName = style([
    fontFamily(`serif),
    unsafe("fontVariant", "small-caps")
]);

let centredColumnClassName = style([
    display(flexBox),
    width(pct(100.0)),
    desktopMediaQuery([
        maxWidth(desktopColumnWidth)
    ])
]);

let bottomBorderClassName = style([
    borderBottom(px(1), `solid, rgb(40, 40, 40))
]);


let combineClassNames = classNames =>
    classNames
        |> List.mapOption(Relude.Function.identity)
        |> merge;


let registerGlobalStyles = () => {
    open ReactSyntaxHighlighter.Language;

    register(`bash, bash);
    register(`javascript, javascript);
    register(`json, json);
    register(`python, python);
    register(`reason, reason);
    register(`typescript, typescript);
    register(`tsx, tsx);
};
