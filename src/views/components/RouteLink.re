[@react.component]
let make = (~route, ~activeRoute=?, ~className=?, ~children) => {
    let url = Router.build(route);

    <Link className=?className url active=(Some(route) == activeRoute)>
        children
    </Link>
};
