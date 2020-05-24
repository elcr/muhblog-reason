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
            ]),
            lastOfType([
                marginBottom(zero)
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
};


module PageItem = {
    let className = Css.(
        style([
            margin2(
                ~v=auto,
                ~h=rem(0.375)
            ),
            Style.desktopMediaQuery([
                margin2(
                    ~v=auto,
                    ~h=rem(0.5)
                ),
            ])
        ])
    );

    [@react.component]
    let make = (~children) =>
        <span className>
            children
        </span>;
};


module PageLink = {
    let className = PageItem.className;

    [@react.component]
    let make = (~buildPageRoute, ~activeRoute, ~page, ~children) =>
        <RouteLink className activeRoute=?activeRoute route=buildPageRoute(page)>
            children
        </RouteLink>;
};


module PreviousPageLinks = {
    [@react.component]
    let make = (~buildPageRoute, ~activeRoute, ~page) => {
        let firstArrow = <Arrow direction=Arrow.Left double=true/>;
        let previousArrow = <Arrow direction=Arrow.Left/>;

        if (page === 1)
            <>
                <PageItem>
                    firstArrow
                </PageItem>
                <PageItem>
                    previousArrow
                </PageItem>
            </>
        else
            <>
                <PageLink buildPageRoute activeRoute page=1>
                    firstArrow
                </PageLink>
                <PageLink buildPageRoute activeRoute page=(page - 1)>
                    previousArrow
                </PageLink>
            </>
    };
};


module NextPageLinks = {
    [@react.component]
    let make = (~buildPageRoute, ~activeRoute, ~totalPages, ~page) => {
        let nextArrow = <Arrow direction=Arrow.Right/>;
        let lastArrow = <Arrow direction=Arrow.Right double=true/>;

        if (page === totalPages)
            <>
                <PageItem>
                    nextArrow
                </PageItem>
                <PageItem>
                    lastArrow
                </PageItem>
            </>
        else
            <>
                <PageLink buildPageRoute activeRoute page=(page + 1)>
                    nextArrow
                </PageLink>
                <PageLink buildPageRoute activeRoute page=totalPages>
                    lastArrow
                </PageLink>
            </>
    };
};


module PageNumberLinks = {
    [@react.component]
    let make = (~buildPageRoute, ~activeRoute, ~totalPages, ~page) => {
        let padding = Constants.paginationSize / 2;
        let startPage = ref(page - padding);
        let endPage = ref(page + padding);

        if (startPage^ < 1 && endPage^ > totalPages) {
            startPage := 1;
            endPage := totalPages
        }
        else {
            let difference = ref(0);
            if (startPage^ < 1) {
                difference := 1 - startPage^;
                startPage := startPage^ + difference^;
                endPage := endPage^ + difference^
            };
            if (endPage^ > totalPages) {
                difference := endPage^ - totalPages;
                endPage := endPage^ - difference^;
                startPage := startPage^ - difference^;
                startPage := startPage^ < 1 ? 1 : startPage^;
            };
        };

        Utils.range(~start=startPage^, ~stop=endPage^, ())
            |> Js.Array.map(p =>
                if (p === page)
                    <PageItem>
                        (p |> React.int)
                    </PageItem>
                else
                    <PageLink buildPageRoute activeRoute page=p>
                        (p |> React.int)
                    </PageLink>
            )
            |> React.array
    };
};


module Pagination = {
    let className = Css.(
        merge([
            Style.smallCapsClassName,
            style([
                fontSize(rem(1.125)),
                margin2(
                    ~v=rem(2.4),
                    ~h=auto
                )
            ])
        ])
    );

    [@react.component]
    let make = (~buildPageRoute, ~activeRoute, ~total, ~page) => {
        let totalPages = (Float.fromInt(total)
            /. Float.fromInt(Constants.entriesPerPage))
            |> Js.Math.ceil;

        <div className>
            <PreviousPageLinks buildPageRoute activeRoute page/>
            <PageNumberLinks buildPageRoute activeRoute totalPages page/>
            <NextPageLinks buildPageRoute activeRoute totalPages page/>
        </div>
    };
};


[@react.component]
let make = (~buildPageRoute, ~activeRoute, ~page, ~total, ~entries) =>
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
        |> List.append(
            <Pagination buildPageRoute activeRoute total page/>
        )
        |> Utils.reactList;
