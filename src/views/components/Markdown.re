open Relude.Globals;


module SpoilerHTML = {
    let className = Css.(
        style([
            backgroundColor(black),
            color(black),
            hover([
                color(white)
            ])
        ])
    );

    [@react.component]
    let make = (~tag, ~children) =>
        if (tag === "spoiler")
            <span className>
                children
            </span>
        else
            ReactDOMRe.createElement(tag, [| children |]);
};


module StyledHeading = {
    let classNameH2 = Css.(
        merge([
            Style.bottomBorderClassName,
            style([
                margin4(
                    ~top=rem(1.5),
                    ~right=zero,
                    ~bottom=rem(0.6),
                    ~left=zero
                ),
                fontSize(rem(1.5)),
                firstChild([
                    marginTop(zero)
                ])
            ])
        ])
    );

    let classNameH3 = Css.(
        style([
            margin4(
                ~top=rem(1.25),
                ~right=zero,
                ~bottom=rem(0.5),
                ~left=zero
            ),
            fontSize(rem(1.25))
        ])
    );

    [@react.component]
    let make = (~level, ~children) => {
        let className = switch (level) {
            | 2 => Some(classNameH2)
            | 3 => Some(classNameH3)
            | _ => None
        };

        <Heading className=?className level>
            children
        </Heading>
    };
};


module StyledCode = {
    let className = Css.(
        style([
            fontSize(rem(1.1))
        ])
    );

    [@react.component]
    let make = (~children) =>
        <code className>
            children
        </code>;
};


module LazyImage = {
    [@react.component]
    let make = (~src) =>
        ReactDOMRe.createElement(
            "img",
            ~props=ReactDOMRe.objToDOMProps({
                "src": src,
                "loading": "lazy"
            }),
            [||]
        );
};


module HighlightedCode = {
    let className = Css.(
        style([
            fontSize(rem(0.8)),
            important(marginBottom(rem(1.0)))
        ])
    );

    [@react.component]
    let make = (~language, ~text) =>
        <ReactSyntaxHighlighter className language style=ReactSyntaxHighlighter.Style.tomorrow >
            (text |> React.string)
        </ReactSyntaxHighlighter>;
};


[@react.component]
let make = (~renderParagraph=?, ~text) => {
    let renderers = {
        "virtualHtml": SpoilerHTML.make,
        "code": props =>
            <HighlightedCode language=(props##language) text=(props##value)/>,
        "heading": StyledHeading.make,
        "paragraph": Option.getOrElse(
            props => <p>(props##children)</p>,
            renderParagraph
        ),
        "inlineCode": StyledCode.make,
        "link": props =>
            <Link url=(props##href)>
                (props##children)
            </Link>,
        "image": LazyImage.make
    };

    <ReactMarkdown renderers source=text escapeHtml=false/>
}
