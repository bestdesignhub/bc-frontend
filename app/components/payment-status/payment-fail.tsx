import '@/app/styles/payment-success.css';
import Link from 'next/link';

export default function PaymentFailed() {
  return (
    <>
      <div className="payment-status-wrapper">
        <div className="container">
          <div className="payment-content failed">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                fill="#fa8585"
              />
            </svg>
            <h1>Oh no</h1>
            <h6>Payment payment failed</h6>
            <p>Don&apos;t worry, We&apos;ll try your payment again over the next few days.</p>
            <button className="small">
              <Link href={'#'}>{'Home'}</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
