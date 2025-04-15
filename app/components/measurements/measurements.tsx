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
  console.log('productTypeId', productTypeId);
  console.log('fittingName', fittingName);
  console.log('steps', steps);
  console.log('availableSizes', availableSizes);
  console.log('measurementProfiles', measurementProfiles);
  return (
    <BannerWrapper>
      <div className="measurements-page">
        <div className="container">
          <div className="measurements-block">
            <h2>Sweater Measurment</h2>
            <p>
              Our measurements helps you find the perfect sweater fit. It includes chest width,
              sleeve length, and overall length to ensure comfort and style.{' '}
            </p>
            <div className="swetar-img" style={{ margin: '50px 0', textAlign: 'center' }}>
              <img src="images/mesurment-drawing.png" alt="Mesurment" />
            </div>
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
      </div>
      {/* <Customisebreadcrumb /> */}
    </BannerWrapper>
  );
}
