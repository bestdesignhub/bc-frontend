import { ViewLayoutType } from '@/types';
import { formatPrice, getAWSImageUrl } from '@/utils/common.utils';
import Image from 'next/image';
import Link from 'next/link';
import { Col } from 'react-bootstrap';

interface IProductCardProps {
  productData: any;
  view: ViewLayoutType;
  productDetailsURl: string;
}

const ProductCard = ({ productData, view, productDetailsURl }: IProductCardProps) => {
  return (
    <Col
      key={productData?._id}
      xs={12}
      md={view === 'grid' ? 3 : 4}
      lg={view === 'grid' ? 3 : 4}
      xl={view === 'grid' ? 3 : 4}
    >
      <div className="womanproductbox">
        <Link href={`${productDetailsURl}/${productData?._id}`}>
          <div className="image">
            <Image
              src={getAWSImageUrl(productData?.image)}
              width={328}
              height={350}
              alt={'offer'}
              loading="lazy"
            />
          </div>
          <div className="info">
            <h6>{productData?.title}</h6>
            <div className="pr-price">
              <ins>{formatPrice(productData?.price)}</ins>
            </div>
          </div>
        </Link>
      </div>
    </Col>
  );
};

export default ProductCard;
