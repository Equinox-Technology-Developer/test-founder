/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
// module.exports = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.ctfassets.net',
//         pathname: '**',
//       },
//     ],
//   },
// }

