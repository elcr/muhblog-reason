open Relude.Globals;


[@react.component]
let make = (~data as { page, tag, entries }: PageData.tagSearchData) => {
    let entries = entries
        |> List.map((entry: PageData.indexEntry) =>
            <div key=entry.title>
                (entry.title |> React.string)
            </div>
        )
        |> List.toArray;

    <div>
        <div>({j|tag $tag|j} |> React.string)</div>
        <div>({j|page $page|j} |> React.string)</div>
        <div>
            (entries |> React.array)
        </div>
    </div>
};
