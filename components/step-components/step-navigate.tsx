'use client';

import { FIXED_STEPS_COUNT, STEPPERPATHS, URL_SLUG, USER_ROUTES } from '@/constants';
import { formatPrice, getAWSImageUrl } from '@/utils/common.utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function StepNavigate({
  steps,
  stepPageData,
  edit,
}: {
  steps?: any[];
  stepPageData?: any;
  edit?: string;
}) {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePrevStepClick = useCallback(
    (currentSlug: string, stepNumber: string) => {
      const params = new URLSearchParams(searchParams);
      if (params.has(URL_SLUG.CHANGE)) {
        router.push(`${USER_ROUTES.sweater}/${stepNumber}?${params.toString()}`);
        return;
      }
      const currentStep = steps?.find((step) => step.slug === currentSlug);
      if (!currentStep) return;
      const updatedSteps = steps?.filter((step) => step.rowOrder < currentStep.rowOrder);
      steps?.forEach((step) => {
        if (
          !updatedSteps?.some((updatedStep) => updatedStep.slug === step.slug) &&
          step.slug !== URL_SLUG.YARN
        ) {
          params.delete(step.slug);
        }
      });
      router.push(`${USER_ROUTES.sweater}/${stepNumber}?${params.toString()}`);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [steps, searchParams]
  );

  const handleYarnCardClick = useCallback(() => {
    if (searchParams.hasOwnProperty(URL_SLUG.CHANGE)) {
      const params = new URLSearchParams(searchParams);
      params.delete(URL_SLUG.EDIT);
      router.push(
        `${USER_ROUTES.sweater}?${params.toString()}${edit ? `&${URL_SLUG.EDIT}=${edit}` : ''}`
      );
      return;
    }
    router.push(`${USER_ROUTES.sweater}${edit ? `?${URL_SLUG.EDIT}=${edit}` : ''}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, edit]);

  return (
    <>
      <div className="gauge-navigate smallbx">
        <div className="d-flex  d-flex flex-column gap-3">
          {searchParams.size !== 0 && (
            <div
              className="navigate-item"
              style={{ cursor: 'pointer' }}
              onClick={handleYarnCardClick}
            >
              {stepPageData?.yarn?.price && (
                <div className="navigatebox">
                  <div className="image">
                    {stepPageData?.yarn?.image && (
                      <Image
                        src={getAWSImageUrl(stepPageData.yarn.image)}
                        width={300}
                        height={200}
                        alt="gauge"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="info">
                    <div className="title">
                      <h6>{stepPageData?.yarn?.name}</h6>
                      <p>
                        {t('COMMON.COLOUR')}: <strong>{stepPageData?.yarn?.colour}</strong>
                      </p>
                    </div>
                    <div className="price">
                      <strong>{formatPrice(stepPageData.yarn.price)}</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {searchParams.size !== 0 &&
            steps?.map((step: any, index: number) => {
              const isDataExists = stepPageData.hasOwnProperty(step.slug);
              const stepLabels = ['Gauge', 'Pattern', 'Styles', 'Measurement'];
              return (
                <div
                  className="navigate-item"
                  key={index}
                  style={
                    isDataExists
                      ? {
                          cursor: 'pointer',
                        }
                      : {}
                  }
                  onClick={() =>
                    isDataExists && handlePrevStepClick(step.slug, `${index + FIXED_STEPS_COUNT}`)
                  }
                >
                  <div className="navigatebox">
                    {isDataExists && searchParams.size !== 0 && (
                      <>
                        <div className="image">
                          <Image
                            src={getAWSImageUrl(stepPageData?.[step?.slug]?.image)}
                            width={300}
                            height={200}
                            alt={step.label}
                            loading="lazy"
                          />
                        </div>
                        <div className="info">
                          <div className="title">
                            {/* <h6>{`${index + 1}`}</h6> */}
                            <h6>{stepLabels[index] || index + 2}</h6>
                            <button>
                              <Link href={'#'}>
                                {t('COMMON.CHANGE')}
                                <svg
                                  width="7"
                                  height="12"
                                  viewBox="0 0 7 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1 11L6 6L1 1"
                                    stroke="#868686"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            </button>
                          </div>
                          <div className="price">
                            <strong>{formatPrice(stepPageData?.yarn?.price)}</strong>
                          </div>
                        </div>
                      </>
                    )}

                    {!isDataExists && (
                      <div className="only-title">{stepLabels[index] || index + 2}</div>
                    )}
                  </div>
                </div>
              );
            })}

          {!steps && (
            <>
              {STEPPERPATHS.map((step, index) => (
                <div className="navigate-item" key={index}>
                  <div className="navigatebox">
                    <>
                      <div className="info">
                        <div className="title">
                          {/* <h6>{`${index + 1}`}</h6> */}
                          <h6>{step.label}</h6>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
