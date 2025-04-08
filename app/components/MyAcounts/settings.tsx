'use client';

import { setUserLocale } from '@/config/locale';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { dispatch } from '@/lib/redux/store';
import { Locale } from '@/types';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const LOCALES = [
  { code: 'en', name: 'English' },
  { code: 'da', name: 'Danish' },
] as const;

const Settings = () => {
  const t = useTranslations();
  const defaultLocale = useLocale();

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLoading(true));
    const newLocale = event.target.value;
    await setUserLocale(newLocale as Locale);
    window.location.reload();
  };

  return (
    <div className="my-account-block-main">
      <div className="border-box-account">
        <div className="form-main">
          <form>
            <Row>
              <Col sm={4}>
                <div className="input-box">
                  <select value={defaultLocale} onChange={handleChange}>
                    {LOCALES.map((locale) => (
                      <option key={locale.code} value={locale.code}>
                        {locale.name}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
