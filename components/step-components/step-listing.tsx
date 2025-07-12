'use client';

import React, { FC, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import StepCard from './step-card';
import { useRouter, useSearchParams } from 'next/navigation';
import { URL_SLUG, USER_ROUTES } from '@/constants';
import { dispatch } from '@/lib/redux/store';
import { setIsPageSwitchLoading } from '@/lib/redux/slices/loaderSlice';

const StepListing: FC<{ stepList: any[]; steps: any[]; step: string; nextStepSlug: string, price: number }> = ({
  stepList = [],
  steps = [],
  step,
  nextStepSlug,
  price
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentParams, setCurrentParams] = useState<string>('');
  console.log(currentParams);

  useEffect(() => {
    setCurrentParams(searchParams.toString());
  }, [searchParams]);

  useEffect(() => {
    const styleSelected = searchParams.get('style');
    const isStyleStep = nextStepSlug === 'style';
    const stepNum = parseInt(step);

    if (isStyleStep && styleSelected && stepList.length === 0) {
      // Auto-jump to the next step (Gauge)
      router.push(`${USER_ROUTES.sweater}/${stepNum + 1}?${searchParams.toString()}`);
    }
  }, [searchParams, stepList, nextStepSlug, router, step]);



  const handleSelection = (id: any) => {
    dispatch(setIsPageSwitchLoading(true));
    const params = new URLSearchParams(searchParams?.toString() || '');
    // const params = new URLSearchParams(currentParams?.toString() || '');
    // console.log(params.get('style'), params.get('pattern'), "<<<<<=====");

    if (searchParams.has(URL_SLUG.CHANGE)) {
      params.delete(URL_SLUG.CHANGE);
      params.set(nextStepSlug, id);
      const queryString = params.toString();
      router.push(`${USER_ROUTES.sweater}/${USER_ROUTES.lastStep}?${queryString}`);
      return;
    }
    const parseStep = parseInt(step);
    // 👇 Skip step 4 if pattern is already selected
    // if () {
    //   router.push(`${USER_ROUTES.sweater}/5?${params.toString()}`);
    //   return;
    // }
    if (steps.length + 1 > parseStep && parseStep != 5) {
      params.set(nextStepSlug, id);
      router.push(`${USER_ROUTES.sweater}/${parseStep + 1}?${params.toString()}`);
    } else {
      params.set(nextStepSlug, id);
      router.push(`${USER_ROUTES.sweater}/${USER_ROUTES.lastStep}?${params.toString()}`);
    }
  };

  const nextSlugId = searchParams.get(nextStepSlug);


  return (
    <div className="gauge-wrapper">
      <div className="gauge-row">
        <Row>
          {/* {stepList.map((gauge, index: number) => (
            <StepCard
              key={index}
              onChange={handleSelection}
              stepData={gauge}
              nextSlugId={nextSlugId}
              price={price}
            />
          ))} */}
          {stepList.length === 0 ? (
            null //  don't render anything if empty
          ) : (
            stepList.map((gauge, index: number) => (
              <StepCard
                key={index}
                onChange={handleSelection}
                stepData={gauge}
                nextSlugId={nextSlugId}
                price={price}
              />
            ))
          )}

        </Row>
      </div>
    </div>
  );
};

export default StepListing;
