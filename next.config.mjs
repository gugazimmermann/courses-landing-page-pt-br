/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/ebook-1',
        destination: '/',
        permanent: true,
      },
      {
        source: '/curso-1',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ebook-autenticacao',
        destination: '/',
        permanent: true,
      },
      {
        source: '/curso-autenticacao',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
