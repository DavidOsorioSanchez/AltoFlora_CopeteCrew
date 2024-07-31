

export const metadata = {
  title: 'AltoFlora - server',
  description: 'David Estuvo Aqui',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="https://cdn.icon-icons.com/icons2/41/PNG/128/pokemon_7025.png" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
