import Image from 'next/image';
import Link from 'next/link';
import '@/app/styles/perfectfit.css';
import { Section2 } from '@/types/components';
import { USER_ROUTES } from '@/constants';
import { getAWSImageUrl } from '@/utils/common.utils';

interface IPerfectFitProps {
  perfectFitData: Section2;
}

export default function PerfectFit({ perfectFitData }: IPerfectFitProps) {
  return (
    <div className="marketing-block">
      <div className="container">
        <div className="marketing-block-content">
          <div className="perfectfit_wrapper">
            <div className="image">
              <Image
                src={getAWSImageUrl(perfectFitData?.left_image)}
                width={770}
                height={770}
                alt="sweater"
                loading="lazy"
              />
            </div>
            <div className="buttons">
              <button>
                <Link href={USER_ROUTES.sweater}>Create My SWEATER</Link>
              </button>
              <button className="outline">
                <Link href={USER_ROUTES.shop}>Customise a Sweater</Link>
              </button>
            </div>
          </div>
          <div className="marketing-img">
            <Image
              src={getAWSImageUrl(perfectFitData?.bg_image)}
              width={770}
              height={770}
              alt="sweater"
              loading="lazy"
            />
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
