import Image from 'next/image';
import Link from 'next/link';
import { Stack } from 'react-bootstrap';
import '@/app/styles/perfectfit.css';
import { Section2 } from '@/types/components';

import { USER_ROUTES } from '@/constants';

interface IPerfectFitProps {
  perfectFitData: Section2;
}

export default function PerfectFit({ perfectFitData }: IPerfectFitProps) {
  return (
    <div className="perfectfit_wrapper">
      <div className="container p-0">
        <div className="halfbx" style={{ alignItems: 'center' }}>
          <div
            className="half-boxes"
            style={{
              backgroundColor: `#f6f6f6`,
              padding: '30px',
            }}
          >
            <h2 className="text-center">{perfectFitData?.titled ?? 'Create own sweater own'}</h2>
            <div className="image-grip">
              <div className="image">
                <Image
                  // src={getAWSImageUrl(perfectFitData?.left_image)}
                  src="/images/icon-1.png"
                  width={245}
                  height={245}
                  alt="sweater"
                  priority
                />
                <h3>Quality Yarn</h3>
              </div>
              <div className="image">
                <Image
                  // src={getAWSImageUrl(perfectFitData?.left_image)}
                  src="/images/icon-1.png"
                  width={245}
                  height={245}
                  alt="sweater"
                  priority
                />
                <h3>High Quality Gauge</h3>
              </div>
              <div className="image">
                <Image
                  // src={getAWSImageUrl(perfectFitData?.left_image)}
                  src="/images/icon-1.png"
                  width={245}
                  height={245}
                  alt="sweater"
                  priority
                />
                <h3>Choose Own Style</h3>
              </div>
            </div>

            <div className="content">
              {/* <p>
                {perfectFitData?.description ??
                  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel convallis
                  nulla. Etiam nisl augue.`}
              </p> */}
              <Stack
                className="btn-group justify-content-center position-relative "
                direction="horizontal"
                gap={4}
              >
                <button>
                  <Link href={USER_ROUTES.sweater}>Create My SWEATER</Link>
                </button>
                <button>
                  <Link href={USER_ROUTES.shop}>Customise a Sweater</Link>
                </button>
              </Stack>
            </div>
          </div>
          <div
            className="half-boxes-right"
            style={{
              backgroundColor: `#f6f6f6`,
              padding: '30px',
            }}
          >
            Banner Here
          </div>
        </div>
      </div>
    </div>
  );
}
