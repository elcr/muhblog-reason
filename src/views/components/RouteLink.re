[@react.component]
let make = (~route, ~activeRoute=?, ~className=?, ~children) => {
    let url = Route.toURL(route);

    <Link className=?className url active=(Some(route) == activeRoute)>
        children
    </Link>
};
