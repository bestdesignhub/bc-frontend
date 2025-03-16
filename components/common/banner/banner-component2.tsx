import { IBannerData } from '@/types';
import React from 'react';
import Head from 'next/head';
import '@/app/styles/banner2.css';

const BannerComponent2 = ({ bannerData }: { bannerData: IBannerData }) => {
  return (
    <div className="page-banner">
      <Head>
        <link rel="preload" as="image" href={bannerData.bg_image} />
      </Head>
      <div className="image banner-img">
        <img
          src={bannerData.bg_image}
          width={1080}
          height={651}
          alt={'banner'}
        />
      </div>
    </div>
  );
};

export default BannerComponent2;
