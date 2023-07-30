/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/avocado/:path*',
                destination: '/product/:path*'
            }
        ]
    }
}

module.exports = nextConfig
