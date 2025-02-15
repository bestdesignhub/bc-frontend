'use client';

import Image from 'next/image';
import Sustainabilityimg from '@/public/images/sus-image-1.webp';

export default function ImageWithText() {
  return (
    <>
      <div className="image-with-text-outer">
        <div className="img-block">
          <Image src={Sustainabilityimg} alt="Sustainability-image" width={960} height={680} />
        </div>
        <div className="right-colum-data">
          <div className="right-colum-inner">
            <div className="text">
              <h2>LOREM IPSUM DOLAR SIT AMET CONSECTETUR.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tristique nibh.
                Nullam porta viverra massa, sed ornare tortor gravida efficitur. Phasellus suscipit
                est ex, et tristique mi accumsan sit amet. Pellentesque non sollicitudin nulla, ut
                faucibus est. Proin nec lobortis urna, et convallis mauris. Proin et interdum metus.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
