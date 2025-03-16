'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '@/app/styles/instagram.css';
import InstagramData from './instagram-data';
import InstagramItem from './instagram-item';

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Instagram() {
  return (
    <>
      <div className="instagram-wrapper">
        <div className="insta_title">
          <h5>FOLLOW US ON INSTAGRAM @BESPOKE CASHMERE</h5>
        </div>
        <Slider {...settings}>
          {InstagramData.map((instagram: any) => (
            <InstagramItem
              key={instagram.id}
              href={instagram.href}
              title={instagram.title}
              image={instagram.image}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}
