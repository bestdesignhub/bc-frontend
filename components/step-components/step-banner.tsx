import { IBannerData } from '@/types';
import { getAWSImageUrl } from '@/utils/common.utils';
import { getBannerBySlug } from '@/utils/server-api.utils';
import Image from 'next/image';

export default async function StepBanner({ step }: { stepData?: any; step: string }) {
  const sweaterBannerData = (await getBannerBySlug(`sweater-${step}`)) as IBannerData;
  return (
    <div className="page-banner gauge createSweaterBanner">
      <div className='container'>
        <div className='flex'>
          <div className='sweterContent'>
            <h1>{sweaterBannerData?.title ?? ''}</h1>
            <p>{sweaterBannerData?.description ?? ''}</p>
            {/* <h1>Creation Custom Sweater</h1>
            <p>customise your perfect sweater by selecting your preferred yarn, material and style. From fit to finish, we craft each piece uniquely for you.</p> */}
          </div>
          <div className="image">
            <Image
              src={getAWSImageUrl(sweaterBannerData?.bg_image)}
              width={260}
              height={370}
              alt={'banner'}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
