import { IBannerData } from '@/types';
import { getAWSImageUrl } from '@/utils/common.utils';
import { getBannerBySlug } from '@/utils/server-api.utils';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function StepBanner({ stepData, step }: { stepData?: any; step: string }) {
  const sweaterBannerData = (await getBannerBySlug(`sweater-${step}`)) as IBannerData;
  const t = await getTranslations();

  return (
    <div className="page-banner gauge">
      <div className="image">
        <Image
          src={getAWSImageUrl(sweaterBannerData?.bg_image)}
          width={1920}
          height={650}
          alt={'banner'}
        />
      </div>
      <div className="banner-caption">
        <div className="container">
          <div className="banner-content">
            <h1>
              {t('COMMON.STEP')} {step}:{' '}
              {stepData
                ? `${t('COMMON.CHOOSE_A')} ${stepData?.label}`
                : t('COMMON.FULL_VIEW_SWEATER')}
            </h1>
            <p>{sweaterBannerData?.description ?? ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
