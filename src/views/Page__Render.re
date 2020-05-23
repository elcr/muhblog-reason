let render = (~siteName, ~pageData) => {
    let rendered = <Page__Component siteName pageData/>
        |> ReactDOMServerRe.renderToString
        |> Emotion.Server.renderStylesToString;
    "<!DOCTYPE html>" ++ rendered
};
