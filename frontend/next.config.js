/** @type {import('next').NextConfig} */

const API_URL = 'http://localhost:3002/api';
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'http',
            hostname: '**',
        },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/api-client/:path*',
                destination: `${API_URL}/:path*`,
            }
        ]
    },

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        })

        return config;
    }
}

module.exports = nextConfig
