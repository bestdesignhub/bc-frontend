import '@/app/styles/header.css';
import { USER_ROUTES } from '@/constants';
import Link from 'next/link';

export default function TopMenu() {
  return (
    <>
      <div className="top_menu">
        <ul>
          <li>
            <Link href={USER_ROUTES.sweater}>CREATE MY SWEATER</Link>
          </li>
          <li>
            <Link href={USER_ROUTES.shop}>CUSTOMISE A SWEATER</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
