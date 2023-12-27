/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', 
    async redirects() {
        return [
            {
                source: '/',
                destination: '/landing',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
