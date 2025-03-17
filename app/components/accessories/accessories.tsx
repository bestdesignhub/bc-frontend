'use client';
import '@/app/styles/accessories.css';
import { USER_ROUTES } from '@/constants';
import { Section5 } from '@/types/components';
import Link from 'next/link';
import { Fragment } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AccessoriesItem from './accessories-item';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
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
export default function Accessories({ homeProductList }: IAccessoriesProps) {
  return (
    <div className="accessories-wrapper">
<div className='latest-products'>
      <div className='container'>
      <h2>Our Latest Products</h2>
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
      <Link className='viewbtn' href={`${USER_ROUTES.shop}`}>
          View All
        </Link>
    </div>
      </div>
    </div>
  );
}
