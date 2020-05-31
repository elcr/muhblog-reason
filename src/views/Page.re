[@react.component]
let make = (~title, ~css, ~favicon as { uri, mimeType }: Parse.favicon, ~children: string) =>
    <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link href=uri rel="icon" type_=mimeType/>
            <title>(title |> React.string)</title>
            <style dangerouslySetInnerHTML={ "__html": Reboot.css ++ css }/>
        </head>
        <body dangerouslySetInnerHTML={ "__html": children }/>
    </html>;
