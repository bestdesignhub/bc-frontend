import Image from 'next/image';
import Link from 'next/link';
import '@/app/styles/header.css';

export default function Logo() {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image src="/images/logo.png" alt="Bespoke" width={92} height={100} priority />
        </Link>
      </div>
    </>
  );
}
