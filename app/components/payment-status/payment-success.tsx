import '@/app/styles/payment-success.css';
import Link from 'next/link';

export default function PaymentSuccess() {
  return (
    <>
      <div className="payment-status-wrapper">
        <div className="container">
          <div className="payment-content success">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                fill="#71bb71"
              />
            </svg>
            <h1>Thak You</h1>
            <h6>Payment done successfully</h6>
            <p>
              You wiil be redirected to the home page shorlty or click here to return to home pagez
            </p>
            <button className="small">
              <Link href={'#'}>{'Home'}</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
