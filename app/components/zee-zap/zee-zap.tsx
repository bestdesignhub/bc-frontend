import Image from 'next/image';
import Link from 'next/link';
import '@/app/styles/zee-zap.css';
import { Section8 } from '@/types/components';
import { getAWSImageUrl } from '@/utils/common.utils';

interface ILookGoodProps {
  lookGoodData?: Section8;
}

export default function ZeeZap({ lookGoodData }: ILookGoodProps) {
  return (
    <section className="women-men-sweater">
      {lookGoodData?.card2 && (
        <>
          <div className="women-sweater sweater-img-content">
            <Link href="/women">
              <Image src={getAWSImageUrl(lookGoodData?.card2?.image)} width={361} height={456} alt="hero" className="img1"
                loading="lazy" />
            </Link>
            <div className="sweater-content">
              <h3>{lookGoodData?.card2?.title ?? ''}  </h3>
              <p>{lookGoodData?.card2?.description}</p>
              {lookGoodData?.card2?.button_text && (
                <div className='shop-button'>
                  <Link href={lookGoodData?.card2?.button_text ?? ''}>
                    {lookGoodData?.card2?.button_text}
                  </Link>
                </div>
              )}
            </div>
          </div>


          {lookGoodData?.card3 && (
            <div className="men-sweater sweater-img-content">
              <Link href="/men">
                <Image
                  src={getAWSImageUrl(lookGoodData?.card3?.image)}
                  width={361}
                  height={456}
                  alt="hero"
                  className="img1"
                  loading="lazy"
                />
              </Link>
              <div className="sweater-content">
                <h3>{lookGoodData?.card3?.title ?? ''}</h3>
                {/* <h3>{lookGoodData?.card2?.sub_title ?? ''}</h3> */}
                <p>{lookGoodData?.card3?.description ?? ''}</p>
                {lookGoodData?.card3?.button_text && (
                  <div className="shop-button">
                    <Link href={lookGoodData?.card3?.button_link ?? ''}>
                      {lookGoodData?.card3?.button_text}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

    </section>
  );
}
