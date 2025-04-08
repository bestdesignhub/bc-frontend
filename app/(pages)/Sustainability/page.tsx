import { Footer, Header, Service } from '@/app/components';
import Sustainability from '@/app/components/Sustainability/sustainability'; // Default import
import BannerWrapper from '@/components/common/banner/BannerWrapper';

export default function Sustainabilitypage() {
  return (
    <BannerWrapper>
      <Header />
      <Sustainability />
      <Service />
      {/* <KeepConnect /> */}

      <Footer />
    </BannerWrapper>
  );
}
