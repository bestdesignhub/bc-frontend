import '@/app/styles/ourstory.css';
import { IStoryDetailProps } from '@/components/our-story/our-story-detail';
import { getAWSImageUrl } from '@/utils/common.utils';
import Image from 'next/image';
import ImageWithText from './ImageWithText';

export default function Ourstorypage({ storyData }: IStoryDetailProps) {
  return (
    <div className="story-page">
      <div className="story-banner-outer">
        <div className="story-banner-img">
          <Image src={getAWSImageUrl(storyData?.bg_image)} alt="" width={1920} height={650} />
        </div>
        <div className="banner-caption">
          <div className="container">
            <div className="story-banner-text">
              <h1>{storyData?.title}</h1>
              <p>{storyData?.sub_title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="story-section-1">
        <div className="container">
          <div className="story-text-contain">
            <div className="text story-content">{storyData?.description}</div>
          </div>
        </div>
      </div>
      <div className="sustainability-section-2">
        {storyData?.my_stories?.map((data) => <ImageWithText key={data?.uuid} story={data} />)}
      </div>
    </div>
  );
}
