open Relude.Globals;


module Header = {
    let className = Css.(
        merge([
            Style.bottomBorderClassName,
            style([
                marginBottom(rem(1.6)),
                paddingBottom(rem(0.3))
            ])
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
            marginBottom(rem(1.0))
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
                ~h=rem(0.3)
            ),
            firstOfType([
                marginLeft(zero)
            ])
        ])
    );

    [@react.component]
    let make = (~tag) => {
        let route = Route.tagSearch(~slug=Utils.slug(tag), ());

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


module NavigationLink = {
    let className = Css.(
        style([
            margin2(
                ~v=zero,
                ~h=rem(0.5)
            )
        ])
    );

    [@react.component]
    let make = (~title, ~date) => {
        let route = Route.entry(~date, ~title, ());

        <RouteLink className route>
            (title |> React.string)
        </RouteLink>
    };
};


module NavigationLinkContainer = {
    let className = Css.(
        style([
            display(flexBox),
            alignItems(center),
            margin2(
                ~v=rem(1.0),
                ~h=zero
            ),
            Style.desktopMediaQuery([
                margin(zero)
            ])
        ])
    );

    [@react.component]
    let make = (~children) =>
        <div className>
            children
        </div>;
};


module Navigation = {
    let className = Css.(
        merge([
            Style.smallCapsClassName,
            style([
                display(flexBox),
                flexDirection(columnReverse),
                justifyContent(spaceBetween),
                alignItems(center),
                margin2(
                    ~v=rem(1.0),
                    ~h=zero
                ),
                fontSize(rem(1.1)),
                Style.desktopMediaQuery([
                    flexDirection(row),
                    margin4(
                        ~top=rem(2.0),
                        ~right=zero,
                        ~bottom=rem(3.0),
                        ~left=zero
                    ),
                ])
            ])
        ])
    );

    [@react.component]
    let make = (~previous, ~next) => {
        let previousLink = previous
            |> Option.map(({ title, date }: State.navigationEntry) =>
                <NavigationLinkContainer>
                    <Arrow direction=Arrow.Left/>
                    <NavigationLink title date/>
                </NavigationLinkContainer>
            )
            |> Option.getOrElse(<div/>);

        let nextLink = next
            |> Option.map(({ title, date }: State.navigationEntry) =>
                <NavigationLinkContainer>
                    <NavigationLink title date/>
                    <Arrow direction=Arrow.Right/>
                </NavigationLinkContainer>
            )
            |> Option.getOrElse(<div/>);

        <footer className>
            previousLink
            nextLink
        </footer>
    };
};


module StyledParagraph = {
    let className = Css.(
        style([
            lastOfType([
                marginBottom(zero)
            ])
        ])
    );

    [@react.component]
    let make = (~children) =>
        <p className>
            children
        </p>;
};


module StyledMarkdown = {
    let className = Css.(
        merge([
            Style.bottomBorderClassName,
            style([
                paddingBottom(rem(2.0))
            ])
        ])
    );

    [@react.component]
    let make = (~buildHeadingRoute, ~text) =>
        <section className>
            <Markdown buildHeadingRoute renderParagraph=StyledParagraph.make text/>
        </section>;
};


[@react.component]
let make = (~data as { title, text, date, tags, previous, next }: State.entryData) => {
    let buildHeadingRoute = Route.entry(~date, ~title);

    <article>
        <Header>
            <StyledHeading>
                (title |> React.string)
            </StyledHeading>
            <StyledTimestamp date/>
            <TagList tags/>
        </Header>
        <StyledMarkdown buildHeadingRoute text/>
        <Navigation previous next/>
    </article>
};
