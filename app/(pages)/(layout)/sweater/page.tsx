import {
  BannerComponent,
  CustomPagination,
  ProductListing,
  ProductTopbar,
  StepBanner,
  StepNavigate,
  YarnListingSidebar,
} from '@/components';
import GenderModalWrapper from '@/components/modals/gender-modal/gender-modal-wrapper';
import { URL_SLUG } from '@/constants';
import { COLOUR_DROPDOWN_URL, GENDER_DROPDOWN_URL, MATERIAL_DROPDOWN_URL } from '@/constants/apis';
import { ViewProvider } from '@/context';
import { getDropdownList, getYarnCardList } from '@/utils/server-api.utils';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
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
  return (
    <>
      <ViewProvider>
        <div className="page-banner">
          <div className="image">
            {/* <Image
              src={"https://picsum.photos/200/300"}
              width={1920}
              height={650}
              alt={'banner'}
            /> */}
          </div>
          <div className="banner-caption">
            <div className="container">
              <div className="banner-content">
                <h1>Common Banner</h1>
                <p>Common Banner Paragraph</p>
              </div>
            </div>
          </div>
        </div>
        <StepBanner step="1" stepData={{ label: t('COMMON.YARN_TEXT') }} />
        <StepNavigate></StepNavigate>
        <div className="woman-product-wrapper">
          <Row className="g-4">
            <Col xs={12} lg={2}>
              <YarnListingSidebar genders={genders} colours={colours} materials={materials} />
            </Col>
            <Col xs={12} lg={10}>
              {!genderSlug && <GenderModalWrapper genders={genders} />}
              <ProductTopbar text={t('COMMON.YARN_TEXT')} total={yarnList?.totalCount} />
              <ProductListing list={yarnList.data} />
              <CustomPagination
                currentPage={yarnList?.currentPage}
                totalPage={yarnList?.totalPage}
              />
            </Col>
          </Row>
        </div>
      </ViewProvider>
    </>
  );
};

export default SweaterPage;
