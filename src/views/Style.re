open Relude.Globals;
open Css;


let desktopColumnWidth = rem(50.0);
let desktopMediaQuery = media("(min-width: 37.5rem)");

let backgroundColour = black;
let textColour = rgb(173, 175, 174);
let linkColour = rgb(222, 226, 230);
let linkHoverColour = white;
let borderColour = rgb(40, 40, 40);
let border = borderBottom(px(1), `solid, borderColour);


let combineClassNames = classNames =>
    classNames
        |> List.mapOption(Relude.Function.identity)
        |> merge;
