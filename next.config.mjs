/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpackHotModuleReplacement: false,
    images: {
        dangerouslyAllowSVG: true,
        // domains: ['placehold.co'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
