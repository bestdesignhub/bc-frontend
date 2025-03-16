import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    // unoptimized: true,
    domains: [
      'flagcdn.com',
      'bespoke-cashemeres.s3.eu-west-1.amazonaws.com',
      'stage-bespoke-cashmeres.s3.eu-west-1.amazonaws.com',
      'bespokecashemeres.s3.us-east-1.amazonaws.com',
      'stage.bespokecashmeres.com',
    ], // Allow images from all domains
  },
};

module.exports = withNextIntl(nextConfig);
