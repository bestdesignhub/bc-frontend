'use client';
import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '@/app/styles/Sweater-product.css';

import Sweaterimg1 from '@/public/images/sweater.png'; // Example image

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
  slidesToShow: 5, // Number of thumbnails visible at once
  slidesToScroll: 1,
  focusOnSelect: true, // Allows clicking on thumbnails to sync with the main slider

  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};

export default function SweaterSlider() {
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
          </div>
          <div className="slider-image-box-big">
            <Image src={Sweaterimg1} alt="image" width={508} height={486} />
          </div>
        </Slider>

        <Slider
          {...thumbnailSliderSettings}
          asNavFor={nav1 || undefined} // Sync with main slider
          ref={thumbnailSlider}
          className="thumbnail-slider"
        >
          <div className="thumbnail">
            <Image src={Sweaterimg1} alt="image" width={80} height={80} />
          </div>
          <div className="thumbnail">
            <Image src={Sweaterimg1} alt="image" width={80} height={80} />
          </div>
          <div className="thumbnail">
            <Image src={Sweaterimg1} alt="image" width={80} height={80} />
          </div>
          <div className="thumbnail">
            <Image src={Sweaterimg1} alt="image" width={80} height={80} />
          </div>
          <div className="thumbnail">
            <Image src={Sweaterimg1} alt="image" width={80} height={80} />
          </div>
        </Slider>
      </div>
    </>
  );
}
