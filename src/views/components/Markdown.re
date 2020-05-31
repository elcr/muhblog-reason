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
    module IDLink = {
        let className = Css.(
            style([
                display(none),
                fontSize(rem(0.8))
            ])
        );

        [@react.component]
        let make = (~buildRoute, ~id) =>
            <RouteLink className route=buildRoute(~id)>
                ({j|🔗|j} |> React.string)
            </RouteLink>;
    };

    let baseClassName = Css.(
        style([
            display(flexBox),
            justifyContent(spaceBetween),
            alignItems(center),
            hover([
                child("a", [
                    display(block)
                ])
            ])
        ])
    );

    let classNameH2 = Css.(
        merge([
            baseClassName,
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
        merge([
            baseClassName,
            style([
                margin4(
                    ~top=rem(1.25),
                    ~right=zero,
                    ~bottom=rem(0.5),
                    ~left=zero
                ),
                fontSize(rem(1.25))
            ])
        ])
    );

    [@react.component]
    let make = (~buildRoute, ~level, ~children) => {
        let className = switch (level) {
            | 2 => Some(classNameH2)
            | 3 => Some(classNameH3)
            | _ => None
        };
        let text: option(string) = Obj.magic(children)
            |> Array.at(0)
            |> Option.map(child => child##props##children)
            |> Option.filter(child => Js.Types.test(child, String));
        let id = Option.map(Utils.slug, text);

        <Heading id=?id className=?className level>
            (text
                |> Option.map(React.string)
                |> Option.getOrElse(React.null))
            <IDLink id buildRoute/>
        </Heading>
    };
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
let make = (~buildHeadingRoute, ~renderParagraph=?, ~text) => {
    let renderers = {
        "virtualHtml": SpoilerHTML.make,
        "code": props =>
            <HighlightedCode language=(props##language) text=(props##value)/>,
        "heading": props =>
            <StyledHeading buildRoute=buildHeadingRoute level=(props##level)>
                (props##children)
            </StyledHeading>,
        "paragraph": Option.getOrElse(
            props => <p>(props##children)</p>,
            renderParagraph
        ),
        "link": props =>
            <Link url=(props##href)>
                (props##children)
            </Link>,
        "image": LazyImage.make
    };

    <ReactMarkdown renderers source=text escapeHtml=false/>
}
