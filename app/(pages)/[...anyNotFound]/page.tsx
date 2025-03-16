import { Footer, Header } from '@/app/components';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="not-found">
        <h1>404</h1>
        <p>Page not found</p>
        <button className="btnbox">
          <Link href={'/'}>Back to Home</Link>
        </button>
      </div>
      <Footer />
    </>
  );
}
