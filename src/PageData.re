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


type entryData = {
    title: string,
    date: Date.t,
    text: string,
    tags: list(string),
    previous: option(string),
    next: option(string)
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
            About
        | Entry({ date, title }) =>
            Entry({
                year: Date.getYear(date),
                month: Date.getMonth(date),
                day: Date.getDay(date),
                slug: Utils.slug(title)
            })
    };
