[@react.component]
let make = (~title, ~css, ~children: string) =>
    <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <title>(title |> React.string)</title>
            <style>(Reboot.css ++ css |> React.string)</style>
        </head>
        <body>
            <div dangerouslySetInnerHTML={ "__html": children }/>
        </body>
    </html>;
