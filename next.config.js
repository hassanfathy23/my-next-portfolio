/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/features',
  //       destination: '/',
  //       permanent: false
  //     }
  //   ]
  // }
}

module.exports = nextConfig
