'use client';

import { ViewProvider } from '@/context';
import { DropDownOptionType } from '@/types';
import { useTranslations } from 'next-intl';
import { Col, Row } from 'react-bootstrap';
import { CustomPagination } from '../common';
import { ProductTopbar } from '../listing-page';
import ProductListFilters from './filters';
import ProductCardContainer from './product-card-container';

export default function ProductList({
  colours,
  genders,
  materials,
  patterns,
  productList,
  filtersOptions,
  productDetailsURl,
}: {
  colours: DropDownOptionType[];
  genders?: DropDownOptionType[];
  materials: DropDownOptionType[];
  patterns: DropDownOptionType[];
  productList: any;
  filtersOptions: {
    key: string;
    label: string;
    field: string;
  }[];
  productDetailsURl: string;
}) {
  const t = useTranslations();
  return (
    <ViewProvider>
      <div className="woman-product-wrapper">
        <div className='container'>
        <Row className="g-4">
          <Col xs={12} lg={2}>
            <ProductListFilters
              colours={colours}
              genders={genders}
              materials={materials}
              patterns={patterns}
              priceRange={{
                maxPrice: productList?.maxPrice ?? 0,
                minPrice: productList?.minPrice ?? 0,
              }}
              filtersOptions={filtersOptions}
            />
          </Col>
          <Col xs={12} lg={10}>
              <div className='listing-rightside'>
            <ProductTopbar text={t('COMMON.PRODUCT_TEXT')} total={productList?.totalCount} />
            <ProductCardContainer
              productList={productList?.data ?? []}
              productDetailsURl={productDetailsURl}
            />
            <CustomPagination
              currentPage={productList?.currentPage ?? 0}
              totalPage={productList?.totalPage ?? 0}
            />
                          </div>
          </Col>
        </Row>
        </div>
      </div>
    </ViewProvider>
  );
}
