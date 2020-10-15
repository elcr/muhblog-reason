[@react.component]
let make = (~data as { text }: State.aboutData) =>
    <Markdown buildHeadingRoute=Route.about text/>;
