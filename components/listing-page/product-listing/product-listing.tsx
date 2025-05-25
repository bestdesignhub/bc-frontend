'use client';
import React, { FC } from 'react';
import { Row } from 'react-bootstrap';
import { useView } from '@/hooks';
import ProductCard from './product-card';

type ProductListingProps = {
  list: any[];
  genderSlug: string;
  price?: any;
};

// const genderBasedConfig: Record<string, {
//   styleId: string;
//   gaugeId: string;
//   patternId: string;
// }> = {
//   '6798793f705aedfe39db13b1': {
//     styleId: '683115e829bba4f61c928489', // Men
//     gaugeId: '678e68649b451d2d5b771b26',
//     patternId: '682632f11df3ffe9dcf68a9b',
//   },
//   '67987972705aedfe39db13b8': {
//     styleId: '6831168629bba4f61c9284d1',
//     gaugeId: '678e68649b451d2d5b771b26',
//     patternId: '682553c4fbba7d5cd661eadf',
//   },
// };

const ProductListing: FC<ProductListingProps> = ({ list, genderSlug, price }) => {
  const { view } = useView();
  // const [priceData, setPriceData] = useState<any>();

  // Extract materialId from URL search params
  // const resolvedSearchParams = new URLSearchParams(window.location.search);
  // const materialId = resolvedSearchParams.get('material');

  // useEffect(() => {
  //   const fetchPrice = async () => {
  //     const genderConfig = genderBasedConfig[genderSlug];

  //     if (genderConfig && materialId) {
  //       const requestBody = {
  //         styleId: genderConfig.styleId,
  //         gaugeId: genderConfig.gaugeId,
  //         patternId: genderConfig.patternId,
  //         materialId,
  //         genderId: genderSlug,
  //         size: 'l',
  //       };

  //       try {
  //         const response = await userAxiosInstance.post(PRODUCT_PRICE_BY_SIZE_, requestBody);
  //         console.log('response', response.data?.data?.sizeL);
  //         setPriceData(response.data?.data?.sizeL);
  //       } catch (error) {
  //         console.error('Error fetching price list:', error);
  //       }
  //     }
  //   };

  //   fetchPrice();
  // }, [genderSlug, materialId]);

  return (
    <Row className={`product-container g-4 ${view}`}>
      {list.map((product) => (
        <ProductCard key={product?._id} product={product} genderSlug={genderSlug} price={price} />
      ))}
    </Row>
  );
};

export default ProductListing;
