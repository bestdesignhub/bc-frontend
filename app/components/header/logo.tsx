import Image from 'next/image';
import Link from 'next/link';
import '@/app/styles/header.css';

export default function Logo() {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image loading="lazy" src="https://bespokecashmere.eu/logo.png" alt="Bespoke" width={200} height={53} />
        </Link>
      </div>
    </>
  );
}
