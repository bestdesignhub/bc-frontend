import React from 'react';
import { redirect } from 'next/navigation';
import { StepBanner, StepListing, StepNavigate } from '@/components';
import { FIXED_STEPS_COUNT, URL_SLUG } from '@/constants';
import { PRODUCT_TYPE_DROPDOWN_URL } from '@/constants/apis';
import { getCurrentStepDetails, getDropdownList, getStepTypesList } from '@/utils/server-api.utils';
import { Row, Col } from 'react-bootstrap';

const SweaterStep = async ({
  params,
  searchParams,
}: {
  params: Promise<{ [key: string]: any }>;
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const productTypeData = await getDropdownList(PRODUCT_TYPE_DROPDOWN_URL);
  const productTypeId = productTypeData?.[0]?.value;
  const step = resolvedParams.step;
  const [steps, stepPageData] = await Promise.all([
    getStepTypesList(productTypeId),
    getCurrentStepDetails({ steps: resolvedSearchParams, productTypeId, nextStepSlug: step }),
  ]);
  if (!(steps.length + 1 >= step)) {
    redirect('/');
  }
  const stepData = steps[step - FIXED_STEPS_COUNT];
  return (
    <>
      <StepBanner stepData={stepData} step={step} />
      <div className='container'>
      <Row className="g-4">
        <Col xs={12} lg={3}>
          <StepNavigate
            steps={steps}
            stepPageData={stepPageData}
            edit={resolvedSearchParams?.[URL_SLUG.EDIT]}
          />
        </Col>
        <Col xs={12} lg={9}>
          <StepListing
            stepList={stepPageData.list}
            steps={steps}
            step={step}
            nextStepSlug={stepData?.slug}
          />
        </Col>
      </Row>
      </div>
    </>
  );
};

export default SweaterStep;
