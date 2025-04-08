import '@/app/styles/Sweater-product.css';
import SweaterBox from '@/app/components/Sweater/Sweater-box';
import {
  ChangeYarnButton,
  ProceedToSizeMeasurement,
  SaveAndGoToCart,
  StepBanner,
} from '@/components';
import { FIXED_STEPS_COUNT, URL_SLUG } from '@/constants';
import { PRODUCT_TYPE_DROPDOWN_URL } from '@/constants/apis';
import { getDropdownList, getStepFullViewDetails } from '@/utils/server-api.utils';
import Image from 'next/image';
import React from 'react';

import { formatPrice, getAWSImageUrl } from '@/utils/common.utils';
import { getTranslations } from 'next-intl/server';
import CurrentStepBox from '@/components/step-components/current-step-box';
import SweaterSlider from '@/components/step-components/sweater-slider';

const LastStepPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const resolvedSearchParams = await searchParams;
  const t = await getTranslations();
  const productTypeData = await getDropdownList(PRODUCT_TYPE_DROPDOWN_URL);
  const productTypeId = productTypeData?.[0]?.value;
  const stepData = await getStepFullViewDetails({ productTypeId, steps: resolvedSearchParams });

  console.log('stepData', stepData);

  return (
    <>
      <StepBanner step={stepData?.steps?.length + FIXED_STEPS_COUNT} />
      <div className="Sweater-page">
        <div className="Sweater-block-main">
          <div className="Sweater-left">
            <div className="Sweater-left-inner">
              {stepData?.productData?.images?.length ? (
                <SweaterSlider images={stepData?.productData?.images} />
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
                  <li>
                    <div className="icon-text">
                      <span>{t('COMMON.GENDER')}:</span>
                    </div>
                    <div className="bg-text">{stepData?.yarn?.gender}</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <span>{t('COMMON.MATERIAL')}:</span>
                    </div>
                    <div className="bg-text">{stepData?.yarn?.material}</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <span>{t('COMMON.COLOUR')}:</span>
                    </div>
                    <div className="bg-text">{stepData?.yarn?.colour}</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <span>{t('COMMON.SEASONALITY')}:</span>
                    </div>
                    <div className="bg-text">{stepData?.yarn?.seasonality}</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <span>{t('COMMON.PERCEIVED_WEIGHT')}:</span>
                    </div>
                    <div className="bg-text">{stepData?.yarn?.perceivedWeight}</div>
                  </li>
                  {stepData?.yarn?.yarns?.map((yarn: any, index: number) => (
                    <li key={index}>
                      <div className="icon-text">
                        {yarn.image && (
                          <i>
                            <Image
                              src={getAWSImageUrl(yarn?.image)}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastStepPage;
