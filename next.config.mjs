/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'starlightskins.lunareclipse.studio'
            },
        ],
    },
};

export default nextConfig;
