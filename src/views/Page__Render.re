let render = (~siteName, ~pageData) => {
    Style.registerGlobalStyles();
    let rendered = <Page__Component siteName pageData/>
        |> ReactDOMServerRe.renderToString
        |> Emotion.Server.renderStylesToString;
    "<!DOCTYPE html>" ++ rendered
};
