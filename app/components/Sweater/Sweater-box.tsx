'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import '@/app/styles/Sweater-product.css';
import Sweaterimg1 from '@/public/images/Sweater-img.png';
import userAxiosInstanceWithoutToken from '@/config/userAxiosInstanceWithoutToken';

const BUCKET_DOMAIN = process.env.NEXT_PUBLIC_BUCKET_DOMAIN; // Load env variable

export default function SweaterBox() {
  const searchParams = useSearchParams();

  const slug = searchParams.get('gauge');
  const pattern = searchParams.get('pattern');
  const style = searchParams.get('style');
  const fitting = searchParams.get('fitting');

  const [imageSrc, setImageSrc] = useState(Sweaterimg1); // Default image

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await userAxiosInstanceWithoutToken.post('/api/ci/get-image', {
          slug,
          pattern,
          style,
          fitting,
        });

        if (response.data.success && response.data.data.bg_image) {
          let fullImageUrl: any;
          fullImageUrl = `${BUCKET_DOMAIN}${response.data.data.bg_image}`;

          console.log('Full Image:', fullImageUrl);

          setImageSrc(fullImageUrl); // Set full image URL
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [slug, pattern, style, fitting]);

  return (
    <div className="defult-block">
      <div className="Sweater-top-data">
        <h3>Your Sweater</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.</p>
      </div>
      <div className="Sweater-img">
        <Image loading="lazy" src={imageSrc} alt="Sweater Image" width={380} height={414} />
      </div>
    </div>
  );
}
