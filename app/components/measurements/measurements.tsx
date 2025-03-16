'use client';

import '@/app/styles/Measurements.css';

// import Customisebreadcrumb from './step-breadcrumb';
import { useTranslations } from 'next-intl';
import MeasurementsBox from './measurements-box';
import { DropDownOptionType } from '@/types';
import BannerWrapper from '@/components/common/banner/BannerWrapper';

export default function Measurementspage({
  fittingName,
  availableSizes,
  steps,
  productTypeId,
  measurementProfiles,
}: {
  fittingName: string;
  availableSizes: any[];
  steps: any[];
  productTypeId: string;
  measurementProfiles: DropDownOptionType[];
}) {
  const t = useTranslations();
  return (
    <BannerWrapper>
      <div className="measurements-page">
        <div className="measurements-block">
          <div className="measurements-left">
            <div className="measurements-left-sub">
              <h4>{t('COMMON.MEASUREMENTS_TEXT')}</h4>
              <p>{t('COMMON.MEASUREMENTS_DESCRIPTION')}</p>
            </div>
          </div>
          <div className="measurements-right">
            <MeasurementsBox
              productTypeId={productTypeId}
              fittingName={fittingName}
              steps={steps}
              availableSizes={availableSizes}
              measurementProfiles={measurementProfiles}
            />
          </div>
        </div>
      </div>
      {/* <Customisebreadcrumb /> */}
    </BannerWrapper>
  );
}
