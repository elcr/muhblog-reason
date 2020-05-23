module Container = {
    let className = Css.(
        style([
            display(flexBox),
            justifyContent(center)
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
