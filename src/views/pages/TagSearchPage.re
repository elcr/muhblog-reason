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
let make = (~data as { tag, page, total, entries }: PageData.tagSearchData) =>
    <>
        <Label>
            ({j|$total entries tagged "$tag"|j} |> React.string)
        </Label>
        <EntriesList page total entries/>
    </>;
