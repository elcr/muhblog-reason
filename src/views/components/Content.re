module Container = {
    let className = Css.(
        style([
            display(flexBox),
            flexGrow(1.0),
            justifyContent(center),
            margin2(
                ~v=zero,
                ~h=rem(0.5)
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


module Main = {
    let className = Css.(
        merge([
            Style.centredColumnClassName,
            style([
                flexDirection(column)
            ])
        ])
    );

    [@react.component]
    let make = (~children) =>
        <main className>
            children
        </main>;
};


[@react.component]
let make = (~children) =>
    <Container>
        <Main>
            children
        </Main>
    </Container>;
