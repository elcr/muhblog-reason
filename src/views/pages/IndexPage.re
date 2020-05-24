let buildPageRoute = page =>
    Router.Index({ page: page });


[@react.component]
let make = (~activeRoute, ~data as { page, total, entries }: PageData.indexData) =>
    <EntriesList activeRoute page total entries buildPageRoute/>;
