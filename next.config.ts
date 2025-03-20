import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    i18n: {
        locales: ['en-US', 'pl', 'pt_BR'],
        defaultLocale: 'en-US',
    },
    images: {
        domains: ['picsum.photos'],
    },
};

export default nextConfig;
