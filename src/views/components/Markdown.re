open Relude.Globals;


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


module StyledHeading = {
    let classNameH2 = Css.(
        style([
            margin4(
                ~top=rem(1.5),
                ~right=zero,
                ~bottom=rem(0.6),
                ~left=zero
            ),
            fontSize(rem(1.5)),
            Relude.Function.uncurry3(borderBottom, Style.border),
            firstChild([
                marginTop(zero)
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


[@react.component]
let make = (~renderParagraph=?, ~text) => {
    let renderers = {
        "virtualHtml": HTMLElement.make,
        "code": props =>
            <HighlightedCode language=(props##language) text=(props##value)/>,
        "heading": StyledHeading.make,
        "paragraph": Option.getOrElse(
            props => <p>(props##children)</p>,
            renderParagraph
        ),
        "link": props =>
            <Link url=(props##href)>
                (props##children)
            </Link>
    };

    <ReactMarkdown renderers source=text escapeHtml=false/>
}
