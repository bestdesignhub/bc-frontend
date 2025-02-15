'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '@/app/styles/product-detail.css';
import Image from 'next/image';
import Link from 'next/link';
const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
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
export default function DiscoverMore() {
  return (
    <>
      <div className="discover-wrapper">
        <div className="section_title center">
          <h2>LOREM IPSUM DOLAR SIT</h2>
        </div>
        <div className="discover-row">
          <Slider {...settings}>
            <div className="discoverbox">
              <Link href="/">
                <div className="image">
                  <Image
                    src="/images/look-good1.png"
                    width={500}
                    height={500}
                    alt="discover"
                    priority
                  />
                  <div className="info">
                    <h4>LOREM IPSUM DOLAR</h4>
                  </div>
                </div>
                <button>Discover More</button>
              </Link>
            </div>
            <div className="discoverbox">
              <Link href="/">
                <div className="image">
                  <Image
                    src="/images/look-good1.png"
                    width={500}
                    height={500}
                    alt="discover"
                    priority
                  />
                  <div className="info">
                    <h4>LOREM IPSUM DOLAR</h4>
                  </div>
                </div>
                <button>Discover More</button>
              </Link>
            </div>
            <div className="discoverbox">
              <Link href="/">
                <div className="image">
                  <Image
                    src="/images/look-good1.png"
                    width={500}
                    height={500}
                    alt="discover"
                    priority
                  />
                  <div className="info">
                    <h4>LOREM IPSUM DOLAR</h4>
                  </div>
                </div>
                <button>Discover More</button>
              </Link>
            </div>
            <div className="discoverbox">
              <Link href="/">
                <div className="image">
                  <Image
                    src="/images/look-good1.png"
                    width={500}
                    height={500}
                    alt="discover"
                    priority
                  />
                  <div className="info">
                    <h4>LOREM IPSUM DOLAR</h4>
                  </div>
                </div>
                <button>Discover More</button>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
