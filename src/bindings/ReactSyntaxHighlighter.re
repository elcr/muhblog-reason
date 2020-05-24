module Style = {
    type t;

    [@bs.module]
    external tomorrow: t = "react-syntax-highlighter/dist/esm/styles/prism/tomorrow";
};


module Language = {
    type t;

    [@bs.module]
    external bash: t = "react-syntax-highlighter/dist/esm/languages/prism/bash"

    [@bs.module]
    external javascript: t = "react-syntax-highlighter/dist/esm/languages/prism/javascript"

    [@bs.module]
    external json: t = "react-syntax-highlighter/dist/esm/languages/prism/json"

    [@bs.module]
    external python: t = "react-syntax-highlighter/dist/esm/languages/prism/python"

    [@bs.module]
    external reason: t = "react-syntax-highlighter/dist/esm/languages/prism/reason"

    [@bs.module]
    external typescript: t = "react-syntax-highlighter/dist/esm/languages/prism/typescript"

    [@bs.module]
    external tsx: t = "react-syntax-highlighter/dist/esm/languages/prism/tsx"

    [@bs.module "react-syntax-highlighter/dist/esm/prism-light"]
    [@bs.scope "default"]
    external register : (
        [@bs.string] [
            | `bash
            | `javascript
            | `json
            | `python
            | `reason
            | `typescript
            | `tsx
        ],
        t
    ) => unit = "registerLanguage";
};


[@bs.module]
[@react.component]
external make : (
    ~language: string,
    ~style: Style.t,
    ~children: React.element
) => React.element = "react-syntax-highlighter/dist/esm/prism-light";
