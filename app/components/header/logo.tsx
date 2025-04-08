import '@/app/styles/header.css';
import Link from 'next/link';

export default function Logo() {
  return (
    <>
      <Link className="logo" href="/" title="Bespoke Cashmere">
        <img src="images/logo.png" alt="Bespoke Cashmere" />
      </Link>
    </>
  );
}
