'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '@/app/styles/product-detail.css';
import Image from 'next/image';

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 2,
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

export default function RatingSlider() {
  return (
    <>
      <div className="rating-slider">
        <Slider {...settings}>
          <div className="rating-item">
            <div className="rating-head d-flex flex-wrap">
              <div className="item">
                <h6>jon deo</h6>
                <p>26/11/2024</p>
                <ul>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
              <div className="item">
                <div className="verify-user">
                  <Image
                    src="/images/verify-icon.png"
                    width={24}
                    height={24}
                    alt="verify"
                    loading="lazy"
                  />
                  Buyer
                </div>
                <p>26/11/2024</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nibh, ornare
              at efficitur vel, viverra sed eros. Ut sit amet maximus turpis, sodales imperdiet sem.
            </p>
          </div>
          <div className="rating-item">
            <div className="rating-head d-flex flex-wrap">
              <div className="item">
                <h6>jon deo</h6>
                <p>26/11/2024</p>
                <ul>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
              <div className="item">
                <div className="verify-user">
                  <Image
                    src="/images/verify-icon.png"
                    width={24}
                    height={24}
                    alt="verify"
                    loading="lazy"
                  />
                  Buyer
                </div>
                <p>26/11/2024</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nibh, ornare
              at efficitur vel, viverra sed eros. Ut sit amet maximus turpis, sodales imperdiet sem.
            </p>
          </div>
          <div className="rating-item">
            <div className="rating-head d-flex flex-wrap">
              <div className="item">
                <h6>jon deo</h6>
                <p>26/11/2024</p>
                <ul>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
              <div className="item">
                <div className="verify-user">
                  <Image
                    src="/images/verify-icon.png"
                    width={24}
                    height={24}
                    alt="verify"
                    loading="lazy"
                  />
                  Buyer
                </div>
                <p>26/11/2024</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nibh, ornare
              at efficitur vel, viverra sed eros. Ut sit amet maximus turpis, sodales imperdiet sem.
            </p>
          </div>
          <div className="rating-item">
            <div className="rating-head d-flex flex-wrap">
              <div className="item">
                <h6>jon deo</h6>
                <p>26/11/2024</p>
                <ul>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li className="active">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0428 0L12.2783 6.88005H19.5124L13.6599 11.1321L15.8954 18.0122L10.0428 13.7601L4.19032 18.0122L6.42578 11.1321L0.573263 6.88005H7.80737L10.0428 0Z"
                        fill="#DCDCDC"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
              <div className="item">
                <div className="verify-user">
                  <Image
                    src="/images/verify-icon.png"
                    width={24}
                    height={24}
                    alt="verify"
                    loading="lazy"
                  />
                  Buyer
                </div>
                <p>26/11/2024</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nibh, ornare
              at efficitur vel, viverra sed eros. Ut sit amet maximus turpis, sodales imperdiet sem.
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
}
