import { Footer, Header, Service } from '@/app/components';
import Sweater from '@/app/components/Sweater/Sweater'; // Default import
import BannerWrapper from '@/components/common/banner/BannerWrapper';

export default function SweaterPage() {
  return (
    <BannerWrapper>
      <Header />
      <Sweater />
      <Service />
      {/* <KeepConnect /> */}

      <Footer />
    </BannerWrapper>
  );
}
