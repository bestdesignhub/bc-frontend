"use client";
import { ViewLayoutType } from '@/types';
import { formatPrice, getAWSImageUrl } from '@/utils/common.utils';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Col } from 'react-bootstrap';

interface IProductCardProps {
  productData: any;
  view: ViewLayoutType;
  productDetailsURl: string;
}

const ProductCard = ({ productData, view, productDetailsURl }: IProductCardProps) => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const genderId = searchParams.get('gender');
  // console.log('genderId===>>>>', genderId);
  // return (
  //   <Col
  //     key={productData?._id}
  //     xs={12}
  //     md={view === 'grid' ? 3 : 4}
  //     lg={view === 'grid' ? 3 : 4}
  //     xl={view === 'grid' ? 3 : 4}
  //   >
  //     <div className="womanproductbox">
  //       <Link href={`${productDetailsURl}/${productData?._id}`}>
  //         <div className="image">
  //           <Image
  //             src={getAWSImageUrl(productData?.image)}
  //             width={328}
  //             height={350}
  //             alt={'offer'}
  //             loading="lazy"
  //           />
  //         </div>
  //         <div className="info">
  //           <h6>{productData?.title}</h6>
  //           <div className="pr-price">
  //             Our Best price <strong>{formatPrice(productData?.price)}</strong>
  //           </div>
  //           <Link className='w-view-details-btn' href={`${productDetailsURl}/${productData?._id}`}>
  //             View Details
  //           </Link>
  //         </div>
  //       </Link>
  //     </div>
  //   </Col>
  // );
  return (
    <Col
      key={productData?._id}
      xs={12}
      md={view === 'grid' ? 3 : 4}
      lg={view === 'grid' ? 3 : 4}
      xl={view === 'grid' ? 3 : 4}
    >
      <div className="womanproductbox">
        <Link href={`${productDetailsURl}/${productData?._id}`} className="image">
          <Image
            src={getAWSImageUrl(productData?.image)}
            width={328}
            height={350}
            alt={'offer'}
            loading="lazy"
          />
        </Link>

        <div className="info">
          <h6>{productData?.title}</h6>
          <div className="pr-price">
            Our Best price <strong>{formatPrice(productData?.price)}</strong>
          </div>
          <button
            className="w-view-details-btn"
            onClick={() => router.push(`${productDetailsURl}/${productData?._id}?gender=${genderId}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </Col>
  );

};

export default ProductCard;
