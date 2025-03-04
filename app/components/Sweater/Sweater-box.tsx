'use client';

import Image from 'next/image';
import '@/app/styles/Sweater-product.css';
import Sweaterimg1 from '@/public/images/Sweater-img.png';

export default function SweaterBox() {
  return (
    <>
      <div className="defult-block">
        <div className="Sweater-top-data">
          <h3>Your Sweater</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.</p>
        </div>
        <div className="Sweater-img">
          <Image loading="lazy" src={Sweaterimg1} alt="" width={380} height={414} />
        </div>
      </div>
    </>
  );
}
