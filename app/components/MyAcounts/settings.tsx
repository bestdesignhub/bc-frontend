'use client';

import { setUserLocale } from '@/config/locale';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { dispatch } from '@/lib/redux/store';
import { Locale } from '@/types';
import { useLocale } from 'next-intl';
import React from 'react';

const LOCALES = [
  { code: 'en', name: 'English' },
  { code: 'da', name: 'Danish' },
] as const;

const Settings = React.forwardRef((_, ref) => {
  const defaultLocale = useLocale();

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLoading(true));
    const newLocale = event.target.value;
    await setUserLocale(newLocale as Locale);
    window.location.reload();
  };

  return (
    <div className="country-selecter">
      <button className="country-dropdown" type="button">Text</button>
      <select value={defaultLocale} onChange={handleChange}>
        {LOCALES.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.name}
          </option>
        ))}
      </select>
    </div>
  );
});

export default React.memo(Settings);
