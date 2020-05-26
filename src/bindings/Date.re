type t = Js.Date.t;


[@bs.new]
external _make: (
    ~year: int,
    ~month: int,
    ~day: int,
    ~hour: int,
    ~minute: int
) => t = "Date";


let make = (~year, ~month, ~day, ~hour=0, ~minute=0, ()) =>
    _make(~year, ~month=month - 1, ~day, ~hour, ~minute);


[@bs.scope "Date"]
[@bs.val]
external unixTimestampNow: unit => int = "now";


[@bs.send]
external toUnixTimestamp: t => int = "getTime";


[@bs.new]
external fromUnixTimestamp: int => t = "Date";


[@bs.send]
external toUTCTimestamp: t => string = "toUTCString";


[@bs.send]
external toISOTimestamp: t => string = "toISOString";


[@bs.send]
external getYear: t => int = "getFullYear";


[@bs.send]
external _getMonth: t => int = "getMonth";


let getMonth = date =>
    _getMonth(date) + 1;


[@bs.send]
external getDay: t => int = "getDate";
