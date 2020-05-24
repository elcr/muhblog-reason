open Relude.Globals;


module IndexHeading = {
    let className = Css.(
        style([
            fontSize(rem(1.5)),
            marginBottom(zero)
        ])
    );

    [@react.component]
    let make = (~children) =>
        <Heading className>
            children
        </Heading>;
};


module Article = {
    let className = Css.(
        style([
            Relude.Function.uncurry3(borderBottom, Style.border),
            paddingBottom(rem(1.6)),
            margin2(
                ~v=rem(0.5),
                ~h=zero
            ),
            Style.desktopMediaQuery([
                margin2(
                    ~v=rem(0.8),
                    ~h=zero
                )
            ]),
            firstOfType([
                marginTop(zero)
            ])
        ])
    );

    [@react.component]
    let make = (~children) =>
        <article className>
            children
        </article>;
};


module Header = {
    let className = Css.(
        style([
            marginBottom(rem(1.0))
        ])
    );

    [@react.component]
    let make = (~children) =>
        <header className>
            children
        </header>;
}


[@react.component]
let make = (~page, ~total, ~entries) =>
    entries
        |> List.map((entry: PageData.indexEntry) => {
            let route = Router.Entry({
                year: Date.getYear(entry.date),
                month: Date.getMonth(entry.date),
                day: Date.getDay(entry.date),
                slug: Utils.slug(entry.title)
            });
            let preview = Js.Re.exec_([%re {|/^(.+?)\n\n/|}], entry.text)
                |> Option.map(Js.Re.captures)
                |> Option.flatMap(Array.at(1))
                |> Option.flatMap(Js.Nullable.toOption)
                |> Option.getOrElse(entry.text);

            <Article key=(Date.toISOTimestamp(entry.date) ++ entry.title)>
                <Header>
                    <IndexHeading>
                        <RouteLink route>
                            (entry.title |> React.string)
                        </RouteLink>
                    </IndexHeading>
                    <Timestamp date=entry.date/>
                </Header>
                <section>
                    <Markdown text=preview/>
                </section>
            </Article>
        })
        |> List.toArray
        |> React.array;
