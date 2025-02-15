import { Footer, Header } from '@/app/components';
import { PaymentFailed, PaymentSuccess } from '@/app/components/payment-status';

export default function OrderStatus() {
  return (
    <>
      <Header />
      <PaymentSuccess />
      <PaymentFailed />
      <Footer />
    </>
  );
}
