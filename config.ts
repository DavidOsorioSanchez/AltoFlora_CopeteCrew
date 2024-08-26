import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'de', 'es', 'fr', 'ru', 'po'] as const;

export type Locale = typeof locales;

export const pathnames: Pathnames<Locale> = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    de: '/pfadnamen',
    es: '/nombres-de-ruta',
    fr: '/chemins-de-nom',
    ru: '/пути-имен',
    po: '/nazwy-ścieżek'
  }
};

export const localePrefix: LocalePrefix<Locale> = 'always';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;