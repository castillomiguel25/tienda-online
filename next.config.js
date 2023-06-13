/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
  },
  env: {
    customKey: 'customValue',
  },
  compress: true,
  // async redirects() {
  //   return [
  //     {
  //       // source : '/hola',
  //       // destination: 'https://github.com/D4rkPK',
  //       // permanent: true,
  //     }
  //   ]
  // }
};

module.exports = nextConfig;
