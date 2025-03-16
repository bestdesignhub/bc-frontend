'use client';
import '@/app/styles/client-story.css';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
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

export default function Testimonial({ testimonialData }: { testimonialData: any[] }) {
  return (
    <>
      <div className="testimonial-wrapper">
        <div className="container">
          <Row className="justify-content-center">
            <Col xs={12} lg={6}>
              <Slider {...settings}>
                {testimonialData?.map((testimonial, index: number) => (
                  <div className="testimonialbox" key={index}>
                    <h6>{testimonial.name}</h6>
                    <p>“{testimonial.title}”</p>
                    <h4>{testimonial.position}</h4>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
