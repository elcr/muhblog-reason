[@react.component]
let make = (~route, ~className=?, ~children) => {
    let href = Router.build(route);

    <a href className=?className>
        children
    </a>
};
