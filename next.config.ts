import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    domains: [
      'flagcdn.com',
      'bespoke-cashemeres.s3.eu-west-1.amazonaws.com',
      'stage-bespoke-cashmeres.s3.eu-west-1.amazonaws.com',
    ], // Allow images from all domains
  },
};

module.exports = withNextIntl(nextConfig);
