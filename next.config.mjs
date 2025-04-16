/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.prod.website-files.com',
          },
          {
            protocol: 'https',
            hostname: 'nasscom.in',
          },
          {
            protocol: 'https',
            hostname: 'media.assettype.com',
          },
        ],
      }
};

export default nextConfig;
