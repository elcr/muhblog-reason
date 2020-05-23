let render = (~siteName, ~pageData) => {
    let rendered = <Page siteName pageData/>
        |> ReactDOMServerRe.renderToString
        |> Emotion.Server.renderStylesToString;
    "<!DOCTYPE html>" ++ rendered
};
