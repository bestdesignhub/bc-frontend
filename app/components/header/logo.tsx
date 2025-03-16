import Image from 'next/image';
import Link from 'next/link';
import '@/app/styles/header.css';

export default function Logo() {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image className="dark-logo" loading="lazy" src="/images/logo.png" alt="Bespoke" width={50} height={60} />
          <Image className="light-logo" loading="lazy" src="/images/logowhite.png" alt="Bespoke" width={50} height={60} />
        </Link>
      </div>
    </>
  );
}
