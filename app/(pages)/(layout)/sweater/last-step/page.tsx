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
                <SweaterBox />
              )}
            </div>
          </div>
          <div className="Sweater-right">
            <div className="Sweater-block-top">
              <div className="short-text">
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.</p> */}
              </div>
              <div className="Sweater-block-top-right">
                {/* <div className="i-icon">
                                        <Link href="/">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="33"
                                                viewBox="0 0 32 33"
                                                fill="none"
                                            >
                                                <rect
                                                    x="1.6198"
                                                    y="1.98986"
                                                    width="28.7607"
                                                    height="28.7607"
                                                    rx="14.3804"
                                                    stroke="#377DD7"
                                                    strokeWidth="2.61461"
                                                />
                                                <path
                                                    d="M18.9944 13.0144L14.2029 13.6746L14.0306 14.5505L14.9744 14.74C15.5877 14.9008 15.7101 15.144 15.5746 15.8173L14.0306 23.7957C13.6265 25.8587 14.2517 26.8287 15.722 26.8287C16.8619 26.8287 18.1849 26.2495 18.7852 25.4534L18.9694 24.4964C18.5534 24.9017 17.94 25.0638 17.5359 25.0638C16.9594 25.0638 16.7514 24.6193 16.8988 23.8363L18.9944 13.0144ZM19.1394 8.21266C19.1394 8.51481 19.0853 8.81401 18.9801 9.09316C18.875 9.37231 18.7209 9.62596 18.5266 9.83961C18.3324 10.0533 18.1018 10.2227 17.8479 10.3384C17.5941 10.454 17.3221 10.5135 17.0474 10.5135C16.7726 10.5135 16.5006 10.454 16.2468 10.3384C15.993 10.2227 15.7624 10.0533 15.5681 9.83961C15.3738 9.62596 15.2197 9.37231 15.1146 9.09316C15.0095 8.81401 14.9554 8.51481 14.9554 8.21266C14.9554 7.60244 15.1758 7.0172 15.5681 6.58571C15.9604 6.15422 16.4925 5.9118 17.0474 5.9118C17.6022 5.9118 18.1343 6.15422 18.5266 6.58571C18.919 7.0172 19.1394 7.60244 19.1394 8.21266Z"
                                                    fill="#377DD7"
                                                />
                                            </svg>
                                        </Link>
                                    </div> */}
                <div className="price">
                  {/* <span className="old-price">$60.00</span> */}
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
                  {stepData?.yarn?.yarns?.map((yarn: any, index: number) => {
                    return (
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
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="Sweater-right-bottom sweater-type">
              <h4>{t('COMMON.SWEATER_CHARACTERISTICS')}</h4>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem.</p> */}
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
