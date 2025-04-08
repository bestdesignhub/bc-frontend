import { IBannerData } from '@/types';
import React from 'react';
import Head from 'next/head';
import '@/app/styles/banner2.css';
// import Image from 'next/image';

const BannerComponent2 = ({ bannerData }: { bannerData: IBannerData }) => {
  return (
    <div className="page-banner">
      <Head>
        <link rel="preload" as="image" href={bannerData.bg_image} />
      </Head>
      <div className="image banner-img">
      <img src="images/mesurment-banner.jpg" alt="Mesurment" /> 
        {/* <Image
                src={bannerData.bg_image}
                alt="Bespoke"
                width={1080}
                height={651}
                className="object-cover"
                loading="lazy"
              /> */}
      </div>
    </div>
  );
};

export default BannerComponent2;
