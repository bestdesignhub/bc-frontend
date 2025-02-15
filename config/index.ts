import { Locale } from '@/types/index';

const CONFIG = {
  defaultLocale: 'en' as Locale,
  frontDomainURL: process.env.NEXT_PUBLIC_FRONT_DOMAIN_URL,
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  bucketDomain: process.env.NEXT_PUBLIC_BUCKET_DOMAIN,
  developmentMode: process.env.NODE_ENV === 'development',
  stripePublicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,

  // settings
  hideProductType: true,
} as const;

export default CONFIG;
