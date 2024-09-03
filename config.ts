import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ['en', 'de', 'es', 'fr', 'ru', 'po'] as const;

export type locales = typeof locales;

export const pathnames: Pathnames<locales> = {
    '/': '/',
    '/pathnames': '/pathnames'
};

export const localePrefix: LocalePrefix<locales> = 'always';