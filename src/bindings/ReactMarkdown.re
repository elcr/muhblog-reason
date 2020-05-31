[@bs.module]
[@react.component]
external make: (
    ~source: string,
    ~escapeHtml: bool,
    ~renderers: {
        .
        "virtualHtml": {
            .
            "tag": string,
            "children": React.element
        } => React.element,
        "code": {
            .
            "language": string,
            "value": string
        } => React.element,
        "heading": {
            .
            "level": int,
            "children": React.element
        } => React.element,
        "paragraph": {
            .
            "children": React.element
        } => React.element,
        "link": {
            .
            "href": string,
            "children": React.element
        } => React.element,
        "image": {
            .
            "src": string
        } => React.element
    }
) => React.element = "react-markdown";
