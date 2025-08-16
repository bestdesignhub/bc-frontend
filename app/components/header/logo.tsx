import '@/app/styles/header.css';
import Link from 'next/link';

export default function Logo() {
  return (
    <>
      <Link className="logo" href="/" title="Bespoke Cashmere">
        <img src="https://app.bespokecashmere.eu/images/logo.png" alt="Bespoke Cashmere" />
      </Link>
    </>
  );
}
