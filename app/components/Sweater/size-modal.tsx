import React from 'react';
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import '@/app/styles/modal-size.css';
import checkImage2 from '@/public/images/cart-img-1.png';
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

const SizeModal = (props: { show: boolean; handleClose: () => void }) => {
  const { show, handleClose } = props;

  return (
    <>
      <Modal className="sizemodal" show={show} onHide={handleClose} animation={false} centered>
        <div className="modal-block-main">
          <div className="modal-block-top">
            <div className="modal-left-top">
              <h5>Lorem ipsum</h5>
              <div className="name">
                Name: <span>Lorem - 01580</span>
              </div>
            </div>
            <div className="modal-right-top">
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
              <div className="button-set-close">
                <div className="select-btn">
                  <Link href="/">SELECT</Link>
                </div>
                <div className="close-btn">
                  <Link
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClose();
                    }}
                  >
                    CLOSE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-block-bottom">
            <div className="modal-left-pro">
              <Image src={checkImage2} alt="" width={170} height={170} />
              <div className="star-icon">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                  >
                    <path
                      d="M11.0008 16.75L4.82881 19.995L6.00781 13.122L1.00781 8.25495L7.90781 7.25495L10.9938 1.00195L14.0798 7.25495L20.9798 8.25495L15.9798 13.122L17.1588 19.995L11.0008 16.75Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="modal-bottom-right">
              <div className="modal-row">
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
                </ul>
              </div>
              <div className="modal-row">
                <ul>
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
                </ul>
              </div>
              <div className="modal-row">
                <ul>
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
          </div>
        </div>
      </Modal>
    </>
  );
};

SizeModal.displayName = 'SizeModal';

export default SizeModal;
