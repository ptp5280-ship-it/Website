/** @type {import('next').NextConfig} */
import { SITE_URL } from './app/lib/config.js';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wkqcizcnptbebswqlkfk.supabase.co',
        port: '',
        pathname: '/storage/v1/object/sign/plumber/**',
      },
    ],
  },
  // Rewrites configuration
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
  // Redirects configuration
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'peachtreeplumbing5280.com',
          },
        ],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
    ];
  },
  // Other Next.js configurations can be added here
  // For example, if you need to configure images, you can add:
  // images: {
  //   domains: ['example.com'],
  // },
};

export default nextConfig;
