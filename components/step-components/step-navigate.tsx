'use client';

import { FIXED_STEPS_COUNT, STEPPERPATHS, URL_SLUG, USER_ROUTES } from '@/constants';
import { formatPrice, getAWSImageUrl } from '@/utils/common.utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
// import toast from "react-hot-toast";

export default function StepNavigate({
  steps,
  stepPageData,
  edit,
  genders,
  genderSlug,
  styleData,
  price
}: {
  steps?: any[];
  stepPageData?: any;
  edit?: string;
  genders?: any[];
  genderSlug?: any;
  styleData?: any;
  price: number;
}) {

  // console.log(genderSlug, stepPageData, '....genderSlug StepNavigate')
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();
  const style = searchParams.get('style');
  console.log("===========>", style, price);
  // const pathname = usePathname();
  // const currentStep = Number(pathname.split('/').pop()); // e.g. 3
  const isChange = searchParams.get('change') === 'true';
  // const isLastStep = steps && currentStep === steps.length + FIXED_STEPS_COUNT;


  const keys: string[] = [];
  const selectedStyle = styleData?.find((item: any) => item._id === style);
  if (selectedStyle) {
    console.log("selectedStyle===", selectedStyle, stepPageData);
    if (selectedStyle && stepPageData?.style) {
      delete stepPageData.style;
    }
  }
  useEffect(() => {
    for (const [key] of searchParams.entries()) {
      keys.push(key);
    }
    if (activeIndex === null && steps?.length) {
      steps.forEach((step, index) => {
        if (searchParams.has(step.slug)) {
          setActiveIndex(index);
        }
      });
    }

    console.log('All keys:', keys); // ['yarn', 'gender', 'material', 'gauge', 'pattern', 'style']
  }, [steps, searchParams, activeIndex]);
  const stepLabels = ['Gauge', 'Pattern', 'Styles', 'Measurement'];

  // Usage

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
      console.log("activeIndex : ", activeIndex);

      router.push(`${USER_ROUTES.sweater}/${stepNumber}?${params.toString()}`);
    },
    [steps, searchParams, router]
  );

  const handleYarnCardClick = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    if (params.has(URL_SLUG.CHANGE)) {
      params.delete(URL_SLUG.EDIT);
      router.push(
        `${USER_ROUTES.sweater}?${params.toString()}${edit ? `&${URL_SLUG.EDIT}=${edit}` : ''}`
      );
      return;
    }
    router.push(`${USER_ROUTES.sweater}?${params.toString()}${edit ? `?${URL_SLUG.EDIT}=${edit}` : ''}`);
  }, [searchParams, edit, router]);

  const handleStyleCardClick = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());

    //  Remove 'style' from the URL
    params.delete('style');

    if (params.has(URL_SLUG.CHANGE)) {
      params.delete(URL_SLUG.EDIT);
      router.push(
        `${USER_ROUTES.sweater}?${params.toString()}${edit ? `&${URL_SLUG.EDIT}=${edit}` : ''}`
      );
      return;
    }

    router.push(
      `${USER_ROUTES.sweater}?${params.toString()}${edit ? `&${URL_SLUG.EDIT}=${edit}` : ''}`
    );
  }, [searchParams, edit, router]);

  return (
    <div className="gauge-navigate smallbx">
      <div className="d-flex flex-column gap-3" style={{ paddingTop: '20px' }}>
        {searchParams.size !== 0 && genderSlug && genders && genders.length && (
          <div className="navigate-item">
            <div className="navigatebox">
              <div className="info">
                <div className="title">
                  <h6>Gender</h6>
                  <p>
                    <strong>
                      {genders.find((g) => g.value === genderSlug)?.label || 'Unknown'}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedStyle && (
          <div
            className="navigate-item"
            style={{ cursor: 'pointer' }}
            onClick={() => handleStyleCardClick()} // Step index for style
          >
            <div className="navigatebox">
              <div className="image">
                <Image
                  src={getAWSImageUrl(selectedStyle.realImage || selectedStyle.graphImage)}
                  width={300}
                  height={200}
                  alt="style"
                  loading="lazy"
                />
              </div>
              <div className="info">
                <div className="title">
                  <h6>Style</h6>
                  <p>
                    <strong>{selectedStyle.title}</strong>
                  </p>
                </div>
                <div className="price">
                  <strong>{formatPrice(price)}</strong>
                </div>
              </div>
            </div>
          </div>
        )}

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
                  {activeIndex && <div className="price">
                    {/* <strong>{formatPrice(stepPageData.yarn.price)}</strong>  === null */}
                    <strong>{formatPrice(price)}</strong>
                  </div>}
                  {isChange && stepLabels[0] && <div className="price">
                    {/* <strong>{formatPrice(stepPageData.yarn.price)}</strong> */}
                    <strong>{formatPrice(price)}</strong>
                  </div>}
                </div>
              </div>
            )}
          </div>
        )}
        {searchParams.size !== 0 &&
          steps?.map((step: any, index: number) => {
            console.log(step.slug, steps);
            // console.log(searchParams.get(step.slug));
            const keys1 = ['yarn', 'gender', 'material', 'gauge', 'pattern', 'style'];
            const existingKeys = keys1.filter((key) => searchParams.has(key));
            console.log(existingKeys, "existingKeys", price);

            // Show price if this step's slug exists in searchParams
            // const shouldShowPrice = searchParams.has(step.slug);




            if (index + 2 === 6) return null; // Skip rendering if index + 2 equals 6
            if (index + 2 === 4) return null; // Skip rendering if index + 2 equals 4
            const isDataExists = stepPageData.hasOwnProperty(step.slug);

            console.log("stepLabels", stepLabels[index]);

            return (
              <div
                className="navigate-item"
                key={index}
                style={isDataExists ? { cursor: 'pointer' } : {}}
                // onClick={() =>
                //   isDataExists && handlePrevStepClick(step.slug, `${index + FIXED_STEPS_COUNT}`)
                // }

                onClick={() => {
                  if (isDataExists) {
                    setActiveIndex(index); //  set the clicked step as active
                    handlePrevStepClick(step.slug, `${index + FIXED_STEPS_COUNT}`);
                  }
                }}

              >
                <div className="navigatebox">
                  {isDataExists && searchParams.size !== 0 ? (
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
                          <h6>{stepLabels[index] || index + 2}</h6>
                          <button>
                            <Link href="#">
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
                          {/* <strong>{formatPrice(stepPageData?.yarn?.price)}</strong>  */}
                          <strong>{formatPrice(price)}</strong>
                        </div>
                        {/* {(
                          (isChange && index === currentStep - FIXED_STEPS_COUNT - 1)) && (
                            <div className="price">
                              <strong>{formatPrice(price)}</strong>
                            </div>
                          )}
                        {!isChange && (activeIndex === index) && (
                          <div className="price">
                            <strong>{formatPrice(price)}</strong>
                          </div>
                        )} */}
                      </div>
                    </>
                  ) : (
                    <div className="only-title">{stepLabels[index] || index + 2}</div>
                  )}
                </div>
              </div>
            );
          })}
        {/* {genderSlug && genders && genders.length > 0 && (
          <div className="navigate-item">
            <div className="navigatebox">
              <div className="info">
                <div className="title">
                  <h6>Gender</h6>
                  <p>
                    <strong>
                      {genders.find((g) => g.value === genderSlug)?.label || 'Unknown'}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )} */}
        {!steps &&
          STEPPERPATHS.map((step, index) => {
            const words = step.label.trim().split(" ");
            const lastWord = words.pop();
            const firstPart = words.join(" ");
            if (step.step === '1' && selectedStyle) return null;
            return (<div className={`navigate-item ${activeIndex === index ? 'active-step' : ''}`} key={index}>
              <div className="navigatebox">
                <div className="info">
                  <div className="title">
                    <h6> {firstPart} <b>{lastWord}</b></h6>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
      </div>
    </div >
  );
}
