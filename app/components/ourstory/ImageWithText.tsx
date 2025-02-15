'use client';

import { IStoryItem } from '@/components/our-story/our-story-detail';
import { getAWSImageUrl } from '@/utils/common.utils';
import Image from 'next/image';

interface IImageWithTextProps {
  story: IStoryItem;
}

export default function ImageWithText({ story }: IImageWithTextProps) {
  return (
    <div className="image-with-text-outer">
      <div className="img-block">
        <Image
          src={getAWSImageUrl(story?.image)}
          alt="Sustainability-image"
          width={960}
          height={680}
        />
      </div>
      <div className="right-colum-data">
        <div className="right-colum-inner">
          <div className="text">
            <h2>{story?.title}</h2>
            <p>{story?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
