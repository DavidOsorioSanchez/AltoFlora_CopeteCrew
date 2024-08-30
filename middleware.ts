import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'de', 'es', 'fr', 'ru', 'po'],
    defaultLocale: 'en',
});

export const config = {
    matcher: ['/', '/(de|en|es|fr|ru|po)/:path*'],
};