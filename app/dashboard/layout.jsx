export default function Layout ( {children} ){
    return (
        <html>
            <head>
                <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="https://cdn.icon-icons.com/icons2/41/PNG/128/pokemon_7025.png" sizes="any" />
            </head>
            <body className="antialiased bg-lessBlack text-white font-montserrat min-h-screen">
                {children}
            </body>
        </html>
    )
}
