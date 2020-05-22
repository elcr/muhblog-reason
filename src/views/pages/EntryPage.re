open Relude.Globals;


[@react.component]
let make = (~data as { title, text }: PageData.entryData) => {
    <div>
        <div>(title |> React.string)</div>
        <div>
            (text |> React.string)
        </div>
    </div>
};
