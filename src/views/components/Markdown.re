module HTMLElement = {
    [@react.component]
    let make = (~tag, ~children) =>
        if (tag === "spoiler")
            <Spoiler>
                children
            </Spoiler>
        else
            ReactDOMRe.createElement(tag, [| children |]);
};


let renderers = ReactMarkdown.{
    virtualHtml: ({ tag, children}) =>
        <HTMLElement tag>
            children
        </HTMLElement>,
    // code: ({ language, value }) => {
    //     <HighlightedCode language text=value/>
    // },
    heading: ({ level, children }) =>
        <Heading level>
            children
        </Heading>,
    paragraph: ({ children }) =>
        <Paragraph>
            children
        </Paragraph>
};


[@react.component]
let make = (~text) =>
    <ReactMarkdown renderers source=text escapeHtml=false/>;
