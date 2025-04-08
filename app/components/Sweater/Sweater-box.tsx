'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useSearchParams } from 'next/navigation';
import '@/app/styles/Sweater-product.css';
import Sweaterimg1 from '@/public/images/Sweater-img.png';
import userAxiosInstanceWithoutToken from '@/config/userAxiosInstanceWithoutToken';

const BUCKET_DOMAIN = process.env.NEXT_PUBLIC_BUCKET_DOMAIN;

type SweaterBoxProps = {
  stepData?: any; // You can type this better if you want
};

export default function SweaterBox({ stepData }: SweaterBoxProps) {
  const searchParams = useSearchParams();

  const slug = searchParams.get('gauge');
  const pattern = searchParams.get('pattern');
  const style = searchParams.get('style');
  const fitting = searchParams.get('fitting');
  const color = stepData.yarn.colourId;

  console.log('stepData----', stepData.yarn.colourId);

  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(Sweaterimg1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!slug || !pattern || !style || !fitting) return;

    const fetchImage = async () => {
      setLoading(true);
      try {
        const response = await userAxiosInstanceWithoutToken.post('/api/ci/get-image', {
          slug,
          pattern,
          style,
          fitting,
          color,
        });

        if (response.data.success && response.data.data.bg_image) {
          const fullImageUrl = `${BUCKET_DOMAIN}${response.data.data.bg_image}`;
          console.log('Full Image:', fullImageUrl);
          setImageSrc(fullImageUrl);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      } finally {
        setLoading(false);
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
        {loading ? (
          <p>Loading sweater...</p>
        ) : (
          <Image
            loading="lazy"
            src={imageSrc}
            alt="Sweater Image"
            width={380}
            height={414}
            unoptimized={typeof imageSrc === 'string'}
          />
        )}
      </div>
    </div>
  );
}
