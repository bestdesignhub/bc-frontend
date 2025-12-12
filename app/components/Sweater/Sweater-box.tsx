'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useSearchParams } from 'next/navigation';
import '@/app/styles/Sweater-product.css';
import userAxiosInstanceWithoutToken from '@/config/userAxiosInstanceWithoutToken';
import { getAWSImageUrl } from '@/utils/common.utils';

const BUCKET_DOMAIN = process.env.NEXT_PUBLIC_BUCKET_DOMAIN;

type SweaterBoxProps = {
  stepData?: any; // You can type this better if you want
};

export default function SweaterBox({ stepData }: SweaterBoxProps) {
  const searchParams = useSearchParams();

  const slug = searchParams.get('gauge');
  const pattern = searchParams.get('pattern');
  const style = searchParams.get('style');
  const yarn = searchParams.get('yarn');
  const gauge = searchParams.get('gauge');
  const gender = searchParams.get('gender');
  const fitting = searchParams.get('fitting');
  const color = stepData?.yarn?.colourId;

  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(); //Sweaterimg1
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    stepData?.steps?.map((e: any) => {
      const currentStepData = stepData?.[e?.slug] || {};
      if (e?.slug == 'style') {
        setTitle(currentStepData?.stepCard?.title)
      }


    })
  }, [title])

  useEffect(() => {
    // Reset image when style changes
    setImageSrc('');
  }, [style]);


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
          // console.log('Full Image:', fullImageUrl);
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

  useEffect(() => {
    if (!yarn || !pattern || !slug || !fitting) return;

    const fetchStyleInfo = async () => {
      setLoading(true);
      try {
        const response = await userAxiosInstanceWithoutToken.post('/styles/simple-filter', {
          gender,      // or however you're passing gender
          pattern,
          yarn,
          gauge, // assuming `fitting` is gauge here?
          language: 'en'
        })
        if (response.data.success && response.data.data.length > 0) {
          const styleData = response.data.data[0]; // assuming one match
          console.log("styledata", styleData);

          const imageUrl = `${BUCKET_DOMAIN}${styleData.realImage}`;
          setImageSrc(imageUrl);
          setTitle(styleData.title); // update the title if needed
        }
      } catch (error) {
        console.error('Error fetching style:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStyleInfo();
  }, [slug, pattern, style, fitting]);


  return (
    <div className="defult-block">
      <div className="Sweater-top-data">
        {/* <h3>Your Final Sweater</h3> */}
        <h3>{title}</h3>
      </div>
      <div className="Sweater-img">
        {loading ? (
          <p>Generating sweater...</p>
        ) : (
          <Image
            loading="lazy"
            src={
              imageSrc
                ? imageSrc
                : getAWSImageUrl(stepData?.style?.stepCard?.realImage)
            }
            alt="Sweater Image"
            width={380}
            height={0}
            className="h-auto w-full object-contain"
            unoptimized={typeof imageSrc === 'string'}
          />
        )}
      </div>
    </div>
  );
}
