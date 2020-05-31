type indexEntry = {
    title: string,
    date: Date.t,
    text: string
};


type indexData = {
    page: int,
    total: int,
    entries: list(indexEntry)
};


type tagSearchData = {
    tag: string,
    page: int,
    total: int,
    entries: list(indexEntry)
};


type aboutData = {
    text: string
};


type navigationEntry = {
    title: string,
    date: Date.t
};


type entryData = {
    title: string,
    date: Date.t,
    text: string,
    tags: list(string),
    previous: option(navigationEntry),
    next: option(navigationEntry)
};


type t =
    | Index(indexData)
    | TagSearch(tagSearchData)
    | About(aboutData)
    | Entry(entryData);


let toRoute = pageData: Router.route =>
    switch (pageData) {
        | Index({ page }) =>
            Index({ page: page })
        | TagSearch({ tag, page }) =>
            TagSearch({ slug: Utils.slug(tag), page })
        | About(_) =>
            About({ id: None })
        | Entry({ date, title }) =>
            Entry({
                year: Date.getYear(date),
                month: Date.getMonth(date),
                day: Date.getDay(date),
                slug: Utils.slug(title),
                id: None
            })
    };
