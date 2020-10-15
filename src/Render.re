let render = (~siteName, ~favicon, ~state: option(State.t)) => {
    Style.registerGlobalStyles();

    let renderedApp = ReactDOMServerRe.renderToString(
        <App siteName state/>
    );
    let { html, css }: Emotion.critical = Emotion.extractCritical(renderedApp);

    let title = switch (state) {
        | Some(Index(_)) => siteName
        | Some(TagSearch({ tag })) => {j|$tag | $siteName|j}
        | Some(About(_)) => {j|About | $siteName|j}
        | Some(Entry({ title })) => {j|$title | $siteName|j}
        | None => {j|Not found | $siteName|j}
    };
    let renderedPage = ReactDOMServerRe.renderToString(
        <Page title css favicon>
            html
        </Page>
    );
    "<!DOCTYPE html>" ++ renderedPage
};
