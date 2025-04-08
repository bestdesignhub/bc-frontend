import { Footer, Header, Service } from '@/app/components';
import Blog from '@/app/components/blog/blog'; // Default import

export default function Blogpage() {
  return (
    <>
      <Header />
      <Blog />
      <Service />
      {/* <KeepConnect /> */}

      <Footer />
    </>
  );
}
