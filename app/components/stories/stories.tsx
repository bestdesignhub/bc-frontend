'use client';
import '@/app/styles/stories.css';
import { IHomeStoryData, Section7 } from '@/types/components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import StoriesItem from './stories-item';
import { USER_ROUTES } from '@/constants';

const settings = {
  dots: false,
  arrows: false,
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

interface IStoriesProps {
  storiesData: Section7;
  homeStoryData: IHomeStoryData[];
}

export default function Stories({ storiesData, homeStoryData }: IStoriesProps) {
  return (
    <div className="stories-wrapper">
      <div className="section_title center">
        <h6>{storiesData?.title ?? ''}</h6>
        <h2>{storiesData?.sub_title ?? ''}</h2>
      </div>
      <Slider {...settings}>
        {homeStoryData?.map((stories, index: number) => (
          <StoriesItem
            key={index}
            href={`${USER_ROUTES.ourStory}/${stories?._id}`}
            title={stories.title}
            discription={stories?.sub_title}
            image={stories?.thumb_image}
          />
        ))}
      </Slider>
    </div>
  );
}
