/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'https://api.kevin-lavenant.fr/',
            },
        ],
    },
};

export default nextConfig;