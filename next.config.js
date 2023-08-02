/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // protocol: 'https',
                // hostname: 'cdn.discordapp.com/**',
                protocol: "https",
                hostname: "**",
            },
            //     {
            //         protocol: 'https',
            //         hostname: 'my-personal-portfolio-bmrd.s3.amazonaws.com/**',
            //     },
        ],
    },
}

module.exports = nextConfig