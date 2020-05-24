let className = Css.(
    style([
        fontSize(rem(0.875)),
        userSelect(none)
    ])
);


type direction =
    | Left
    | Right;


[@react.component]
let make = (~direction, ~double=false) => {
    let content = switch (direction, double) {
        | (Left, false) => {j|◀|j}
        | (Right, false) => {j|▶|j}
        | (Left, true) => {j|◀◀|j}
        | (Right, true) => {j|▶▶|j}
    };

    <span className>
        (content |> React.string)
    </span>
};
