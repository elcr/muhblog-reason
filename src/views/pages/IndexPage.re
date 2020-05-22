open Relude.Globals;


[@react.component]
let make = (~data as { page, total, entries }: PageData.indexData) => {
    let entries = entries
        |> List.map((entry: PageData.indexEntry) =>
            <div key=entry.title>
                (entry.title |> React.string)
            </div>
        )
        |> List.toArray;

    <div>
        <div>({j|page $page|j} |> React.string)</div>
        <div>({j|total $total|j} |> React.string)</div>
        <div>
            (entries |> React.array)
        </div>
    </div>
};
