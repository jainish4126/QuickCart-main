/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '**',
            },
        ],
    },
    // ✅ Skip ESLint on production builds to avoid Vercel parser serialization errors
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
