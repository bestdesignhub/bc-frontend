import {
  CustomPagination,
  ProductListing,
  ProductTopbar,
  StepBanner,
  StepNavigate,
  YarnListingSidebar,
} from '@/components';
import GenderModalWrapper from '@/components/modals/gender-modal/gender-modal-wrapper';
import { URL_SLUG, USER_ROUTES } from '@/constants';
import { COLOUR_DROPDOWN_URL, GENDER_DROPDOWN_URL, MATERIAL_DROPDOWN_URL } from '@/constants/apis';
import { ViewProvider } from '@/context';
import { getDropdownList, getYarnCardList } from '@/utils/server-api.utils';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const SweaterPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const resolvedSearchParams = await searchParams;
  const t = await getTranslations();
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
  const genderSlug = resolvedSearchParams[URL_SLUG.GENDER];
  const materialId = resolvedSearchParams["material"];
  // Filter by genderId
  const filteredYarnList = materials
    ? yarnList?.data?.filter((item: any) => item.materialId === materialId)
    : yarnList?.data;


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
                  <StepNavigate genders={genders} genderSlug={genderSlug} />
                </Col>
                <Col xs={12} lg={10}>
                  <div className="sweater-bg-step">
                    <YarnListingSidebar
                      genders={genders}
                      colours={colours}
                      materials={materials}
                    />
                    {!genderSlug && <GenderModalWrapper genders={genders} material={materials[1]?.value} />}
                    <ProductTopbar
                      text={t('COMMON.YARN_TEXT')}
                      total={filteredYarnList?.length}
                    />
                    <ProductListing list={filteredYarnList} genderSlug={genderSlug} />
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
