type indexEntry = {
    title: string,
    timestamp: int,
    text: string
};


type t =
    | Index({ page: int, total: int, entries: list(indexEntry) })
    | TagSearch({ tag: string, page: int, entries: list(indexEntry) })
    | About({ text: string })
    | Entry({
        title: string,
        timestamp: int,
        text: string,
        tags: list(string),
        previous: option(string),
        next: option(string),
    });
