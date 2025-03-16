import { Alert } from 'react-bootstrap';
import './empty-cart.css'; // Import your custom CSS file
import Link from 'next/link';
import { USER_ROUTES } from '@/constants';

export default function EmptyCartMessage({
  message,
  buttonText,
}: {
  message: string;
  buttonText: string;
}) {
  return (
    <div className="empty-cart-container">
      <Alert variant="warning" className="empty-cart-message">
        <svg
          className="cart-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.5 13h13l3-8H5" />
        </svg>
        <p>{message}</p>
        <Link href={USER_ROUTES.shop}>
          <button className="shop-now-btn">{buttonText}</button>
        </Link>
      </Alert>
    </div>
  );
}
