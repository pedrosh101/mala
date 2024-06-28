const { withNextVideo } = require('next-video/process')

const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
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
 
module.exports = withNextIntl(nextConfig);
