'use server';

import { COOKIES } from '@/constants';
import CONFIG from '@/config';
import { Locale } from '@/types/index';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getCookieData() {
  const cookieData = cookies();
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData);
    }, 1000)
  );
}

export async function getUserLocale() {
  const cookieData: any = await getCookieData();

  return cookieData?.get(COOKIE_NAME)?.value || CONFIG.defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, locale);
}

export async function getUserToken() {
  const cookieData: any = await getCookieData();

  return cookieData?.get(COOKIES.userToken)?.value;
}

export async function getUserData() {
  const cookieData: any = await getCookieData();
  const userData = cookieData?.get(COOKIES.user)?.value;
  return userData ? JSON.parse(userData) : null;
}
