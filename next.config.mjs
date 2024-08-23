import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'images.vexels.com' },
            { hostname: 'i.imgur.com' },
            { hostname: 'sm.ign.com' },
            { hostname: 'i.pinimg.com' },
            { hostname: 'upload.wikimedia.org' },
        ],
    },
};
export default withNextIntl(nextConfig);
