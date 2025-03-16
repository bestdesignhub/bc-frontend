import { Footer, Header, KeepConnect, Service } from '@/app/components';
import CustomiseSweater from '@/app/components/customise-Sweater/CustomiseSweater'; // Default import

export default function SweaterPage() {
  return (
    <>
      <Header />
      <CustomiseSweater />
      <Service />
      <KeepConnect />
      <Footer />
    </>
  );
}
