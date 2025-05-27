import React from 'react';
// import { redirect } from 'next/navigation';
import { StepBanner, StepListing, StepNavigate } from '@/components';
import { FIXED_STEPS_COUNT, URL_SLUG } from '@/constants';
import { GENDER_DROPDOWN_URL, PRODUCT_PRICE_BY_SIZE_, PRODUCT_TYPE_DROPDOWN_URL } from '@/constants/apis';
import { getCurrentStepDetails, getDropdownList, getStepTypesList } from '@/utils/server-api.utils';
import { Row, Col } from 'react-bootstrap';
import userAxiosInstance from '@/config/userAxiosInstance';

const genderBasedConfig: Record<string, {
  styleId: string;
  gaugeId: string;
  patternId: string;
}> = {
  '6798793f705aedfe39db13b1': {
    styleId: '683115e829bba4f61c928489', // Men
    gaugeId: '678e68649b451d2d5b771b26',
    patternId: '682632f11df3ffe9dcf68a9b',
  },
  '67987972705aedfe39db13b8': {
    styleId: '6831168629bba4f61c9284d1',
    gaugeId: '678e68649b451d2d5b771b26',
    patternId: '682553c4fbba7d5cd661eadf',
  },
};

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

  let priceData: Record<string, any> = {};
  const [genderResult, steps, stepPageData] = await Promise.all([
    getDropdownList(GENDER_DROPDOWN_URL),
    getStepTypesList(productTypeId),
    getCurrentStepDetails({ steps: resolvedSearchParams, productTypeId, nextStepSlug: step }),
  ]);
  // if (!(steps.length + 1 >= step)) {
  //   redirect('/');
  // }
  console.log('resolvedSearchParams priceData', priceData);

  const stepData = steps[step - FIXED_STEPS_COUNT];


  const genders = genderResult;
  const genderSlug = resolvedSearchParams[URL_SLUG.GENDER];
  const patternSlug = resolvedSearchParams["pattern"];
  const materialSlug = resolvedSearchParams["material"];

  if (stepData?.slug === 'pattern' || stepData?.slug === 'style' || stepData?.slug === 'fitting') {
    const hasGenderField = stepPageData.list.some((item: any) => item.gender !== undefined);
    const matchingItems = hasGenderField ? stepPageData.list.filter((item: any) => item.gender === genderSlug) : stepPageData.list;
    stepPageData.list = matchingItems;
  }
  if (stepData?.slug === 'style') {
    const hasGenderField = stepPageData.list.some((item: any) => item?.pattern !== undefined);

    const matchingItems = hasGenderField ? stepPageData.list.filter((item: any) => item?.pattern === patternSlug) : stepPageData.list;
    stepPageData.list = matchingItems;

  }

  if (stepData?.slug === 'gauge') {
    if (materialSlug === '678077a88c6968b4bb6fc291') {
      const matchingItems = stepPageData?.list
        ? stepPageData.list.filter((item: any) => item?.slug !== '16gg')
        : stepPageData.list;

      stepPageData.list = matchingItems;
    }
  }

  const genderConfig = genderBasedConfig[genderSlug];
  const materialId = resolvedSearchParams["material"];

  if (genderConfig && materialId) {
    const requestBody = {
      styleId: genderConfig.styleId,
      gaugeId: genderConfig.gaugeId,
      patternId: genderConfig.patternId,
      materialId,
      genderId: genderSlug,
      size: 'l',
    };

    console.log('requestBody', requestBody);

    try {
      const response = await userAxiosInstance.post(PRODUCT_PRICE_BY_SIZE_, requestBody);
      console.log('response', response.data?.data);
      // setPriceData(response.data?.data?.SIZEL);
      priceData = response.data.data || {};
    } catch (error) {
      console.error('Error fetching price list:', error);
    }
  }

  console.log('priceData', priceData.sizeL);



  return (
    <>
      <StepBanner stepData={stepData} step={step} />
      <div className="stepBackground">
        <div className="container">
          <Row className="g-4">
            <Col xs={12} lg={3}>
              <StepNavigate
                steps={steps}
                stepPageData={stepPageData}
                edit={resolvedSearchParams?.[URL_SLUG.EDIT]}
                genders={genders}
                genderSlug={genderSlug}
                price={Number(priceData?.sizeL)}
              />
            </Col>
            <Col xs={12} lg={9}>
              <StepListing
                stepList={stepPageData.list}
                steps={steps}
                step={step}
                nextStepSlug={stepData?.slug}
                price={Number(priceData?.sizeL)}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default SweaterStep;
