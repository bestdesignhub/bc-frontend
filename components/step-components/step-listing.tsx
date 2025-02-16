'use client';

import React, { FC, useState } from 'react';
import { Row } from 'react-bootstrap';
import StepCard from './step-card';
import { useRouter, useSearchParams } from 'next/navigation';
import { URL_SLUG, USER_ROUTES } from '@/constants';
import { dispatch, RootState } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { useSelector } from 'react-redux';

const StepListing: FC<{ stepList: any[]; steps: any[]; step: string; nextStepSlug: string }> = ({
  stepList = [],
  steps = [],
  step,
  nextStepSlug,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isLoading } = useSelector((state: RootState) => state.loader);

  const handleSelection = (id: any) => {
    dispatch(setLoading(true));
    const params = new URLSearchParams(searchParams?.toString() || '');
    if (searchParams.has(URL_SLUG.CHANGE)) {
      params.delete(URL_SLUG.CHANGE);
      params.set(nextStepSlug, id);
      const queryString = params.toString();
      router.push(`${USER_ROUTES.sweater}/${USER_ROUTES.lastStep}?${queryString}`);
      return;
    }
    const parseStep = parseInt(step);
    if (steps.length + 1 > parseStep) {
      params.set(nextStepSlug, id);
      dispatch(setLoading(false));
      router.push(`${USER_ROUTES.sweater}/${parseStep + 1}?${params.toString()}`);
    } else if (steps.length + 1 === parseStep) {
      params.set(nextStepSlug, id);
      dispatch(setLoading(false));
      router.push(`${USER_ROUTES.sweater}/${USER_ROUTES.lastStep}?${params.toString()}`);
    }
  };

  const nextSlugId = searchParams.get(nextStepSlug);
  return (
    <div className="gauge-wrapper">
      <div className="gauge-row">
        {isLoading ? (
          <>sdasd</>
        ) : (
          <Row>
            {stepList.map((gauge, index: number) => (
              <StepCard
                key={index}
                onChange={handleSelection}
                stepData={gauge}
                nextSlugId={nextSlugId}
              />
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default StepListing;
