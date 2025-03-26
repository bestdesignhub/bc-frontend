import { LOCALES, PAYMENT_OPTIONS } from '@/constants';

export type Locale = (typeof LOCALES)[number];

export type SortConfig = {
  key: string;
  direction: SORT_DIRECTION;
};

export type LoggedInUser = {
  _id: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  token: string;
  profile_picture?: string;
  country_id?: string;
  gender?: string;
  mobile_number?: string;
};

export type IView = 'grid' | 'list';

export type DropDownOptionType = {
  value: string;
  label: string;
  rowOrder?: number;
  status?: boolean;
  image?: string;
};

export type ViewLayoutType = 'grid' | 'list';

export type PaymentOption = (typeof PAYMENT_OPTIONS)[keyof typeof PAYMENT_OPTIONS];

interface ISocialMedia {
  image: string;
  link: string;
  uuid: string;
}

export interface ISettings {
  _id: string;
  phone_number: string;
  countryId: string;
  email: string;
  social_media: ISocialMedia[];
  country_code: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  logo: string;
  address: string;
  footer_description: string;
}

export interface IBannerData {
  _id: string;
  bg_image: string;
  slug: string;
  status: boolean;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  title: string;
  description: string;
}

export type ISlug = 'women' | 'men' | 'shop' | 'sweater';
