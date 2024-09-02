import { NextUIProvider } from "@nextui-org/react"
import "./global.css"
//import { sarabun } from "@/fonts/fonts.js"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata = {
  title: 'AltoFlora - server',
  description: 'David Estuvo Aqui',
}

export default async function LocaleLayout({children}) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <html>
        <head>
          <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="https://cdn.icon-icons.com/icons2/41/PNG/128/pokemon_7025.png" sizes="any" />
        </head>
        <body className={` antialiased bg-lessBlack text-white min-h-screen`}>
            <NextUIProvider>
              {children}
            </NextUIProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  )
}
