import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import '@/app/styles/service.css';

export default function Service() {
  return (
    <>
      <div className="service-wrapper">
        <Row>
          <Col xs={6} md={3}>
            <div className="servicebox">
              <Image
                src={'/images/customer-service.svg'}
                width={70}
                height={70}
                alt="24/7 CUSTOMER SERVICE"
                loading="lazy"
              />
              <p>24/7 CUSTOMER SERVICE</p>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="servicebox">
              <Image
                src={'/images/delivery-truck.svg'}
                width={70}
                height={70}
                alt="24/7 CUSTOMER SERVICE"
                loading="lazy"
              />
              <p>3 week delivery</p>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="servicebox">
              <Image
                src={'/images/free-shipping.svg'}
                width={70}
                height={70}
                alt="24/7 CUSTOMER SERVICE"
                loading="lazy"
              />
              <p>Free SHIPPING</p>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="servicebox">
              <Image
                src={'/images/secure-payment.svg'}
                width={70}
                height={70}
                loading="lazy"
                alt="24/7 CUSTOMER SERVICE"
              />
              <p>100% SECURE PAYMENT</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
