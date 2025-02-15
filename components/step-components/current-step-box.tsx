'use client';

import { URL_SLUG, USER_ROUTES } from '@/constants';
import { getAWSImageUrl } from '@/utils/common.utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { FC } from 'react';

const CurrentStepBox: FC<{ currentStepData: any; stepNumber: any }> = ({
  currentStepData,
  stepNumber,
}) => {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();
  const handlePrevStepClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(URL_SLUG.PRODUCT);
    router.push(
      `${USER_ROUTES.sweater}/${stepNumber}?${params.toString()}&${URL_SLUG.CHANGE}=true`
    );
  };

  return (
    <div className="navigatebox" onClick={handlePrevStepClick}>
      <div className="image">
        <Image
          src={getAWSImageUrl(currentStepData?.stepCard?.realImage)}
          width={300}
          height={200}
          alt={currentStepData?.stepCard?.title}
          priority
        />
      </div>
      <div className="info">
        <div className="title">
          <h6>{currentStepData?.stepCard?.title}</h6>
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
      </div>
    </div>
  );
};

export default CurrentStepBox;
