type virtualHtmlProps = {
    tag: string,
    children: React.element
};


type codeProps = {
    language: string,
    value: string
};


type headingProps = {
    level: int,
    children: React.element
};


type paragraphProps = {
    children: React.element
};


type linkProps = {
    href: string,
    children: React.element
};


type renderers = {
    virtualHtml: virtualHtmlProps => React.element,
    // code: codeProps => React.element,
    heading: headingProps => React.element,
    paragraph: paragraphProps => React.element,
    link: linkProps => React.element
};


[@bs.module]
[@react.component]
external make: (
    ~source: string,
    ~escapeHtml: bool,
    ~renderers: renderers
) => React.element = "react-markdown";
