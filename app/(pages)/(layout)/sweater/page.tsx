import {
  CustomPagination,
  ProductListing,
  ProductTopbar,
  StepBanner,
  StepNavigate,
  YarnListingSidebar,
} from '@/components';
import GenderModalWrapper from '@/components/modals/gender-modal/gender-modal-wrapper';
// import userAxiosInstance from '@/config/userAxiosInstance';
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
  const materialId = resolvedSearchParams["material"];
  let priceData: Record<string, any> = {};
  const genderConfig = genderBasedConfig[genderSlug];
  console.log(genderConfig, genderSlug);

  let requestBody: any = {};
  if (genderConfig) {
    requestBody = {
      styleId: genderConfig.styleId,
      gaugeId: genderConfig.gaugeId,
      patternId: genderConfig.patternId,
      materialId,
      genderId: genderSlug,
      size: 'l',
    };

    priceData = await fetchPriceList(requestBody);
    console.log(priceData, "priceData");
  }

  const rawPrice = priceData && Object.keys(priceData).length > 0 ? Number(priceData.sizeL || 0) : 0;
  const formattedPrice = rawPrice.toLocaleString('en-US', { minimumIntegerDigits: 5, useGrouping: false });



  // console.log("requestBody", requestBody);


  const [genderResult, coloursResult, materialResult, yarnListResult] = await Promise.allSettled([
    getDropdownList(GENDER_DROPDOWN_URL),
    getDropdownList(COLOUR_DROPDOWN_URL),
    getDropdownList(MATERIAL_DROPDOWN_URL),
    getYarnCardList(resolvedSearchParams),

  ]);

  const colours = coloursResult.status === 'fulfilled' ? coloursResult.value : [];
  const genders = genderResult.status === 'fulfilled' ? genderResult.value : [];
  const materials = materialResult.status === 'fulfilled' ? materialResult.value : [];
  const yarnList = yarnListResult.status === 'fulfilled' ? yarnListResult.value : {};
  // const priceList = await getPriceListByIds(requestBody?.styleId, requestBody?.gaugeId, requestBody?.patternId, requestBody?.materialId, requestBody?.genderId)
  // const priceListData = priceList.success === 'true' ? priceList.data : [];
  // console.log("priceListData", priceList);

  // Filter by genderId
  const filteredYarnList = materials
    ? yarnList?.data?.filter((item: any) => item.materialId === materialId)
    : yarnList?.data;



  // useEffect(() => {
  //   const fetchPrice = async () => {


  // if (genderConfig && materialId) {
  //   const requestBody = {
  //     styleId: genderConfig.styleId,
  //     gaugeId: genderConfig.gaugeId,
  //     patternId: genderConfig.patternId,
  //     materialId,
  //     genderId: genderSlug,
  //     size: 'l',
  //   };

  //   try {
  //     const response = await userAxiosInstance.post(PRODUCT_PRICE_BY_SIZE_, requestBody);
  //     console.log('response', response.data?.data?.SIZEL);
  //     // setPriceData(response.data?.data?.SIZEL);
  //     priceData = response.data.data || {};
  //   } catch (error) {
  //     console.error('Error fetching price list:', error);
  //   }
  // }

  // console.log('priceData', priceData.sizeL);


  //   fetchPrice();
  // }, [genderSlug, materialId]);



  return (
    // <div tabIndex={0}>
    <ViewProvider>
      <div className="sweater-inner-step">
        <StepBanner step="1" stepData={{ label: t('COMMON.YARN_TEXT') }} />
        <div className="container">
          <div className="sweater-inner-container">
            <div className="woman-product-wrappe bgsweater">
              <Row className="g-4 no-horizontal-padding">
                <Col xs={12} lg={2}>
                  <StepNavigate genders={genders} genderSlug={genderSlug} price={Number(formattedPrice)} />
                </Col>
                <Col xs={12} lg={10}>
                  <div className="sweater-bg-step">
                    <YarnListingSidebar
                      genders={genders}
                      colours={colours}
                      materials={materials}
                      price={Number(formattedPrice)}
                    />
                    {!genderSlug && <GenderModalWrapper genders={genders} material={materials[1]?.value} />}
                    <ProductTopbar
                      text={t('COMMON.YARN_TEXT')}
                      total={filteredYarnList?.length}
                    />
                    <ProductListing list={filteredYarnList} genderSlug={genderSlug} price={Number(formattedPrice)} />
                    <CustomPagination
                      currentPage={filteredYarnList?.currentPage}
                      totalPage={filteredYarnList?.totalPage}
                    />
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
