'use client';
import Image from 'next/image';

export default function GaugeBanner() {
  return (
    <>
      <div className="page-banner gauge">
        <div className="image">
          <Image
            src="/images/look-good1.png"
            loading="lazy"
            width={1920}
            height={650}
            alt={'banner'}
          />
        </div>
        <div className="banner-caption min-height">
          <div className="container">
            <div className="banner-content">
              <h1>Customise Sweater</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend lacus
                quam, eleifend lacinia nibh ornare eget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
