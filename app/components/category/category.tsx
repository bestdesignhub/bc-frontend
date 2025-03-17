'use client';
import '@/app/styles/categories.css';
import { Section3Item } from '@/types/components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import CategoryItem from './category-item';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
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

interface ICategoryProps {
  categoryData: Section3Item[];
}

export default function Category({ categoryData }: ICategoryProps) {
  return (
    <div className='latest-products'>
      <div className='container'>
      <div className="category-wrapper">
      <h2>Trending Products</h2>
      <Slider {...settings}>
        {categoryData?.map((category: any) => (
          <CategoryItem
            key={category.uuid}
            href={category.image_link}
            title={category.title}
            image={category.image}
          />
        ))}
      </Slider>
    </div>
      </div>
    </div>
  );
}
