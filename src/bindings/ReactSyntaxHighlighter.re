module Style = {
    type t;

    [@bs.module "react-syntax-highlighter/dist/esm/styles/prism/tomorrow"]
    external tomorrow: t = "default";
};


module Language = {
    type t;

    [@bs.module "react-syntax-highlighter/dist/esm/languages/prism/bash"]
    external bash: t = "default";

    [@bs.module "react-syntax-highlighter/dist/esm/languages/prism/javascript"]
    external javascript: t = "default";

    [@bs.module "react-syntax-highlighter/dist/esm/languages/prism/json"]
    external json: t = "default";

    [@bs.module "react-syntax-highlighter/dist/esm/languages/prism/python"]
    external python: t = "default";

    [@bs.module "react-syntax-highlighter/dist/esm/languages/prism/reason"]
    external reason: t = "default";

    [@bs.module "react-syntax-highlighter/dist/esm/languages/prism/typescript"]
    external typescript: t = "default";

    [@bs.module "react-syntax-highlighter/dist/esm/languages/prism/tsx"]
    external tsx: t = "default";

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


[@bs.module "react-syntax-highlighter/dist/esm/prism-light"]
[@react.component]
external make : (
    ~className: string,
    ~language: string,
    ~style: Style.t,
    ~children: React.element
) => React.element = "default";
