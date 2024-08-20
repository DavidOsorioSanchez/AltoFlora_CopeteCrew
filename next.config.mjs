import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.vexels.com', 'i.imgur.com', 'sm.ign.com', 'i.pinimg.com', 'upload.wikimedia.org', 'images.remotePatterns'],
    },
};
export default withNextIntl(nextConfig);
