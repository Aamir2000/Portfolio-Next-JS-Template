/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "custom",
        loaderFile: "./src/img-loader.ts",
        unoptimized: true,
        domains: [
            "images.pexels.com"
        ]
    },
    output: "export"
}

module.exports = nextConfig
