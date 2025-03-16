import { Footer, Header, KeepConnect } from '@/app/components';
import { ISettings } from '@/types';
import { getWebSiteSettings } from '@/utils/server-api.utils';
import React, { FC } from 'react';

const Layout: FC<{ children: React.ReactNode }> = async ({ children }) => {
  const settingData = (await getWebSiteSettings()) as ISettings;
  return (
    <>
      <Header />
      {children}
      <KeepConnect settings={settingData} />
      <Footer settings={settingData} />
    </>
  );
};

export default Layout;
