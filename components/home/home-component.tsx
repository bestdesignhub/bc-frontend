import {
  Accessories,
  Category,
  ClientStory,
  Hero,
  Instagram,
  LookGood,
  Marquee,
  OffGift,
  PerfectFit,
  Service,
  Stories,
  Testimonial,
} from '@/app/components';
import { IProduct } from '@/app/components/accessories/accessories';
import { Favourite } from '@/app/components/favourite';
import { ZeeZap } from '@/app/components/zee-zap';
import { IHomeApiRes } from '@/types/components';

interface IHomePageProps {
  homepageData: IHomeApiRes;
  homeStoryData: any;
  homeProductList: IProduct[];
  testimonialData: { position: string; title: string; name: string }[];
}

const HomeComponent = ({
  homepageData,
  homeStoryData,
  homeProductList,
  testimonialData,
}: IHomePageProps) => {
  const heroData = homepageData?.section1;
  const perfectFitData = homepageData?.section2;
  const marqueeData = homepageData?.sectionNString;
  const categoryData = homepageData?.section3;
  const offGiftData = homepageData?.section4;
  const accessoriesData = homepageData?.section5;
  const favouriteData = homepageData?.section6;
  const storiesData = homepageData?.section7;
  const lookGoodData = homepageData?.section8;
  const clientStoryData = homepageData?.section9;
  console.log('testimonialData: ', testimonialData);
  return (
    <>
      <Hero heroData={heroData} />
      <PerfectFit perfectFitData={perfectFitData} />
      <Marquee marqueeData={marqueeData} />
      <Category categoryData={categoryData} />
      <OffGift offGiftData={offGiftData} />
      <Accessories accessoriesData={accessoriesData} homeProductList={homeProductList} />
      <Favourite favouriteData={favouriteData} />
      <Stories storiesData={storiesData} homeStoryData={homeStoryData ?? []} />
      <LookGood lookGoodData={lookGoodData} />
      <ZeeZap lookGoodData={lookGoodData} />
      <ClientStory clientStoryData={clientStoryData} />
      <Testimonial testimonialData={testimonialData} />
      <Instagram />
      <Service />
    </>
  );
};

export default HomeComponent;
