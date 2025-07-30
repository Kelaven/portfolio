/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'api.kevin-lavenant.fr',
            },
        ],
    },
};

export default nextConfig;