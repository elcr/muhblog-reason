open ReactSyntaxHighlighter.Style;
open ReactSyntaxHighlighter.Language;


let registerStyles = () => {
    register(`bash, bash);
    register(`javascript, javascript);
    register(`json, json);
    register(`python, python);
    register(`reason, reason);
    register(`typescript, typescript);
    register(`tsx, tsx);
};


let className = Css.(
    style([
        fontSize(rem(0.8)),
        important(marginBottom(rem(1.0)))
    ])
);


[@react.component]
let make = (~language, ~text) =>
    <ReactSyntaxHighlighter className language style=tomorrow >
        (text |> React.string)
    </ReactSyntaxHighlighter>;
