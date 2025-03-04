import Link from 'next/link';
import Image from 'next/image';

type InstagramItemProps = {
  key: number;
  href: string;
  title: string;
  image: string;
};

export default function InstagramItem({ href = '', title, image }: InstagramItemProps) {
  return (
    <div className="instagrambox">
      <Link href={href}>
        <div className="image">
          <div className="icon">
            <svg
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_689_3805)">
                <path
                  d="M6 12.7549C6 11.1636 6.63214 9.63746 7.75736 8.51224C8.88258 7.38702 10.4087 6.75488 12 6.75488H24C25.5913 6.75488 27.1174 7.38702 28.2426 8.51224C29.3679 9.63746 30 11.1636 30 12.7549V24.7549C30 26.3462 29.3679 27.8723 28.2426 28.9975C27.1174 30.1227 25.5913 30.7549 24 30.7549H12C10.4087 30.7549 8.88258 30.1227 7.75736 28.9975C6.63214 27.8723 6 26.3462 6 24.7549V12.7549Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 18.7549C13.5 19.9484 13.9741 21.093 14.818 21.9369C15.6619 22.7808 16.8065 23.2549 18 23.2549C19.1935 23.2549 20.3381 22.7808 21.182 21.9369C22.0259 21.093 22.5 19.9484 22.5 18.7549C22.5 17.5614 22.0259 16.4168 21.182 15.5729C20.3381 14.729 19.1935 14.2549 18 14.2549C16.8065 14.2549 15.6619 14.729 14.818 15.5729C13.9741 16.4168 13.5 17.5614 13.5 18.7549Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.75 12.0049V12.019"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_689_3805">
                  <rect width="36" height="36" fill="white" transform="translate(0 0.754883)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <Image loading="lazy" src={image} alt={title} width={1520} height={680} />
        </div>
      </Link>
    </div>
  );
}
