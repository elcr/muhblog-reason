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
let make = (~activeRoute, ~data as { tag, page, total, entries }: PageData.tagSearchData) => {
    let buildPageRoute = page =>
        Router.TagSearch({
            slug: Utils.slug(tag),
            page
        });

    let plural = total === 1
        ? "entry"
        : "entries";
    <>
        <Label>
            ({j|$total $plural tagged "$tag"|j} |> React.string)
        </Label>
        <EntriesList activeRoute page total entries buildPageRoute/>
    </>;
};
