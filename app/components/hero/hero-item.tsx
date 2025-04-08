// import { useTranslations } from 'next-intl';
import { getAWSImageUrl } from '@/utils/common.utils';
import Image from 'next/image';
import Link from 'next/link';

type HeroItemProps = {
  href: string;
  title: string;
  image: string;
  newTab?: boolean;
  buttonText: string;
};

export default function HeroItem({ image }: Readonly<HeroItemProps>) {
  // const t = useTranslations();
  return (
    <div className="mainBanner">
      <div className="relative">
        <div className="banner">
          <Image
            src={getAWSImageUrl(image)}
            alt="Bespoke"
            fill
            className="object-cover"
            loading="lazy"
          />

          <div className="banner-content f-container">
            <h2 className="banner-title">Design Your Perfect Cashmere Sweater Online</h2>
            <ul className="banner-buttons">
              <li>
                <Link href="/sweater" title="Create My SWEATER">
                  Create My SWEATER
                </Link>
              </li>
              <li>
                <Link href="/shop" title="Customise a Sweater">
                  Customise a Sweater
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
