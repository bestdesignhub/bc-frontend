import Image from 'next/image';
import Link from 'next/link';
import { Row, Col, Stack } from 'react-bootstrap';
import '@/app/styles/perfectfit.css';
import { Section2 } from '@/types/components';
import { getAWSImageUrl } from '@/utils/common.utils';
import { USER_ROUTES } from '@/constants';

interface IPerfectFitProps {
  perfectFitData: Section2;
}

export default function PerfectFit({ perfectFitData }: IPerfectFitProps) {
  return (
    <div className='marketing-block'>
      <div className='container'>

        <div className='marketing-block-content'>
        <div className="perfectfit_wrapper"
      style={{
        backgroundImage: `url(${getAWSImageUrl(perfectFitData?.bg_image)})`,
        backgroundSize: 'cover', // Ensures the image covers the div
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents repeating
      }}
    >       
        <Row alignitems={'center'}>
          <Col xs={12} lg={5}>
            <div className="image">
              <Image
                src={getAWSImageUrl(perfectFitData?.left_image)}
                width={770}
                height={770}
                alt="sweater"
                loading="lazy"
              />
            </div>
          </Col>
          <Col xs={12} lg={7}>
            <div className="content">
              <h2>{perfectFitData?.title ?? 'Perfect-fit sweater created online'}</h2>
              <Stack className="btn-group" direction="horizontal" gap={4}>
                <button>
                  <Link href={USER_ROUTES.sweater}>
                    Create My SWEATER
                  </Link>
                </button>
                <button className="outline">
                  <Link href={USER_ROUTES.shop}>
                    Customise a Sweater
                  </Link>
                </button>
              </Stack>
            </div>
          </Col>
        </Row> 
    </div>
    <div className='marketing-img'>
        <p>
                {perfectFitData?.description ??
                  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel convallis
                  nulla. Etiam nisl augue.`}
          </p>
    </div>
        </div>   
        </div>  
    </div>
  );
}
