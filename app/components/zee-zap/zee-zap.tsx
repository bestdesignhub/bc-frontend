import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import '@/app/styles/zee-zap.css';
import { Section8 } from '@/types/components';
import { getAWSImageUrl } from '@/utils/common.utils';

interface ILookGoodProps {
  lookGoodData?: Section8;
}

export default function ZeeZap({ lookGoodData }: ILookGoodProps) {
  return (
    <div className="zeezap-wrapper">
      {lookGoodData?.card2 && (
        <Row className="g-0">
          <Col xs={12} lg={6}>
            <div className="image">
              <Image
                src={getAWSImageUrl(lookGoodData?.card2?.image)}
                width={400}
                height={600}
                alt="hero"
                className="img1"
                loading="lazy"
              />
            </div>
            <div className="zeezap_content">
              <h6>{lookGoodData?.card2?.title ?? ''}</h6>
              <h3>{lookGoodData?.card2?.sub_title ?? ''}</h3>
              <p>{lookGoodData?.card2?.description ?? ''}</p>
              {lookGoodData?.card2?.button_text && (
                <button className="small">
                  <Link href={lookGoodData?.card2?.button_link ?? ''}>
                    {lookGoodData?.card2?.button_text}
                  </Link>
                </button>
              )}
            </div>
          </Col>
          {lookGoodData?.card3 && ( 
          <Col xs={12} lg={6}>
            <div className="image">
              <Image
                src={getAWSImageUrl(lookGoodData?.card3?.image)}
                width={400}
                height={600}
                alt="hero"
                className="img1"
                loading="lazy"
              />
            </div>            
            <div className="zeezap_content">
              <h6>{lookGoodData?.card3?.title ?? ''}</h6>
              <h3>{lookGoodData?.card3?.sub_title ?? ''}</h3>
              <p>{lookGoodData?.card3?.description}</p>
              {lookGoodData?.card3?.button_text && (
                <button className="small">
                  <Link href={lookGoodData?.card2?.button_text ?? ''}>
                    {lookGoodData?.card3?.button_text}
                  </Link>
                </button>
              )}
            </div>
          </Col> 
      )}
        </Row>
      )}
      
    </div>
  );
}
