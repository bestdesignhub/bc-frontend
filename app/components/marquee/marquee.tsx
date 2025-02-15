'use client';
import '@/app/styles/categories.css';
import { sectionNString } from '@/types/components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import MarqueeItem from './marquee-item';

interface IMarqee {
  marqueeData: sectionNString;
}

export default function Marquee({ marqueeData }: IMarqee) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    //autoplaySpeed: 1,
    speed: 6000,
    dots: false,
    arrows: false,
    cssEase: 'linear',
    waitForAnimate: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: true,
  };

  return (
    <div className="marquee-wrapper">
      <Slider {...settings}>
        {Array.from({ length: 6 }, () => ({ title: marqueeData?.title })).map(
          (marquee: sectionNString, index: number) => (
            <MarqueeItem key={index} title={marquee.title} />
          )
        )}
      </Slider>
    </div>
  );
}
