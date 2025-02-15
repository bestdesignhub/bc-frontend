'use client';

import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '@/app/styles/Sweater-product.css';
import { getAWSImageUrl } from '@/utils/common.utils';

const mainSliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const thumbnailSliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Number of thumbnails visible at once
  slidesToScroll: 1,
  focusOnSelect: true, // Allows clicking on thumbnails to sync with the main slider

  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

export default function SweaterSlider({ images = [] }: { images: string[] }) {
  const mainSlider = useRef(null);
  const thumbnailSlider = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    // Set slider references once components are mounted
    setNav1(mainSlider.current);
    setNav2(thumbnailSlider.current);
  }, []);

  return (
    <>
      <div className="slider-block">
        <Slider
          className="slider-for"
          {...mainSliderSettings}
          asNavFor={nav2 || undefined} // Sync with thumbnail slider
          ref={mainSlider}
        >
          {images?.map((image) => (
            <div key={image} className="slider-image-box-big">
              <Image src={getAWSImageUrl(image)} alt="image" width={508} height={486} />
            </div>
          ))}
          {/*           
          <div className="slider-image-box-big">
            <Image src={Sweaterimg1} alt="image" width={508} height={486} />
          </div>
          <div className="slider-image-box-big">
            <Image src={Sweaterimg1} alt="image" width={508} height={486} />
          </div>
          <div className="slider-image-box-big">
            <Image src={Sweaterimg1} alt="image" width={508} height={486} />
          </div>
          <div className="slider-image-box-big">
            <Image src={Sweaterimg1} alt="image" width={508} height={486} />
          </div> */}
        </Slider>

        <Slider
          {...thumbnailSliderSettings}
          asNavFor={nav1 || undefined} // Sync with main slider
          ref={thumbnailSlider}
          className="thumbnail-slider"
        >
          {images?.map((image) => (
            <div key={image} className="thumbnail">
              <Image src={getAWSImageUrl(image)} alt="image" width={80} height={80} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
