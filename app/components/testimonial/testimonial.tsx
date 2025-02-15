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

export default function Testimonial() {
  return (
    <>
      <div className="testimonial-wrapper">
        <div className="container">
          <Row className="justify-content-center">
            <Col xs={12} lg={6}>
              <Slider {...settings}>
                <div className="testimonialbox">
                  <h6>Lorem ipsum dolor sit amet</h6>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tristique
                    nibh. Nullam porta viverra massa, sed ornare tortor gravida efficitur.”
                  </p>
                  <h4>Lorem, ipsum</h4>
                </div>
                <div className="testimonialbox">
                  <h6>Lorem ipsum dolor sit amet</h6>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tristique
                    nibh. Nullam porta viverra massa, sed ornare tortor gravida efficitur.”
                  </p>
                  <h4>Lorem, ipsum</h4>
                </div>
                <div className="testimonialbox">
                  <h6>Lorem ipsum dolor sit amet</h6>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tristique
                    nibh. Nullam porta viverra massa, sed ornare tortor gravida efficitur.”
                  </p>
                  <h4>Lorem, ipsum</h4>
                </div>
              </Slider>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
