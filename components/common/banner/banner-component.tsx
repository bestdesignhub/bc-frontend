import { IBannerData } from '@/types';
import { getAWSImageUrl } from '@/utils/common.utils';
import { getBannerBySlug } from '@/utils/server-api.utils';
import Image from 'next/image';
import React from 'react';

const BannerComponent = async ({ slug }: { slug: 'men' | 'women' | 'shop' | undefined }) => {
  const bannerData = (await getBannerBySlug(slug ?? '')) as IBannerData;
  return (
    <div className="page-banner">
      <div className="image">
        <Image
          src={getAWSImageUrl(bannerData?.bg_image)}
          width={1920}
          height={650}
          alt={'banner'}
        />
      </div>
      <div className="banner-caption">
        <div className="container">
          <div className="banner-content">
            <h1>{bannerData?.title ?? ''}</h1>
            <p>{bannerData?.description ?? ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
