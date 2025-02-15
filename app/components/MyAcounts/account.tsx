import React from 'react';
import NameAndContact from './name-and-contact';
import ChangePassword from './change-password';
import { getTranslations } from 'next-intl/server';
import { DropDownOptionType } from '@/types';

const AccountPage = async ({
  countries,
  genders,
  profileData,
}: {
  countries: DropDownOptionType[];
  genders: DropDownOptionType[];
  profileData: any;
}) => {
  const t = await getTranslations();
  return (
    <div className="my-account-block-main">
      <h2>{t('COMMON.ACCOUNTS')}</h2>
      <div className="border-box-account">
        <h3>{t('COMMON.NAME_AND_CONTACT')}</h3>
        <NameAndContact countries={countries} genders={genders} profileData={profileData} />
      </div>
      <div className="border-box-account">
        <h3>{t('COMMON.CHANGE_PASSWORD')}</h3>
        <ChangePassword />
      </div>
    </div>
  );
};

export default AccountPage;
