type indexEntry = {
    slug: string,
    title: string,
    timestamp: int,
    text: string
};


type relatedEntry = {
    title: string,
    slug: string
};


type tag = {
    name: string,
    slug: string
}


type entry = {
    title: string,
    timestamp: int,
    text: string,
    tags: array(tag),
    previous: option(relatedEntry),
    next: option(relatedEntry),
};


type t =
    | Index({ page: int, total: int, entries: array(indexEntry) })
    | TagSearch({ tag: string, slug: string, page: int, entries: array(indexEntry) })
    | About({ text: string })
    | Entry(entry);
