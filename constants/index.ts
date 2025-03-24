const LOCALES = ['en', 'da'] as const;

const LOCALES_WITH_NAME = [
  { code: 'en', name: 'English' },
  { code: 'da', name: 'Danish' },
] as const;

const COOKIES = {
  aToken: 'aToken',
  user: 'user',
  wToken: 'wToken',
  ws: 'ws',
  userToken: 'userToken',
} as const;

const MESSAGES = {
  SUCCESS: 'COMMON.SUCCESS',
  SOMETHING_WENT_WRONG: 'COMMON.SOMETHING_WENT_WRONG_PLEASE_TRY_AGAIN',
  LOADING: 'COMMON.LOADING',
  INVALID_SLUG: 'COMMON.INVALID_SLUG',
} as const;

const USER_ROUTES = {
  signin: '/login',
  signup: '/signup',
  forgotPassword: '/forgot-password',
  sweater: '/sweater',
  lastStep: '/last-step',
  measurements: '/measurements',
  women: '/women',
  men: '/men',
  shop: '/shop',
  ourStory: '/our-story',
  cart: '/cart',
  checkout: '/checkout',
  myAccount: '/my-account',
  myAddresses: '/my-addresses',
  orderHistory: '/order-history',
  settings: '/settings',
  wishlist: '/wishlist',
  measurementProfile: '/measurement-profile',
} as const;

const SITE_SETTINGS = {
  CURRENCY: '$',
};

const URL_SLUG = {
  CHANGE: 'change',
  EDIT: 'edit',
  YARN: 'yarn',
  GENDER: 'gender',
  FITTING: 'fitting',
  FITTING_SIZE: 'fitting-size',
  REDIRECT: 'redirect',
  MIN_PRICE: '_min_price',
  MAX_PRICE: '_max_price',
  PRODUCT: 'product',
  ADD_TO_CART: 'cart',
  MEASUREMENT_PROFILE: 'measurement-profile',
  PAGINATION: {
    PAGE: '_page',
  },
};

const PAYMENT_OPTIONS = {
  PAYPAL: 'paypal',
  STRIPE: 'stripe',
} as const;

const FIXED_STEPS_COUNT = 2;

const STEPPERPATHS = [
  { label: 'Select a Yarn', step: '1' },
  { label: 'Select a Guage', step: '2' },
  { label: 'Select a Pattern', step: '3' },
  { label: 'Select a Styles', step: '4' },
  { label: 'Select Measurement', step: '5' },
];

export {
  LOCALES,
  URL_SLUG,
  COOKIES,
  MESSAGES,
  USER_ROUTES,
  SITE_SETTINGS,
  FIXED_STEPS_COUNT,
  PAYMENT_OPTIONS,
  STEPPERPATHS,
};
