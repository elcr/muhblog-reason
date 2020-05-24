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


[@react.component]
let make = (~language, ~text) =>
    <ReactSyntaxHighlighter language style=tomorrow>
        (text |> React.string)
    </ReactSyntaxHighlighter>;
