import Image from 'next/image';
import Link from 'next/link';
import '@/app/styles/header.css';

export default function Logo() {
  return (
    <>
      <div className="logo order-0">
        <Link href="/">
          <Image src="/images/b-logo.png" alt="Bespoke" width={173} height={54} priority />
        </Link>
      </div>
    </>
  );
}
