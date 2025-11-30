import {
  Accessories,
  Hero,
} from '@/app/components';
import { IProduct } from '@/app/components/accessories/accessories';
import { ZeeZap } from '@/app/components/zee-zap';
import { IHomeApiRes } from '@/types/components';
import CmsPageBySlug from '../SweaterStyle/CmsPageBySlug';
import OrderingStepsSection from './ordering-steps-section';
import CustomSweater from './custom-sweater';
import ExploreCollection from './explore-collection';
import ShowroomSteps from './showroom-steps-section';

interface IHomePageProps {
  homepageData: IHomeApiRes;
  homeStoryData: any;
  homeProductList: IProduct[];
  testimonialData: { position: string; title: string; name: string }[];
}

const HomeComponent = ({ homepageData, homeProductList }: IHomePageProps) => {
  const heroData = homepageData?.section1;
  const perfectFitData = homepageData?.section2;
  const categoryData = homepageData?.section3;
  const accessoriesData = homepageData?.section5;
  const lookGoodData = homepageData?.section8;
  return (
    <div>
      <main className="main-page">
        <Hero heroData={heroData} />
        <Accessories accessoriesData={accessoriesData} homeProductList={homeProductList} />
        <CustomSweater sweaterData={perfectFitData?.cards} />
        <OrderingStepsSection />
        <ZeeZap lookGoodData={lookGoodData} />
        <ExploreCollection collectionData={categoryData} />
        <ShowroomSteps />
        <CmsPageBySlug slug="home-about-us" />
      </main>
    </div>
  );
};

export default HomeComponent;
