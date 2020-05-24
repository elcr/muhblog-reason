[@react.component]
let make = (~data as { page, total, entries }: PageData.indexData) =>
    <EntriesList page total entries/>;
