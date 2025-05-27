'use client';

import { URL_SLUG, USER_ROUTES } from '@/constants';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useMemo } from 'react';

const ChangeYarnButton = ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const t = useTranslations();
  const queryString = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    params.delete(URL_SLUG.PRODUCT);
    params.delete('price');
    return params.toString();
  }, [searchParams]);
  console.log('ChangeYarnButton queryString:', queryString);

  return (
    <div className="change-link-2">
      <Link href={`${USER_ROUTES.sweater}?${queryString}&${URL_SLUG.CHANGE}=true`}>
        {t('COMMON.CHANGE_YARN')}{' '}
      </Link>
    </div>
  );
};

export default ChangeYarnButton;
