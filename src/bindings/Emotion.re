module Cache = {
    type t;

    [@bs.module "emotion"]
    external cache : t = "cache";

    module Provider = {
        [@bs.module "@emotion/core"]
        [@react.component]
        external make : (
            ~value: t,
            ~children: React.element
        ) => React.element = "CacheProvider";
    };
};


module Server = {
    [@bs.module "emotion-server"]
    external renderStylesToString : string => string = "renderStylesToString";
};


module Provider = {
    [@react.component]
    let make = (~children) =>
        <Cache.Provider value=Cache.cache>
            children
        </Cache.Provider>;
};
