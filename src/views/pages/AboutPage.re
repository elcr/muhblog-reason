let buildHeadingRoute = (~id) =>
    Router.About({ id: id });


[@react.component]
let make = (~data as { text }: PageData.aboutData) =>
    <Markdown buildHeadingRoute text/>;
