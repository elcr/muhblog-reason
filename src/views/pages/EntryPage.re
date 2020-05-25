open Relude.Globals;


module Header = {
    let className = Css.(
        style([
            marginBottom(rem(1.6)),
            paddingBottom(rem(0.3)),
            Relude.Function.uncurry3(borderBottom, Style.border)
        ])
    );

    [@react.component]
    let make = (~children) =>
        <header className>
            children
        </header>;
};


module StyledHeading = {
    let className = Css.(
        style([
            fontSize(rem(1.75)),
            marginBottom(rem(1.0)),
            textAlign(center),
            Style.desktopMediaQuery([
                textAlign(unset)
            ])
        ])
    );

    [@react.component]
    let make = (~children) =>
        <Heading className>
            children
        </Heading>;
};


module TagItem = {
    let className = Css.(
        style([
            display(inlineBlock),
            fontStyle(italic),
            margin2(
                ~v=zero,
                ~h=rem(0.6)
            ),
            firstOfType([
                margin(zero)
            ])
        ])
    );

    [@react.component]
    let make = (~tag) => {
        let route = Router.TagSearch({
            slug: Utils.slug(tag),
            page: 1
        });

        <li className>
            <RouteLink route>
                (tag |> React.string)
            </RouteLink>
        </li>
    };
};


module TagList = {
    let className = Css.(
        style([
            display(flexBox),
            flexWrap(wrap),
            margin(zero),
            padding(zero)
        ])
    );

    [@react.component]
    let make = (~tags) => {
        let tags = List.map(
            tag => <TagItem key=tag tag/>,
            tags
        );

        <ul className>
            (tags |> Utils.reactList)
        </ul>
    };
};


module StyledTimestamp = {
    let className = Css.(
        style([
            display(block),
            marginBottom(rem(0.3))
        ])
    );

    [@react.component]
    let make = (~date) =>
        <Timestamp className date/>
};


[@react.component]
let make = (~data as { title, text, date, tags }: PageData.entryData) => {
    <>
        <Header>
            <StyledHeading>
                (title |> React.string)
            </StyledHeading>
            <StyledTimestamp date/>
            <TagList tags/>
        </Header>
        <section>
            <Markdown text/>
        </section>
    </>
};
