// import { useTranslations } from 'next-intl';
import { getAWSImageUrl } from '@/utils/common.utils';
import Image from 'next/image';

type HeroItemProps = {
  href: string;
  title: string;
  image: string;
  newTab?: boolean;
  buttonText: string;
};

export default function HeroItem({ title, image }: Readonly<HeroItemProps>) {
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
                <a href="/sweater" title="Create My SWEATER">
                  Create My SWEATER
                </a>
              </li>
              <li>
                <a href="/shop" title="Customise a Sweater">
                  Customise a Sweater
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
