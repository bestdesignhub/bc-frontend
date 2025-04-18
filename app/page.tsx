import { Header, KeepConnect, TopBar } from '@/app/components';
import { HomeComponent } from '@/components/home';
import {
  getFlashSaleBySlug,
  getHomeModelBySlug,
  getHomePageData,
  getHomePageStoryData,
  getHomeProductList,
  getWebSiteSettings,
} from '@/utils/server-api.utils';
import { IProduct } from './components/accessories/accessories';
import Footer from './components/footer/footer';
import ModalHome from './components/modal-home/modal-home';
import styles from './page.module.css';
import { ISettings } from '@/types';

export default async function Home() {
  const [
    homepageDataResult,
    homeStoryDataResult,
    homeProductListResult,
    settingDataResult,
    flashSaleResult,
    homeModelResult,
  ] = await Promise.allSettled([
    getHomePageData(),
    getHomePageStoryData(),
    getHomeProductList(),
    getWebSiteSettings(),
    getFlashSaleBySlug('home'),
    getHomeModelBySlug('home-model'),
  ]);

  const homepageData = homepageDataResult.status === 'fulfilled' ? homepageDataResult.value : {};
  const homeStoryData = homeStoryDataResult.status === 'fulfilled' ? homeStoryDataResult.value : [];
  const homeProductList =
    homeProductListResult.status === 'fulfilled' ? (homeProductListResult.value as IProduct[]) : [];
  const settingData =
    settingDataResult.status === 'fulfilled' ? (settingDataResult.value as ISettings) : undefined;
  const flashSale = flashSaleResult.status === 'fulfilled' ? flashSaleResult.value : null;
  const homeModelData = homeModelResult.status === 'fulfilled' ? homeModelResult.value : null;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TopBar flashSale={flashSale} />
        <Header />
        <HomeComponent
          homepageData={homepageData}
          homeStoryData={homeStoryData}
          homeProductList={homeProductList}
        />
        <KeepConnect settings={settingData} />
        <Footer settings={settingData} />
        <ModalHome modelData={homeModelData} />
      </main>
    </div>
  );
}
