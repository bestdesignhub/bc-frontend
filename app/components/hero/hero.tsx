'use client';
import '@/app/styles/hero.css';
import { Section1 } from '@/types/components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import HeroItem from './hero-item';

interface IHeroProps {
  heroData: Section1;
}

export default function Hero({ heroData }: IHeroProps) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hero-wrapper">
      <Slider {...settings}>
        {/* {HeroData.map((hero: any) => ( */}
        {/* <Fragment key={hero.id}> */}
        <HeroItem
          href={''}
          title={heroData?.title}
          image={heroData?.bg_image}
          buttonText={'Pending'}
        />
        {/* </Fragment> */}
        {/* ))} */}
      </Slider>
    </div>
  );
}
