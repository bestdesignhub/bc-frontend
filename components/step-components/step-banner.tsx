import { IBannerData } from '@/types';
import { getAWSImageUrl } from '@/utils/common.utils';
import { getBannerBySlug } from '@/utils/server-api.utils';
import Image from 'next/image';

export default async function StepBanner({ step }: { stepData?: any; step: string }) {
  const sweaterBannerData = (await getBannerBySlug(`sweater-${step}`)) as IBannerData;
  return (
    <div className="page-banner gauge">
      <div className="image">
        <Image
          src={getAWSImageUrl(sweaterBannerData?.bg_image)}
          width={1920}
          height={650}
          alt={'banner'}
          loading="lazy"
        />
      </div>
      <div className="banner-caption">
        <div className="container">
          <div className="banner-content">
            <h1>
              {/* {t('COMMON.STEP')} {step}:{' '}
              {stepData
                ? `${t('COMMON.CHOOSE_A')} ${stepData?.label}`
                : t('COMMON.FULL_VIEW_SWEATER')} */}
              {sweaterBannerData?.title ?? ''}
            </h1>
            <p>{sweaterBannerData?.description ?? ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
