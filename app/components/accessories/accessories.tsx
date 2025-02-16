'use client';
import '@/app/styles/accessories.css';
import { USER_ROUTES } from '@/constants';
import { Section5 } from '@/types/components';
import Link from 'next/link';
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AccessoriesItem from './accessories-item';

const settings = {
  dots: false,
  infinite: false,
  speed: 1500,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 4.5,
  slidesToScroll: 1,
  initialSlide: 0,
  // centerMode: true,
  centerPadding: '10px', // Padding should be in px or %
  // rtl: true, // Reverse direction

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
  ],
};

export interface IProduct {
  _id: string;
  title: string;
  price: number;
  image: string;
}

interface IAccessoriesProps {
  accessoriesData: Section5;

  homeProductList?: IProduct[];
}
export default function Accessories({ accessoriesData, homeProductList }: IAccessoriesProps) {
  return (
    <div className="accessories-wrapper">
      <div className="container">
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <div className="section_title center">
              {/* <h2>{accessoriesData?.title ?? ''}</h2> */}
              <h2>{accessoriesData?.titlenew ?? 'Latest Products Category'}</h2>
            </div>
          </Col>
        </Row>
        <Slider {...settings}>
          {homeProductList?.map((accessories, index) => (
            <Fragment key={index}>
              <AccessoriesItem
                key={accessories._id}
                href={`${USER_ROUTES.men}/${accessories._id}`}
                title={accessories?.title}
                image={accessories?.image}
                price={accessories?.price}
              />
            </Fragment>
          ))}
        </Slider>
        {/* <button>
          <Link href={`${USER_ROUTES.shop}`}>
            View All
            <span>
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8893 15.2522C11.6633 15.2522 11.4372 15.1745 11.2588 15.008C10.9137 14.6861 10.9137 14.1534 11.2588 13.8315L17.8496 7.68269L11.2588 1.53386C10.9137 1.21199 10.9137 0.67924 11.2588 0.357369C11.6038 0.0354992 12.1748 0.0354992 12.5198 0.357369L19.7412 7.09445C20.0862 7.41632 20.0862 7.94907 19.7412 8.27094L12.5198 15.008C12.3414 15.1745 12.1153 15.2522 11.8893 15.2522Z"
                  fill="white"
                />
                <path
                  d="M17.7745 8.63019H1.22544C0.555532 8.63019 0 8.20133 0 7.68417C0 7.16702 0.555532 6.73816 1.22544 6.73816H17.7745C18.4444 6.73816 19 7.16702 19 7.68417C19 8.20133 18.4444 8.63019 17.7745 8.63019Z"
                  fill="white"
                />
              </svg>
            </span>
          </Link>
        </button> */}
      </div>
    </div>
  );
}
