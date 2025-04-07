import Image from 'next/image';
import Link from 'next/link';
import '@/app/styles/header.css';

export default function Logo() {
  return (
    <>
      <a className="logo" href="/" title="Bespoke Cashmere">
        <img src="images/logo.png" alt="Bespoke Cashmere" />
      </a>
    </>
  );
}
