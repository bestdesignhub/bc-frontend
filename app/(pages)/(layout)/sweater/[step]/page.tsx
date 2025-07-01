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
    styleId: '6835601871b93cf4de274515', // Men
    gaugeId: '678e68649b451d2d5b771b26',
    patternId: '682632f11df3ffe9dcf68a9b',
  },
  '67987972705aedfe39db13b8': {
    styleId: '683560f971b93cf4de274543',
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
  const genderId = resolvedSearchParams[URL_SLUG.GENDER];
  const materialId = resolvedSearchParams["material"];
  const gaugeId = resolvedSearchParams['gauge'];
  const patternId = resolvedSearchParams['pattern'];
  const styleId = resolvedSearchParams['style'];
  const genderSlug = resolvedSearchParams[URL_SLUG.GENDER];
  const patternSlug = resolvedSearchParams["pattern"];
  const materialSlug = resolvedSearchParams["material"];
  let priceData: Record<string, any> = {};
  let formattedPrice = '00000';
  const genderConfig = genderBasedConfig[genderSlug];
  const effectiveStyleId = styleId || genderConfig?.styleId;
  const effectiveGaugeId = gaugeId || genderConfig?.gaugeId;
  const effectivePatternId = patternId || genderConfig?.patternId;

  // let priceData: Record<string, any> = {};
  const [genderResult, steps, stepPageData] = await Promise.all([
    getDropdownList(GENDER_DROPDOWN_URL),
    getStepTypesList(productTypeId),
    getCurrentStepDetails({ steps: resolvedSearchParams, productTypeId, nextStepSlug: step }),
  ]);
  // if (!(steps.length + 1 >= step)) {
  //   redirect('/');
  // }
  // console.log('resolvedSearchParams priceData', priceData);

  const stepData = steps[step - FIXED_STEPS_COUNT];


  const genders = genderResult;


  if (stepData?.slug === 'pattern' || stepData?.slug === 'style' || stepData?.slug === 'fitting') {
    // const hasGenderField = stepPageData.list.some((item: any) => item.gender !== undefined);
    // const matchingItems = hasGenderField ? stepPageData.list.filter((item: any) => item.gender === genderSlug) : stepPageData.list;
    // stepPageData.list = matchingItems;
    const hasGenderField = Array.isArray(stepPageData?.list) &&
      stepPageData.list.some((item: any) => item.gender !== undefined);

    const matchingItems = hasGenderField
      ? stepPageData.list.filter((item: any) => item.gender === genderSlug)
      : stepPageData.list || [];

    stepPageData.list = matchingItems;
  }
  if (stepData?.slug === 'style') {
    // const hasGenderField = stepPageData.list.some((item: any) => item?.pattern !== undefined);
    const hasGenderField = Array.isArray(stepPageData?.list) &&
      stepPageData.list.some((item: any) => item?.pattern !== undefined);


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
    if (materialSlug === '67f64f49e061fcfe4d00b21d') {
      const matchingItems = stepPageData?.list
        ? stepPageData.list.filter((item: any) => item?.slug === '16gg')
        : stepPageData.list;

      stepPageData.list = matchingItems;
    }
  }

  // const genderConfig = genderBasedConfig[genderSlug];
  // const materialId = resolvedSearchParams["material"];

  if (genderId && materialId && effectiveStyleId && effectiveGaugeId && effectivePatternId) {
    const requestBody = {
      styleId: effectiveStyleId,
      gaugeId: effectiveGaugeId,
      patternId: effectivePatternId,
      materialId,
      genderId: genderId,
      size: 'fl',
    };

    // console.log('requestBody', requestBody);

    try {
      const response = await userAxiosInstance.post(PRODUCT_PRICE_BY_SIZE_, requestBody);
      // console.log('response', response.data?.data);
      // setPriceData(response.data?.data?.SIZEL);
      priceData = response.data.data || {};
      const rawPrice = priceData?.sizeFL ? Number(priceData.sizeFL) : 0;
      formattedPrice = rawPrice.toLocaleString('en-US', { minimumIntegerDigits: 5, useGrouping: false });
      console.log("formattedPrice", formattedPrice);
    } catch (error) {
      console.error('Error fetching price list:', error);
    }
  }

  // console.log('priceData', priceData.sizeL);



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
                price={Number(formattedPrice)}
              />
            </Col>
            <Col xs={12} lg={9}>
              <StepListing
                stepList={stepPageData.list}
                steps={steps}
                step={step}
                nextStepSlug={stepData?.slug}
                price={Number(formattedPrice)}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default SweaterStep;
