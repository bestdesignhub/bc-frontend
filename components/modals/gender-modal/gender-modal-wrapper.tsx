'use client';

import { URL_SLUG, USER_ROUTES } from '@/constants';
import { DropDownOptionType } from '@/types';
import React, { FC } from 'react';
import GenderModal from './gender-modal';
import { useRouter, useSearchParams } from 'next/navigation';
import { dispatch } from '@/lib/redux/store';
import { setIsPageSwitchLoading } from '@/lib/redux/slices/loaderSlice';
import { useTranslations } from 'next-intl';

const GenderModalWrapper: FC<{ genders: DropDownOptionType[] }> = ({ genders }) => {
  const router = useRouter();
  const t = useTranslations();
  const searchParams = useSearchParams();
  const queryString = new URLSearchParams(searchParams).toString();
  const handleSelect = (value: string) => {
    dispatch(setIsPageSwitchLoading(true));
    router.push(
      `${USER_ROUTES.sweater}?${queryString}${!!queryString.length ? `&` : ``}${URL_SLUG.GENDER}=${value}`
    );
  };
  return (
    <GenderModal
      genders={genders}
      handleSelect={handleSelect}
      redirectRoute={USER_ROUTES.sweater}
      show={true}
      handleClose={() => {}}
      message={t('COMMON.SELECT_WHO_YOURE_BUYING_FOR')}
    />
  );
};

export default GenderModalWrapper;
