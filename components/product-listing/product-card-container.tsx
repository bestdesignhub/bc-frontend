import { FC, Fragment } from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from './product-card';
import { useView } from '@/hooks';

const ProductCardContainer: FC<{ productList: any[]; productDetailsURl: string }> = ({
  productList,
  productDetailsURl,
}) => {
  const { view } = useView();
  return (
    <Row className={`product-container g-4 ${view}`}>
      {productList.map((woman) => (
        <Fragment key={woman?._id}>
          <ProductCard productData={woman} view={view} productDetailsURl={productDetailsURl} />
        </Fragment>
      ))}
    </Row>
  );
};

export default ProductCardContainer;
