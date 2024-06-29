const { withNextVideo } = require('next-video/process')



 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.imgur.com',
          pathname: '**',
        },
      ],
    },
}
 
module.exports = withNextVideo(nextConfig);
