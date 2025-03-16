import CONFIG from '@/config';
import { getUserLocale } from '@/config/locale';
import userAxiosInstance from '@/config/userAxiosInstance';
import { COOKIES } from '@/constants';
import { setAllUserSettingsValues } from '@/lib/redux/slices/userSettingSlice';
import { dispatch } from '@/lib/redux/store';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

type KeyValueObject = { [key: string]: any };

interface FetchApiConfig extends AxiosRequestConfig {
  url: string;
}

export const clearLocalStorageTokenAndData = () => {
  if (typeof window !== 'undefined') {
    Cookies.remove(COOKIES.userToken);
    Cookies.remove(COOKIES.user);
    dispatch(setAllUserSettingsValues({ cartCount: 0, wishlistCount: 0 }));
  }
};

export const getUserDataFromCookies = () => {
  const userData = Cookies.get(COOKIES.user);
  return userData ? JSON.parse(userData) : null;
};

export const pickProperties = (obj: KeyValueObject = {}, keys: string[]): KeyValueObject => {
  return keys.reduce((result, key) => {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
    return result;
  }, {} as KeyValueObject);
};

export const handleApiCall = async <T extends AxiosResponse<T, any>>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' = 'GET',
  data: any = null,
  headers: Record<string, string> = {}
): Promise<T | object> => {
  try {
    const config: FetchApiConfig = {
      url,
      method,
      headers: {
        ...headers,
        // 'Accept-Language': locale,
      },
    };

    if (data) {
      config.data = data;
    }
    // console.log(config, '@@ config');
    const response: AxiosResponse = await userAxiosInstance(config);
    // console.log(response, '@@ response');
    if (response.data?.code === 401) {
      await axios({
        url: `${CONFIG.frontDomainURL}/api/protected-api`,
        method: 'GET',
        headers: {
          code: response.data?.code,
          'status-code': response.data?.statusCode,
        },
      });
    }
    return response.data;
  } catch (error) {
    console.log('Fetch API error:', error);
    return {};
  }
};

/**
 * Constructs a complete AWS image URL based on the provided image key.
 *
 * If no image key is provided, an empty string is returned.
 *
 * @param {string} imageKey - The key of the image in the AWS S3 bucket.
 * @returns {string} The complete URL to the image, or an empty string if no image key is provided.
 */
export const getAWSImageUrl = (imageKey?: string): string => {
  if (!imageKey) return '/images/no-image.png';
  return `${CONFIG.bucketDomain}${imageKey}`;
};

export const formatPrice = (
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
};

export const generateProductName = (cartItem: any) => {
  const { yarn, steps, size } = cartItem;

  // Find step titles based on stepTypeSlug
  const gauge = steps.find((step: any) => step.stepTypeSlug === 'gauge')?.stepCardTitle || '';
  const pattern = steps.find((step: any) => step.stepTypeSlug === 'pattern')?.stepCardTitle || '';
  const style = steps.find((step: any) => step.stepTypeSlug === 'style')?.stepCardTitle || '';
  const fitting = steps.find((step: any) => step.stepTypeSlug === 'fitting')?.stepCardTitle || '';

  // Construct the name
  return `${yarn.name} - ${gauge} - ${pattern} - ${style} - ${fitting} - ${size}`;
};
