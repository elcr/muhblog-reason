open Relude.Globals;


let slug = Slugify.slugify(~replacement="-", ~lower=true);


let range = (~start, ~stop, ~step=1, ()) =>
    Belt.Array.rangeBy(start, stop, ~step)


let reactList = list =>
    List.toArray(list)
        |> React.array;


let reactOption = Option.getOrElse(React.null);
