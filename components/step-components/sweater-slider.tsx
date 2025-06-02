'use client';
import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import '../../app/styles/slick.css';
import '../../app/styles/slick-theme.css';
import '@/app/styles/Sweater-product.css'; // Your custom styles
import { getAWSImageUrl } from '@/utils/common.utils';

const mainSliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
};

// const thumbnailSliderSettings = {
//   dots: false,
//   arrows: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   focusOnSelect: true,
//   centerPadding: '0px',
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: { slidesToShow: 3 },
//     },
//     {
//       breakpoint: 480,
//       settings: { slidesToShow: 2 },
//     },
//   ],
// };


export default function SweaterSlider({ images = [] }: { images: string[] }) {
  const mainSlider = useRef<Slider | null>(null);
  const thumbnailSlider = useRef<Slider | null>(null);

  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  console.log(nav1)

  useEffect(() => {
    setNav1(mainSlider.current);
    setNav2(thumbnailSlider.current);
  }, []);

  return (
    <div className="slider-block">
      <Slider
        {...mainSliderSettings}
        asNavFor={nav2 ?? undefined}
        ref={(slider: any) => (mainSlider.current = slider)}
        className="slider-for"
      >
        {images.map((img, i) => (
          <div key={i} className="slider-image-box-big">
            <Image
              src={getAWSImageUrl(img)}
              alt={`Product image ${i + 1}`}
              width={508}
              height={486}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>

      {/* <Slider
        {...thumbnailSliderSettings}
        asNavFor={nav1 ?? undefined}
        ref={(slider: any) => (thumbnailSlider.current = slider)}
        className="thumbnail-slider"
      >
        {images.map((img, i) => (
          <div key={i} className="thumbnail">
            <Image
              src={getAWSImageUrl(img)}
              alt={`Thumbnail ${i + 1}`}
              width={80}
              height={80}
            />
          </div>
        ))}
      </Slider> */}
    </div>
  );
}