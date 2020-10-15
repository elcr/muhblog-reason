let buildPageRoute = page =>
    Route.Index({ page: page });


[@react.component]
let make = (~activeRoute, ~data as { page, total, entries }: State.indexData) =>
    <EntriesList activeRoute page total entries buildPageRoute/>;
