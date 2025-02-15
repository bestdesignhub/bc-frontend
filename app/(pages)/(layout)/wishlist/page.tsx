import { CustomPagination } from '@/components';
import { USER_ROUTES } from '@/constants';
import { formatPrice, getAWSImageUrl } from '@/utils/common.utils';
import { getWishlistData } from '@/utils/server-api.utils';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '@/app/styles/cart.css';
import EmptyCartMessage from '@/app/components/cart/empty-cart-message';

export default async function WishlistPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const t = await getTranslations();
  const resolvedSearchParams = await searchParams;
  const wishListData = await getWishlistData({ resolvedSearchParams });
  return (
    <div className="cart-page">
      <div className="container">
        <div className="page-title" style={{ paddingBottom: '30px' }}>
          <h1>{t('COMMON.WISHLIST_TEXT')}</h1>
        </div>
        {!!wishListData?.data?.length ? (
          <div className="woman-product-wrapper" style={{ paddingTop: '30px' }}>
            <Row className={`product-container g-4 grid`}>
              {wishListData?.data?.map((wishlist: any) => (
                <Col xs={12} md={3} lg={3} xl={3} key={wishlist._id}>
                  <Link href={`${USER_ROUTES.shop}/${wishlist?.product?._id}`}>
                    <div className={'womanproductbox'}>
                      <div className="image">
                        <Image
                          src={getAWSImageUrl(wishlist.product.firstImage)}
                          width={328}
                          height={350}
                          alt={'offer'}
                        />
                      </div>
                      <div className="info">
                        <h6>{wishlist.product.title}</h6>
                        <div className="pr-price">
                          <ins>{formatPrice(wishlist.product?.basePriceXs)}</ins>
                        </div>
                      </div>
                      {/* <button
                style={{
                  background: 'var(--bsp-black)',
                  width: '100%',
                  padding: '10px 0',
                }}
              >
                {t('COMMON.SELECT')}
              </button> */}
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
            <CustomPagination
              currentPage={wishListData?.currentPage}
              totalPage={wishListData?.totalPage}
            />
          </div>
        ) : (
          <EmptyCartMessage
            message={t('COMMON.YOUR_WISHLIST_IS_EMPTY')}
            buttonText={t('COMMON.BROWSE_PRODUCTS')}
          />
        )}
      </div>
    </div>
  );
}
