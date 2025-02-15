import { Footer, Header, KeepConnect, Service } from '@/app/components';
import Sweater from '@/app/components/Sweater/Sweater'; // Default import

export default function SweaterPage() {
  return (
    <>
      <Header />
      <Sweater />
      <Service />
      <KeepConnect />

      <Footer />
    </>
  );
}
