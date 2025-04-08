import { IBannerData } from '@/types';
import React from 'react';
import Head from 'next/head';
import { getAWSImageUrl } from '@/utils/common.utils';
import Image from 'next/image';

const BannerComponent = ({ bannerData }: { bannerData: IBannerData }) => {
  return (
    <div className="page-banner">
      <Head>
        <link rel="preload" as="image" href={getAWSImageUrl(bannerData.bg_image)} />
      </Head>
      <div className="container">
        <div className="women-landing-category">
          <div className="banner-caption">
            <div className="banner-content">
              <h1>{bannerData?.title ?? ''}</h1>
              <p>{bannerData?.description ?? ''}</p>
            </div>
          </div>
          <div className="image">
            <Image
              src={getAWSImageUrl(bannerData.bg_image)}
              width={351}
              height={353}
              alt={'banner'}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
