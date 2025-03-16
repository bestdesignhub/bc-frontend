import VideoPlayer from '@/components/common/video/VideoPlayer';
import { USER_ROUTES } from '@/constants';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

type HeroItemProps = {
  href: string;
  title: string;
  image: string;
  newTab?: boolean;
  buttonText: string;
};

export default function HeroItem({ title }: Readonly<HeroItemProps>) {
  const t = useTranslations();
  return (
    <div className="herobox">
      {/* <div className="image"> */}
      {/* <Image loading="lazy" src={getAWSImageUrl(image)} alt={title} width={1520} height={680} /> */}
      <VideoPlayer url='https://videos.pexels.com/video-files/5788041/5788041-hd_1920_1080_25fps.mp4' controls={false} loop />
      {/* </div> */}
      <div className="banner_caption">
        <div className="container">
          <div className="banner_content">
            <h1>{title}</h1>
            <button className="mr-2">
              <Link href={`${USER_ROUTES.men}`}>
                {t('COMMON.MEN')}
                <span>
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8893 15.2522C11.6633 15.2522 11.4372 15.1745 11.2588 15.008C10.9137 14.6861 10.9137 14.1534 11.2588 13.8315L17.8496 7.68269L11.2588 1.53386C10.9137 1.21199 10.9137 0.67924 11.2588 0.357369C11.6038 0.0354992 12.1748 0.0354992 12.5198 0.357369L19.7412 7.09445C20.0862 7.41632 20.0862 7.94907 19.7412 8.27094L12.5198 15.008C12.3414 15.1745 12.1153 15.2522 11.8893 15.2522Z"
                      fill="white"
                    />
                    <path
                      d="M17.7745 8.63019H1.22544C0.555532 8.63019 0 8.20133 0 7.68417C0 7.16702 0.555532 6.73816 1.22544 6.73816H17.7745C18.4444 6.73816 19 7.16702 19 7.68417C19 8.20133 18.4444 8.63019 17.7745 8.63019Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </Link>
            </button>
            <button>
              <Link href={`${USER_ROUTES.women}`}>
                {t('COMMON.WOMEN')}
                <span>
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8893 15.2522C11.6633 15.2522 11.4372 15.1745 11.2588 15.008C10.9137 14.6861 10.9137 14.1534 11.2588 13.8315L17.8496 7.68269L11.2588 1.53386C10.9137 1.21199 10.9137 0.67924 11.2588 0.357369C11.6038 0.0354992 12.1748 0.0354992 12.5198 0.357369L19.7412 7.09445C20.0862 7.41632 20.0862 7.94907 19.7412 8.27094L12.5198 15.008C12.3414 15.1745 12.1153 15.2522 11.8893 15.2522Z"
                      fill="white"
                    />
                    <path
                      d="M17.7745 8.63019H1.22544C0.555532 8.63019 0 8.20133 0 7.68417C0 7.16702 0.555532 6.73816 1.22544 6.73816H17.7745C18.4444 6.73816 19 7.16702 19 7.68417C19 8.20133 18.4444 8.63019 17.7745 8.63019Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
