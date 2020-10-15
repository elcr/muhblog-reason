module Label = {
    let className = Css.(
        merge([
            Style.smallCapsClassName,
            style([
                fontSize(rem(1.25)),
                marginBottom(rem(1.6))
            ])
        ])
    );

    [@react.component]
    let make = (~children) =>
        <div className>
            children
        </div>;
};


[@react.component]
let make = (~activeRoute, ~data as { tag, page, total, entries }: State.tagSearchData) => {
    let buildPageRoute = page =>
        Route.tagSearch(~slug=Utils.slug(tag), ~page, ());

    let label = total === 1
        ? "entry"
        : "entries";
    <>
        <Label>
            ({j|$total $label tagged "$tag"|j} |> React.string)
        </Label>
        <EntriesList activeRoute page total entries buildPageRoute/>
    </>;
};
