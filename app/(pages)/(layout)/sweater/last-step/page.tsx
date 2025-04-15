import React from 'react';
import Image from 'next/image';
import '@/app/styles/Sweater-product.css';

import SweaterBox from '@/app/components/Sweater/Sweater-box';
import SweaterSlider from '@/components/step-components/sweater-slider';
import CurrentStepBox from '@/components/step-components/current-step-box';
import MeasurementsBox from '@/app/components/measurements/measurements-box';
import { MeasurementProfileComponent } from '@/app/components/measurements-profile';
import MeasurementProfileSelector from '@/components/MeasurementProfileSelector';
import AvailableSizeSelector from '@/components/AvailableSizeSelector';

import {
  ChangeYarnButton,
  ProceedToSizeMeasurement,
  SaveAndGoToCart,
  StepBanner,
} from '@/components';

import {
  getDropdownList,
  getStepFullViewDetails,
  getUserMeasurementActive,
  getUserMeasurementBySlug,
  getAvailableSizes,
  getDefaultProductType,
  getFittingStepDetails,
  getMeasurementProfiles,
  getStepTypesList,
} from '@/utils/server-api.utils';

import { getAWSImageUrl, formatPrice } from '@/utils/common.utils';
import { getTranslations } from 'next-intl/server';
import { FIXED_STEPS_COUNT, URL_SLUG } from '@/constants';
import { PRODUCT_TYPE_DROPDOWN_URL } from '@/constants/apis';

const LastStepPage = async ({
  searchParams,
}: {
  profiles: any;
  availableSizes: any;
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const resolvedSearchParams = await searchParams;
  const t = await getTranslations();

  const [productType, productTypeData] = await Promise.all([
    getDefaultProductType(),
    getDropdownList(PRODUCT_TYPE_DROPDOWN_URL),
  ]);

  const productTypeId = productTypeData?.[0]?.value;

  const stepData = await getStepFullViewDetails({ productTypeId, steps: resolvedSearchParams });
  const fittingName = stepData?.fitting?.stepCard?.title;

  const [
    stepsResult,
    availableSizesResult,
    fittingStepDetailsResult,
    measurementProfileResult,
    userMeasurementActiveResult,
    userMeasurementBySlugResult,
  ] = await Promise.allSettled([
    getStepTypesList(productType?._id),
    getAvailableSizes(),
    getFittingStepDetails({ id: resolvedSearchParams[URL_SLUG.FITTING] }),
    getMeasurementProfiles(),
    getUserMeasurementActive(),
    getUserMeasurementBySlug(),
  ]);

  const steps = stepsResult.status === 'fulfilled' ? stepsResult.value : [];
  const availableSizes =
    availableSizesResult.status === 'fulfilled' ? availableSizesResult.value : [];
  const measurementProfiles =
    measurementProfileResult.status === 'fulfilled' ? measurementProfileResult.value : [];
  const userMeasurementActive =
    userMeasurementActiveResult.status === 'fulfilled' ? userMeasurementActiveResult.value : [];
  const userMeasurementBySlug =
    userMeasurementBySlugResult.status === 'fulfilled' ? userMeasurementBySlugResult.value : [];

  const measurementProfileId = resolvedSearchParams[URL_SLUG.MEASUREMENT_PROFILE];
  const measurementProfile = measurementProfileId && userMeasurementBySlug;

  return (
    <>
      <StepBanner step={(stepData?.steps?.length || 0) + FIXED_STEPS_COUNT} />

      <div className="Sweater-page">
        <div className="Sweater-block-main">
          <div className="container">
            <div className="final-step-sweaterbg">
              <div className="Sweater-left">
                <div className="Sweater-left-inner">
                  {stepData?.productData?.images?.length ? (
                    <SweaterSlider images={stepData.productData.images} />
                  ) : (
                    <SweaterBox stepData={stepData} />
                  )}
                </div>
              </div>

              <div className="Sweater-right">
                <div className="Sweater-block-top">
                  <div className="short-text" />
                  <div className="Sweater-block-top-right">
                    <div className="price">
                      <span className="new-price">{formatPrice(stepData?.yarn?.price)}</span>
                    </div>
                    {resolvedSearchParams.hasOwnProperty(URL_SLUG.ADD_TO_CART) ? (
                      <SaveAndGoToCart steps={stepData.steps} />
                    ) : (
                      <ProceedToSizeMeasurement />
                    )}
                  </div>
                </div>

                <div className="Sweater-right-middle">
                  <div className="products-box-sub">
                    <div className="img">
                      <Image
                        src={getAWSImageUrl(stepData?.yarn?.image)}
                        alt="yarn img"
                        width={170}
                        height={170}
                        loading="lazy"
                      />
                    </div>
                    <div className="products-box-sub-inner">
                      <h5>{stepData?.yarn?.name}</h5>
                      <div className="name">
                        {t('COMMON.NAME')}:{' '}
                        <span>
                          {stepData?.yarn?.name} - {stepData?.yarn?.yarnId}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChangeYarnButton searchParams={resolvedSearchParams} />
                </div>

                <div className="Sweater-right-bottom">
                  <h4>{t('COMMON.YARN_CHARACTERISTICS')}</h4>
                  <div className="fabric-listing">
                    <ul>
                      {['gender', 'material', 'colour', 'seasonality', 'perceivedWeight'].map(
                        (attr) => (
                          <li key={attr}>
                            <div className="icon-text">
                              <span>{t(`COMMON.${attr.toUpperCase()}`)}:</span>
                            </div>
                            <div className="bg-text">{stepData?.yarn?.[attr]}</div>
                          </li>
                        )
                      )}
                      {stepData?.yarn?.yarns?.map((yarn: any, index: number) => (
                        <li key={index}>
                          <div className="icon-text">
                            {yarn.image && (
                              <i>
                                <Image
                                  src={getAWSImageUrl(yarn.image)}
                                  alt=""
                                  width={24}
                                  height={24}
                                  loading="lazy"
                                />
                              </i>
                            )}
                            <span>{yarn.name}</span>
                          </div>
                          <div className="bg-text">{yarn.value}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="Sweater-right-bottom sweater-type">
                  <h4>{t('COMMON.SWEATER_CHARACTERISTICS')}</h4>
                  <div className="gauge-navigate">
                    <div className="d-flex flex-wrap">
                      {stepData?.steps?.map((stepObj: any, index: number) => {
                        const currentStepData = stepData?.[stepObj?.slug] || {};
                        return (
                          <div className="navigate-item" key={index}>
                            <h6>{stepObj?.name}</h6>
                            <CurrentStepBox
                              currentStepData={currentStepData}
                              stepNumber={`${index + FIXED_STEPS_COUNT}`}
                            />
                          </div>
                        );
                      })}
                    </div>

                    <MeasurementProfileComponent
                      userMeasurementBySlug={userMeasurementBySlug}
                      userMeasurementActiveList={userMeasurementActive}
                      measurementProfile={measurementProfile}
                    />
                    <MeasurementProfileSelector profiles={measurementProfiles} />
                    <AvailableSizeSelector sizes={availableSizes} />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LastStepPage;
