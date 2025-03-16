'use client';

import '@/app/styles/accessories.css';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AlsoLikeItem from './alsolike-item';

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
export default function AlsoLike({ products }: { products: any[] }) {
  return (
    <div className="alsolike-wrapper">
      <Row className="justify-content-center">
        <Col xs={12} lg={10}>
          <div className="section_title center">
            <h2>You may also like</h2>
          </div>
        </Col>
      </Row>
      <Slider {...settings}>
        {products.map((accessories: any) => (
          <AlsoLikeItem
            key={accessories?._id}
            href={`${accessories?._id}`}
            image={accessories?.image}
            title={accessories?.title}
            price={accessories?.basePriceXs}
          />
        ))}
      </Slider>
    </div>
  );
}
