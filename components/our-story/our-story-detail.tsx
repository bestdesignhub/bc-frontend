import Ourstorypage from '@/app/components/ourstory/ourstory';
import '@/app/styles/ourstory.css';

export interface IStoryItem {
  uuid: string;
  image: string;
  title: string;
  description: string;
}

interface IStoryDetailsRes {
  _id: string;
  bg_image: string;
  title: string;
  sub_title: string;
  description: string;
  my_stories: IStoryItem[];
}

export interface IStoryDetailProps {
  storyData: IStoryDetailsRes;
}

const OurStoryDetail = ({ storyData }: IStoryDetailProps) => {
  return <Ourstorypage storyData={storyData} />;
};

export default OurStoryDetail;
