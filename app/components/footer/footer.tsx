import '@/app/styles/footer.css';
import { ISettings } from '@/types';
import Link from 'next/link';

export default async function Footer({ }: { settings?: ISettings }) {
  return (
    <>
      <footer className="footer">
        <div className="f-container">
          <div className="f-logo-section">
            <div className="f-logo">
              <Link href="#" className="BESPOKE CASHMERE">
                <img src="images/footer-logo.webp" alt="BESPOKE CASHMERE" />
              </Link>
            </div>
            <div className="company-registration">
              <p>Company Registration:</p>
              <p>Switzerland / 45 45665465</p>
            </div>
            <div className="social-persence">
              Social Persence:
              <ul className="social-icon">
                <li>
                  <Link href="#" title="instagram">
                    <img src="images/insta.webp" alt="instagram" />
                  </Link>
                </li>
                <li>
                  <Link href="#" title="linkedin">
                    <img src="images/linkedin.webp" alt="linkedin" />
                  </Link>
                </li>
                <li>
                  <Link href="#" title="whatsapp">
                    <img src="images/whatsapp.webp" alt="whatsapp" />
                  </Link>
                </li>
                <li>
                  <Link href="#" title="facebook">
                    <img src="images/facebook.webp" alt="facebook" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="payment-method">
              <span className="payment-title">Payment Method:</span>
              <img src="images/stripe.webp" alt="stripe" />
            </div>
          </div>
          <div className="f-links-box">
            <h4>Menu</h4>
            <ul className="f-link">
              <li>
                <Link href="#" title="Women">
                  Women
                </Link>
              </li>
              <li>
                <Link href="#" title="Men">
                  Men
                </Link>
              </li>
              <li>
                <Link href="#" title="Shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" title="Our Yarn Details">
                  Our Yarn Details
                </Link>
              </li>
              <li>
                <Link href="#" title="Our Styles">
                  Our Styles
                </Link>
              </li>
            </ul>
          </div>
          <div className="f-links-box">
            <h4>Explore</h4>
            <ul className="f-link">
              <li>
                <Link href="#" title="About Us">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" title="Mind Behind Idea">
                  Mind Behind Idea
                </Link>
              </li>
              <li>
                <Link href="#" title="Contact Us">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" title="New In">
                  New In
                </Link>
              </li>
              <li>
                <Link href="#" title="Our Story">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>
          <div className="f-links-box">
            <h4>Support</h4>
            <ul className="f-link">
              <li>
                <Link href="#" title="Payment Conditions">
                  Payment Conditions
                </Link>
              </li>
              <li>
                <Link href="#" title="Returns Policy">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link href="#" title="Privacy Policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" title="Terms of use">
                  Terms of use
                </Link>
              </li>
            </ul>
          </div>
          <div className="f-links-box">
            <h4>Contact Us</h4>
            <ul className="f-link">
              <li>
                <Link href="mailto:contact@bespokecashmere.eu" title="contact@bespokecashmere.eu">
                  contact@bespokecashmere.eu
                </Link>
              </li>
              <li>
                <span>Contact : Soren J. Hansen</span>
              </li>
              <li>
                <Link href="tel:+4531327890" title="+45 31 32 78 90">
                  +45 31 32 78 90
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <small className="copyright-row">
        <span className="f-container">
          <span className="copyright-text">
            <span className="Copyright">Copyright © 2025 BESPOKE CASHMERE</span>  | <span className="made-in"> Made in Switzerland</span></span>
        </span>
      </small>
    </>
  )
}
