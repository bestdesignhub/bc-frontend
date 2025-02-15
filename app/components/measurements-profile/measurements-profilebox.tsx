'use client';

import Link from 'next/link';
import Image from 'next/image';
import Profileimg1 from '@/public/images/profile-img-1.png';

export default function MeasurementsProfileBox() {
  return (
    <>
      <div className="profile-block-main">
        <h4>Take measurements from</h4>
        <div className="profile-listing-main">
          <div className="profile-listing-row">
            <div className="img">
              <Image src={Profileimg1} alt="image" width={230} height={280} />
            </div>
            <div className="profile-box-sub">
              <div className="profile-box-inner">
                <h5>The body</h5>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
              <div className="profile-btn">
                <Link href="/">start here</Link>
              </div>
            </div>
          </div>
          <div className="profile-listing-row">
            <div className="img">
              <Image src={Profileimg1} alt="image" width={230} height={280} />
            </div>
            <div className="profile-box-sub">
              <div className="profile-box-inner">
                <h5>The body</h5>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
              <div className="profile-btn">
                <Link href="/">start here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
