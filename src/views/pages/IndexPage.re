open Relude.Globals;


module NoMarginHeading = {
    let className = Css.(
        merge([
            Style.smallCapsClassName,
            style([
                fontSize(rem(1.5)),
                marginBottom(zero)
            ])
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
            paddingBottom(rem(0.2)),
            margin2(
                ~v=rem(0.5),
                ~h=zero
            ),
            Style.desktopMediaQuery([
                margin2(
                    ~v=rem(1.0),
                    ~h=zero
                )
            ]),
            firstChild([
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


[@react.component]
let make = (~data as { page, total, entries }: PageData.indexData) =>
    entries
        |> List.map((entry: PageData.indexEntry) => {
            let route = Router.Entry({
                year: Date.getYear(entry.date),
                month: Date.getMonth(entry.date),
                day: Date.getDay(entry.date),
                slug: Utils.slug(entry.title)
            });

            <Article key=(Date.toISOTimestamp(entry.date) ++ entry.title)>
                <header>
                    <NoMarginHeading>
                        <RouteLink route>
                            (entry.title |> React.string)
                        </RouteLink>
                    </NoMarginHeading>
                    <Timestamp date=entry.date/>
                </header>
            </Article>
        })
        |> List.toArray
        |> React.array;
