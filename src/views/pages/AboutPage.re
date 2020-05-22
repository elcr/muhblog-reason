open Relude.Globals;


[@react.component]
let make = (~data as { text }: PageData.aboutData) => {
    <div>
        <div>("about" |> React.string)</div>
        <div>
            (text |> React.string)
        </div>
    </div>
};
