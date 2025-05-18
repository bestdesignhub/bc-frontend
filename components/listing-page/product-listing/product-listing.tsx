'use client';

import React, { FC } from 'react';
import { Row } from 'react-bootstrap';
import { useView } from '@/hooks';
import ProductCard from './product-card';

type ProductListingProps = {
  list: any[];
  genderSlug: string;
};

const ProductListing: FC<ProductListingProps> = ({ list, genderSlug }) => {
  const { view } = useView();

  return (
    <Row className={`product-container g-4 ${view}`}>

      {list.map((product) => (
        <ProductCard key={product?._id} product={product} genderSlug={genderSlug} />
      ))}
    </Row>
  );
};

export default ProductListing;
