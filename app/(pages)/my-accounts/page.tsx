import { Footer, Header, Service } from '@/app/components';
import MyAcounts from '@/app/components/MyAcounts/MyAcounts'; // Default import

export default function MyAcountspage() {
  return (
    <>
      <Header />
      <MyAcounts />
      <Service />
      {/* <KeepConnect /> */}

      <Footer />
    </>
  );
}
