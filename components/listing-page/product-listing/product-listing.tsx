'use client';

import React, { FC } from 'react';
import { Row } from 'react-bootstrap';
import { useView } from '@/hooks';
import ProductCard from './product-card';

const ProductListing: FC<{ list: any[] }> = ({ list }) => {
  const { view } = useView();

  return (
    <Row className={`product-container g-4 ${view}`}>
      {list.map((woman) => (
        <ProductCard key={woman?._id} product={woman} />
      ))}
    </Row>
  );
};

export default ProductListing;
