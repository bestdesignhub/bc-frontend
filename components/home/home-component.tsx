import {
  Accessories,
  Category,
  Hero,
  Instagram,
  LookGood,
  PerfectFit,
  Service,
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
  homeProductList,
}: IHomePageProps) => {
  const heroData = homepageData?.section1;
  const perfectFitData = homepageData?.section2;
  const categoryData = homepageData?.section3;
  const accessoriesData = homepageData?.section5;
  const favouriteData = homepageData?.section6;
  const lookGoodData = homepageData?.section8;
  return (
    <>
      <Hero heroData={heroData} />
      <Accessories accessoriesData={accessoriesData} homeProductList={homeProductList} />
      <PerfectFit perfectFitData={perfectFitData} />
      {/* <Marquee marqueeData={marqueeData} /> */}
      {/* <OffGift offGiftData={offGiftData} /> */}
      <Category categoryData={categoryData} />
      <ZeeZap lookGoodData={lookGoodData} />
      <Favourite favouriteData={favouriteData} />
      {/* <Stories storiesData={storiesData} homeStoryData={homeStoryData ?? []} /> */}
      <LookGood lookGoodData={lookGoodData} />
     
      {/* <ClientStory clientStoryData={clientStoryData} />
      <Testimonial testimonialData={testimonialData} /> */}
      <Instagram />
      <Service />
    </>
  );
};

export default HomeComponent;
