import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import '@/app/styles/look-good.css';
import { Section8 } from '@/types/components';
import { getAWSImageUrl } from '@/utils/common.utils';

interface ILookGoodProps {
  lookGoodData: Section8;
}

export default function LookGood({ lookGoodData }: ILookGoodProps) {
  return (
    <div className="lookgood-wrapper">
      <Container fluid>
        <div className="section_title center">
          <h2>{lookGoodData?.title ?? ''}</h2>
        </div>
        <div className="lookgood-row">
          <div className="flexrow">
            <div className="col-7">
              <div className="image">
                <Image
                  src={getAWSImageUrl(lookGoodData?.card1?.first_image)}
                  width={400}
                  height={600}
                  alt="hero"
                  className="img1"
                />
                <Image
                  src={getAWSImageUrl(lookGoodData?.card1?.second_image)}
                  width={325}
                  height={484}
                  alt="hero"
                  className="img2"
                />
              </div>
            </div>
            <div className="col-5">
              <div className="lookgood_content">
                <h6>{lookGoodData?.card1?.title ?? ''}</h6>
                <h4>{lookGoodData?.card1?.sub_title ?? ''}</h4>
                <p>{lookGoodData?.card1?.description ?? ''}</p>
                {/* <p>
                  In nec nisi in urna facilisis placerat vitae ut est.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer non tristique nibh.
                </p> */}
                <button className="small">
                  <Link href={lookGoodData?.card1?.button_link ?? '#'}>
                    {lookGoodData?.card1?.button_text ?? ''}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
