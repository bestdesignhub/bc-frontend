import { Footer, Header } from '@/app/components';
import { PaymentFailed, PaymentSuccess } from '@/app/components/payment-status';
import BannerWrapper from '@/components/common/banner/BannerWrapper';

export default function OrderStatus() {
  return (
    <BannerWrapper>
      <Header />
      <PaymentSuccess />
      <PaymentFailed />
      <Footer />
    </BannerWrapper>
  );
}
