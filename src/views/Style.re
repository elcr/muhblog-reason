open Css;


let blue = rgb(25, 116, 195);

let grey1 = rgb(249, 249, 250);
let grey2 = rgb(233, 236, 239);
let grey3 = rgb(222, 226, 230);
let grey4 = rgb(206, 212, 218);
let grey5 = rgb(173, 181, 189);
let grey6 = rgb(108, 117, 125);
let grey7 = rgb(73, 80, 87);
let grey8 = rgb(52, 58, 64);
let grey9 = rgb(33, 37, 41);

let darkBorderColour = grey2;
let lightBorderColour = grey3;

let desktopColumnRem = 37.5;
let desktopColumnWidth = width(rem(desktopColumnRem));
let desktopMediaQuery = media({j|(min-width: $(desktopColumnRem)rem)|j});


let registerGlobalStyles = () => {
    global("a", [
        textDecoration(none),
        color(blue)
    ]);


    let codeStyle = [
        rem(0.875) |> fontSize,
        fontFamily(`monospace),
        backgroundColor(grey2)
    ];
    global("code", codeStyle);
    global("pre", [
        rem(0.625) |> padding,
        overflow(auto),
        ...codeStyle
    ]);


    global("h1 code, h2 code, h3 code", [
        fontSize(inherit_)
    ]);
};
