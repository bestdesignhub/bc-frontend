import { Col, Row } from 'react-bootstrap';
import '@/app/styles/offgift.css';
// import OffgiftData from './offgift-data';
import OffgiftItem from './offgift-item';
import { Section4 } from '@/types/components';

interface IOffGiftProps {
  offGiftData: Section4;
}

export default function OffGift({ offGiftData }: IOffGiftProps) {
  return (
    <div className="offgift-wrapper">
      <Row className="justify-content-center">
        <Col xs={12} lg={10}>
          <div className="section_title center">
            <h2>{offGiftData?.title ?? `UP TO 25% OFF GIFTS THEY&apos;LL ADORE`}</h2>
            <p>{offGiftData?.description ?? ''}</p>
          </div>
        </Col>
      </Row>
      <div className="offgift-post">
        <Row>
          {offGiftData?.cards?.map((offgift, index: number) => (
            <OffgiftItem
              key={index}
              href={offgift?.button_link}
              title={offgift?.title1}
              subtitle={offgift?.title2}
              image={offgift?.bg_image}
              buttonText={offgift?.button_text}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}
