import {
  CustomPagination,
  ProductListing,
  ProductTopbar,
  StepBanner,
  YarnListingSidebar,
} from '@/components';
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
  const [yarnListResult, genderResult] = await Promise.allSettled([
    getYarnCardList(resolvedSearchParams),
    getDropdownList(GENDER_DROPDOWN_URL),
  ]);
  const genders = genderResult.status === 'fulfilled' ? genderResult.value : [];
  const yarnList = yarnListResult.status === 'fulfilled' ? yarnListResult.value : {};

  return (
    <>
      <ViewProvider>
        <StepBanner step="1" stepData={{ label: t('COMMON.YARN_TEXT') }} />
        <div className="woman-product-wrapper">
          <Row className="g-4">
            <Col xs={12} lg={3}>
              <YarnListingSidebar step={1} />
            </Col>
            <Col xs={12} lg={9}>
              {/* <ProductTopbar text={t('COMMON.YARN_TEXT')} total={yarnList?.totalCount} /> */}
              <ProductListing list={yarnList.data} genders={genders} />
              {/* <CustomPagination
                currentPage={yarnList?.currentPage}
                totalPage={yarnList?.totalPage}
              /> */}
            </Col>
          </Row>
        </div>
      </ViewProvider>
    </>
  );
};

export default SweaterPage;
