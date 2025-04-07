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
    <section className="index-banner">
      <div className="banner">
        <img src="images/banner.webp" alt="Bespoke Cashmere" />
        <div className="banner-content f-container">
          <h2 className="banner-title">Design Your Perfect Cashmere Sweater Online</h2>
          <ul className="banner-buttons">
            <li>
              <a href="/sweater" title="Create My SWEATER">
                Create My SWEATER
              </a>
            </li>
            <li>
              <a href="/shop" title="Customise a Sweater">
                Customise a Sweater
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
