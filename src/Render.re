let render = (~siteName, ~pageData: option(PageData.t)) => {
    let renderedApp = ReactDOMServerRe.renderToString(
        <App siteName pageData/>
    );
    let { html, css }: Emotion.critical = Emotion.extractCritical(renderedApp);

    let title = switch (pageData) {
        | Some(Index(_)) => siteName
        | Some(TagSearch({ tag })) => {j|$tag | $siteName|j}
        | Some(About(_)) => {j|About | $siteName|j}
        | Some(Entry({ title })) => {j|$title | $siteName|j}
        | None => {j|Not found | $siteName|j}
    };
    let renderedPage = ReactDOMServerRe.renderToString(
        <Page title css>
            html
        </Page>
    );
    "<!DOCTYPE html>" ++ renderedPage
};
