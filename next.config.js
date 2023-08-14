/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ["hips.hearstapps.com", "sertackemiksiz.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "hips.hearstapps.com",
                port: "",
                pathname: "/hmg-prod/images/4e9a7794-1663012415.jpg"
            },
            {
                protocol: "https",
                hostname: "www.sertackemiksiz.com",
                port: "",
                pathname: "/images/2021/04/15/son-r35-yeni-nissan-gt-r-nismo-11_large.jpg"
            }
        ]
    }
}

module.exports = nextConfig
