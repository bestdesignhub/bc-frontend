'use client';

import Image from 'next/image';

import '@/app/styles/Sweater-product.css';
import SweaterBanner from './Sweater-banner';

import checkImage1 from '@/public/images/cart-img-1.png';

import fico1 from '@/public/images/icon-1.svg';
import fico2 from '@/public/images/icon-2.svg';
import fico3 from '@/public/images/icon-3.svg';
import fico4 from '@/public/images/icon-4.svg';
import fico5 from '@/public/images/icon-5.svg';
import fico6 from '@/public/images/icon-6.svg';
import fico7 from '@/public/images/icon-7.svg';
import fico8 from '@/public/images/icon-8.svg';
import fico9 from '@/public/images/icon-9.svg';
import fico10 from '@/public/images/icon-10.svg';
import Link from 'next/link';
import SweaterBox from './Sweater-box';

import { useState } from 'react';
import SizeModal from './size-modal';

function Sweater() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <SweaterBanner />

      <SizeModal show={showModal} handleClose={handleClose} />
      <div className="Sweater-page">
        <div className="Sweater-block-main">
          <div className="Sweater-left">
            <div className="Sweater-left-inner">
              <SweaterBox />
            </div>
          </div>
          <div className="Sweater-right">
            <div className="Sweater-block-top">
              <div className="short-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.</p>
              </div>
              <div className="Sweater-block-top-right">
                <div className="i-icon">
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                    >
                      <rect
                        x="1.6198"
                        y="1.98986"
                        width="28.7607"
                        height="28.7607"
                        rx="14.3804"
                        stroke="#377DD7"
                        strokeWidth="2.61461"
                      />
                      <path
                        d="M18.9944 13.0144L14.2029 13.6746L14.0306 14.5505L14.9744 14.74C15.5877 14.9008 15.7101 15.144 15.5746 15.8173L14.0306 23.7957C13.6265 25.8587 14.2517 26.8287 15.722 26.8287C16.8619 26.8287 18.1849 26.2495 18.7852 25.4534L18.9694 24.4964C18.5534 24.9017 17.94 25.0638 17.5359 25.0638C16.9594 25.0638 16.7514 24.6193 16.8988 23.8363L18.9944 13.0144ZM19.1394 8.21266C19.1394 8.51481 19.0853 8.81401 18.9801 9.09316C18.875 9.37231 18.7209 9.62596 18.5266 9.83961C18.3324 10.0533 18.1018 10.2227 17.8479 10.3384C17.5941 10.454 17.3221 10.5135 17.0474 10.5135C16.7726 10.5135 16.5006 10.454 16.2468 10.3384C15.993 10.2227 15.7624 10.0533 15.5681 9.83961C15.3738 9.62596 15.2197 9.37231 15.1146 9.09316C15.0095 8.81401 14.9554 8.51481 14.9554 8.21266C14.9554 7.60244 15.1758 7.0172 15.5681 6.58571C15.9604 6.15422 16.4925 5.9118 17.0474 5.9118C17.6022 5.9118 18.1343 6.15422 18.5266 6.58571C18.919 7.0172 19.1394 7.60244 19.1394 8.21266Z"
                        fill="#377DD7"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="price">
                  <span className="old-price">$60.00</span>
                  <span className="new-price">$55.00</span>
                </div>
                <button>
                  <Link href="#" onClick={handleShow}>
                    Proceed to sizes or measurements
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
                        ></path>
                        <path
                          d="M17.7745 8.63019H1.22544C0.555532 8.63019 0 8.20133 0 7.68417C0 7.16702 0.555532 6.73816 1.22544 6.73816H17.7745C18.4444 6.73816 19 7.16702 19 7.68417C19 8.20133 18.4444 8.63019 17.7745 8.63019Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </button>
              </div>
            </div>
            <div className="Sweater-right-middle">
              <div className="products-box-sub">
                <div className="img">
                  <Image src={checkImage1} loading="lazy" alt="" width={170} height={170} />
                </div>
                <div className="products-box-sub-inner">
                  <h5>Lorem ipsum</h5>
                  <div className="name">
                    Name: <span>Lorem - 01580</span>
                  </div>
                </div>
              </div>
              <div className="change-link-2">
                <Link href="/">CHANGE FABRIC </Link>
              </div>
            </div>
            <div className="Sweater-right-bottom">
              <h4>Fabric characteristics</h4>
              <div className="fabric-listing">
                <ul>
                  <li>
                    <div className="icon-text">
                      <span>Gender:</span>
                    </div>
                    <div className="bg-text">Lorem</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <span>Pattern:</span>
                    </div>
                    <div className="bg-text">Lorem</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <span>Colour:</span>
                    </div>
                    <div className="bg-text">red</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <span>Material:</span>
                    </div>
                    <div className="bg-text">Lorem</div>
                  </li>

                  <li>
                    <div className="icon-text">
                      <i>
                        <Image src={fico1} alt="" width={24} height={24} />
                      </i>
                      <span>Weave</span>
                    </div>
                    <div className="bg-text">poplin</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <i>
                        <Image src={fico2} alt="" width={24} height={24} />
                      </i>
                      <span>Seasonality </span>
                    </div>
                    <div className="bg-text">All year round</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <i>
                        <Image src={fico3} alt="" width={24} height={24} />
                      </i>
                      <span>Wrinkle Resistance</span>
                    </div>
                    <div className="bg-text">Medium</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <i>
                        <Image src={fico4} alt="" width={24} height={24} />
                      </i>
                      <span>Ironing Effort</span>
                    </div>
                    <div className="bg-text">Medium</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <i>
                        <Image src={fico5} alt="" width={24} height={24} />
                      </i>
                      <span>Perceived Weight</span>
                    </div>
                    <div className="bg-text">Medium</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <i>
                        <Image src={fico6} alt="" width={24} height={24} />
                      </i>
                      <span>Softness:</span>
                    </div>
                    <div className="bg-text">Soft</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <i>
                        <Image src={fico7} alt="" width={24} height={24} />
                      </i>
                      <span>Shininess</span>
                    </div>
                    <div className="bg-text">Shiny</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <i>
                        <Image src={fico8} alt="" width={24} height={24} />
                      </i>
                      <span>look:</span>
                    </div>
                    <div className="bg-text">Opaque</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <i>
                        <Image src={fico9} alt="" width={24} height={24} />
                      </i>
                      <span>Smoothness</span>
                    </div>
                    <div className="bg-text">Smooth</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <i>
                        <Image src={fico10} alt="" width={24} height={24} />
                      </i>
                      <span>Washing Instructions:</span>
                    </div>
                    <div className="bg-text">Washable</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Sweater-right-bottom sweater-type">
              <h4>Sweater</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.</p>
              <div className="gauge-navigate">
                <div className="d-flex flex-wrap">
                  <div className="navigate-item">
                    <h6>Body Shape</h6>
                    <div className="navigatebox">
                      <div className="image">
                        <Image
                          src="/images/cart-img-4.png"
                          width={300}
                          height={200}
                          alt="gauge"
                          priority
                        />
                      </div>
                      <div className="info">
                        <div className="title">
                          <h6>Cotton poplin</h6>
                          <button>
                            <Link href={'/'}>
                              Change
                              <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 11L6 6L1 1"
                                  stroke="#868686"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </button>
                        </div>
                      </div>
                      <div className="d-none only-title">Style</div>
                    </div>
                  </div>
                  <div className="navigate-item">
                    <h6>Body Shape</h6>
                    <div className="navigatebox">
                      <div className="image">
                        <Image
                          src="/images/cart-img-4.png"
                          width={300}
                          height={200}
                          alt="gauge"
                          priority
                        />
                      </div>
                      <div className="info">
                        <div className="title">
                          <h6>Cotton poplin</h6>
                          <button>
                            <Link href={'/'}>
                              Change
                              <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 11L6 6L1 1"
                                  stroke="#868686"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </button>
                        </div>
                      </div>
                      <div className="d-none only-title">Style</div>
                    </div>
                  </div>
                  <div className="navigate-item">
                    <h6>Body Shape</h6>
                    <div className="navigatebox">
                      <div className="image">
                        <Image
                          src="/images/cart-img-4.png"
                          width={300}
                          height={200}
                          alt="gauge"
                          priority
                        />
                      </div>
                      <div className="info">
                        <div className="title">
                          <h6>Cotton poplin</h6>
                          <button>
                            <Link href={'/'}>
                              Change
                              <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 11L6 6L1 1"
                                  stroke="#868686"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </button>
                        </div>
                      </div>
                      <div className="d-none only-title">Style</div>
                    </div>
                  </div>
                  <div className="navigate-item">
                    <h6>Body Shape</h6>
                    <div className="navigatebox">
                      <div className="image">
                        <Image
                          src="/images/cart-img-4.png"
                          width={300}
                          height={200}
                          alt="gauge"
                          priority
                        />
                      </div>
                      <div className="info">
                        <div className="title">
                          <h6>Cotton poplin</h6>
                          <button>
                            <Link href={'/'}>
                              Change
                              <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 11L6 6L1 1"
                                  stroke="#868686"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          </button>
                        </div>
                      </div>
                      <div className="d-none only-title">Style</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sweater;
