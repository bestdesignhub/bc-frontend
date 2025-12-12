import {
  // CustomPagination,
  ProductListing,
  ProductTopbar,
  StepBanner,
  StepNavigate,
  YarnListingSidebar,
} from '@/components';
import GenderModalWrapper from '@/components/modals/gender-modal/gender-modal-wrapper';
import StyleSelector from '@/components/step-components/StyleSelector';
import userAxiosInstance from '@/config/userAxiosInstance';
import { URL_SLUG } from '@/constants';
import { COLOUR_DROPDOWN_URL, GENDER_DROPDOWN_URL, MATERIAL_DROPDOWN_URL } from '@/constants/apis';
import { ViewProvider } from '@/context';
import { fetchPriceList, getDropdownList, getYarnCardList } from '@/utils/server-api.utils';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

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
    styleId: '683560f971b93cf4de274543', // Women
    gaugeId: '678e68649b451d2d5b771b26',
    patternId: '682553c4fbba7d5cd661eadf',
  },
};



const SweaterPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const resolvedSearchParams = await searchParams;
  const t = await getTranslations();
  const genderSlug = resolvedSearchParams[URL_SLUG.GENDER];
  const genderId = resolvedSearchParams[URL_SLUG.GENDER];
  const materialId = resolvedSearchParams["material"];
  const gaugeId = resolvedSearchParams['gauge'];
  const patternId = resolvedSearchParams['pattern'];
  const styleId = resolvedSearchParams['style'];
  const colourId = resolvedSearchParams['colour'];
  let priceData: Record<string, any> = {};
  let formattedPrice = '00000';
  const genderConfig = genderBasedConfig[genderSlug];
  const effectiveStyleId = styleId || genderConfig?.styleId;
  const effectiveGaugeId = gaugeId || genderConfig?.gaugeId;
  const effectivePatternId = patternId || genderConfig?.patternId;
  let requestBody: any = {};
  if (genderId && materialId && effectiveStyleId && effectiveGaugeId && effectivePatternId) {
    requestBody = {
      styleId: effectiveStyleId,
      gaugeId: effectiveGaugeId,
      patternId: effectivePatternId,
      materialId,
      genderId: genderId,
      size: 'fl',
    };

    try {
      priceData = await fetchPriceList(requestBody);
      const rawPrice = priceData?.sizeFL ? Number(priceData.sizeFL) : 0;
      formattedPrice = rawPrice.toLocaleString('en-US', { minimumIntegerDigits: 5, useGrouping: false });

    } catch (err) {
      console.error('Error fetching price:', err);
    }
  }

  const [genderResult, coloursResult, materialResult, yarnListResult] = await Promise.allSettled([
    getDropdownList(GENDER_DROPDOWN_URL),
    getDropdownList(COLOUR_DROPDOWN_URL),
    getDropdownList(MATERIAL_DROPDOWN_URL),
    getYarnCardList(resolvedSearchParams)

  ]);
  const payload: any = {
    page: 1,
    perPage: 1000,
    sortBy: 'createdAt',
    sortOrder: 'desc',
    search: "",
  };
  const stepList = await userAxiosInstance.post('/step-card/user/list/67599682e94c6e1a0e46e63e', payload, {
    timeout: 10000,
  })
  const allSteps = stepList?.data?.data?.data || [];
  const genderStyles = allSteps.filter((item: any) => item.gender._id === genderId);
  const colours = coloursResult.status === 'fulfilled' ? coloursResult.value : [];
  const genders = genderResult.status === 'fulfilled' ? genderResult.value : [];
  const materials = materialResult.status === 'fulfilled' ? materialResult.value : [];
  const yarnList = yarnListResult.status === 'fulfilled' ? yarnListResult.value : {};
  const filteredYarnList = yarnList?.data?.filter((item: any) => {
    const matchMaterial = materialId ? item.materialId === materialId : true;
    const matchColour = colourId ? item.colourId === colourId : true;
    return matchMaterial && matchColour;
  });

  return (
    <ViewProvider>
      <div className="sweater-inner-step">
        <StepBanner step="1" stepData={{ label: t('COMMON.YARN_TEXT') }} />
        <div className="container">
          <div className="sweater-inner-container">
            <div className="woman-product-wrappe bgsweater">
              <Row className="g-4 no-horizontal-padding">
                <Col xs={12} lg={3}>
                  <StepNavigate genders={genders} genderSlug={genderSlug} styleData={genderStyles} price={Number(formattedPrice)} />
                </Col>
                <Col xs={12} lg={9}>
                  {!styleId && (
                    <div className="gauge-wrapper">
                      <div className="gauge-row">
                        <StyleSelector styles={genderStyles} price={Number(formattedPrice)} />
                      </div>
                    </div>
                  )}

                  <div className="sweater-bg-step">
                    {styleId && (
                      <YarnListingSidebar
                        genders={genders}
                        colours={colours}
                        materials={materials}
                        price={Number(formattedPrice)}
                      />)}
                    {!genderSlug && <GenderModalWrapper genders={genders} material={materials[1]?.value} />}
                    {styleId && <ProductTopbar
                      text={t('COMMON.YARN_TEXT')}
                      total={filteredYarnList?.length}
                    />}
                    {styleId && <ProductListing list={filteredYarnList} genderSlug={genderSlug} price={Number(formattedPrice)} />}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </ViewProvider>
    // </div>
  );
};

export default SweaterPage;
