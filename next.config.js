/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com']
    // loader: 'cloudinary',
    // path: 'https://cloudinary.com/console/c-fa8242fe8c483fd22e61642760a697'
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
