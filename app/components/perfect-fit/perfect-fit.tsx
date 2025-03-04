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
    <div
      className="perfectfit_wrapper"
      style={{
        backgroundImage: `url(${getAWSImageUrl(perfectFitData?.bg_image)})`,
        backgroundSize: 'cover', // Ensures the image covers the div
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents repeating
      }}
    >
      <div className="container">
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
              <p>
                {perfectFitData?.description ??
                  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel convallis
                  nulla. Etiam nisl augue.`}
              </p>
              <Stack className="btn-group" direction="horizontal" gap={4}>
                <button>
                  <Link href={USER_ROUTES.sweater}>
                    Create My SWEATER
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
                        />
                        <path
                          d="M17.7745 8.63019H1.22544C0.555532 8.63019 0 8.20133 0 7.68417C0 7.16702 0.555532 6.73816 1.22544 6.73816H17.7745C18.4444 6.73816 19 7.16702 19 7.68417C19 8.20133 18.4444 8.63019 17.7745 8.63019Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </Link>
                </button>
                <button className="outline">
                  <Link href={USER_ROUTES.shop}>
                    Customise a Sweater
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
                        />
                        <path
                          d="M17.7745 8.63019H1.22544C0.555532 8.63019 0 8.20133 0 7.68417C0 7.16702 0.555532 6.73816 1.22544 6.73816H17.7745C18.4444 6.73816 19 7.16702 19 7.68417C19 8.20133 18.4444 8.63019 17.7745 8.63019Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </Link>
                </button>
              </Stack>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
