'use client';

import { Row, Col, InputGroup, Form } from 'react-bootstrap';
import Image from 'next/image';
import { formatPrice, getAWSImageUrl } from '@/utils/common.utils';
import { ChangeEvent, Fragment, useCallback, useMemo, useState } from 'react';
import userAxiosInstance from '@/config/userAxiosInstance';
import {
  PRODUCT_PRICE_BY_SIZE,
  WISHLIST_CREATE_URL,
  WISHLIST_DELETE_BY_PRODUCT_ID_URL,
} from '@/constants/apis';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { AddToCartButton } from '@/components';
import { DropDownOptionType } from '@/types';
import Link from 'next/link';
import { COOKIES, MESSAGES, URL_SLUG, USER_ROUTES } from '@/constants';
import { useTranslations } from 'next-intl';
import { FilledHeartIcon } from '@/components/svg-icons/filled-heart-icon';
import { EmptyHeartIcon } from '@/components/svg-icons/empty-heart-icon';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import {
  setUserSettingDecreaseWishlistCount,
  setUserSettingIncreaseWishlistCount,
} from '@/lib/redux/slices/userSettingSlice';

export default function ProdutDetail({
  details,
  availableSizes = [],
  genders,
}: {
  details: any;
  availableSizes: any[];
  genders: DropDownOptionType[];
}) {
  const token = Cookies.get(COOKIES.userToken);
  const t = useTranslations();
  const [price, setPrice] = useState(details?.basePriceXs ?? 0);
  const [slug, setSizeSlug] = useState(availableSizes?.at(0)?.slug);
  const [isWishlisted, setIsWishlisted] = useState(!!details?.isWishlisted);
  const handleChangeSize = (event: ChangeEvent<HTMLInputElement>) => {
    setSizeSlug(event.target.id);
    dispatch(setLoading(true));
    userAxiosInstance
      .post(PRODUCT_PRICE_BY_SIZE, {
        _id: details._id,
        size: event.target.id,
      })
      .then((response) => {
        setPrice(response.data.data.price);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  const urlQueryString = useMemo(() => {
    const params = new URLSearchParams();
    params.append(URL_SLUG.YARN, details.yarn);
    params.append(URL_SLUG.PRODUCT, details._id);
    details?.steps?.forEach(({ key, value }: any) => params.append(key, value));
    return `${params.toString()}`;
  }, [details]);

  const handleEmptyHeart = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const response = await userAxiosInstance.post(WISHLIST_CREATE_URL, {
        productId: details._id,
      });
      if (response.data.success) {
        setIsWishlisted(true);
        dispatch(setUserSettingIncreaseWishlistCount());
      } else {
        console.error(response?.data?.message);
        toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
      }
    } catch (error) {
      console.error(error);
      toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
    } finally {
      dispatch(setLoading(false));
    }
  }, [details._id, t]);

  const handleFilledHeart = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const response = await userAxiosInstance.post(WISHLIST_DELETE_BY_PRODUCT_ID_URL, {
        productId: details?._id,
      });
      if (response.data.success) {
        setIsWishlisted(false);
        dispatch(setUserSettingDecreaseWishlistCount());
      } else {
        console.error(response?.data?.message);
        toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
      }
    } catch (error) {
      console.error(error);
      toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
    } finally {
      dispatch(setLoading(false));
    }
  }, [details._id, t]);

  return (
    <>
      <div className="product-detail-wrapper">
        <div className="container">
          <Row>
            <Col xs={12} lg={6} xl={7}>
              <div className="product-image-row d-flex flex-wrap">
                {details?.images?.map((image: string) => {
                  return (
                    <div className="image-item" key={image}>
                      <div className="image">
                        <Image src={getAWSImageUrl(image)} width={370} height={520} alt="product" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
            <Col xs={12} lg={6} xl={4}>
              <div className="detail-content">
                <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                  <h1>{details?.title}</h1>
                  {token && (
                    <div style={{ cursor: 'pointer' }}>
                      {isWishlisted ? (
                        <FilledHeartIcon onClick={handleFilledHeart} />
                      ) : (
                        <EmptyHeartIcon onClick={handleEmptyHeart} />
                      )}
                    </div>
                  )}
                  {}
                </div>
                {/* <div className="pr-rating">
                  <ul>
                    <li className="active">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </li>
                    <li className="active">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </li>
                    <li className="active">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </li>
                    <li className="active">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </li>
                  </ul>
                  <p>4.8 Reviews</p>
                </div> */}
                <div className="pr-price">
                  <ins>{formatPrice(price)}</ins>
                  {/* <del>$60.00</del> */}
                </div>
                <div className="pr-size d-flex flex-wrap">
                  <div className="size-item">
                    <h6>{t('COMMON.SIZE_TEXT')}:</h6>
                    <InputGroup className="size-radiobuttons d-flex flex-wrap gap-2">
                      {availableSizes?.map((size) => (
                        <Form.Check
                          inline
                          key={size.slug}
                          label={size.name}
                          name="size"
                          type="radio"
                          id={size.slug}
                          checked={slug === size.slug}
                          onChange={handleChangeSize}
                        />
                      ))}
                    </InputGroup>
                  </div>
                  {/* <div className="size-item">
                    <SizeChart />
                  </div> */}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <AddToCartButton genders={genders} queryString={urlQueryString} />
                </div>
                <Link href={`${USER_ROUTES.sweater}${USER_ROUTES.lastStep}?${urlQueryString}`}>
                  <button className="cartbtn">{t('COMMON.CUSTOMISE_A_SWEATER')}</button>
                </Link>
                <div className="info">
                  {details?.contents?.map((content: any, index: number) => {
                    return (
                      <Fragment key={index}>
                        <h6>{content?.title}</h6>
                        <p>{content?.description}</p>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
