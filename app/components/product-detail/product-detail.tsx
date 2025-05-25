'use client';

import { Row, Col, InputGroup, Form } from 'react-bootstrap';
import { formatPrice } from '@/utils/common.utils';
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
import { COOKIES, MESSAGES, URL_SLUG } from '@/constants';
import { useTranslations } from 'next-intl';
import { FilledHeartIcon } from '@/components/svg-icons/filled-heart-icon';
import { EmptyHeartIcon } from '@/components/svg-icons/empty-heart-icon';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import {
  setUserSettingDecreaseWishlistCount,
  setUserSettingIncreaseWishlistCount,
} from '@/lib/redux/slices/userSettingSlice';
import ProductImageGallery from './product-gallery';
// import Image from 'next/image';
import MeasurementsForm from '../measurements/measurementsForm';

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
  const [size, setSize] = useState(availableSizes?.at(0)?.slug);
  const [slug, setSizeSlug] = useState(availableSizes?.at(0)?.slug);
  const [isWishlisted, setIsWishlisted] = useState(!!details?.isWishlisted);
  console.log('details', details);

  const handleChangeSize = (event: ChangeEvent<HTMLInputElement>) => {
    setSizeSlug(event.target.id);
    dispatch(setLoading(true));
    setSize("");
    userAxiosInstance
      .post(PRODUCT_PRICE_BY_SIZE, {
        _id: details._id,
        size: event.target.id,
      })
      .then((response) => {
        setPrice(response.data.data.price);
        setSize(event.target.id);
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
    // params.append(URL_SLUG.FITTING_SIZE, slug);
    return `${params.toString()}`;
  }, [details]);

  // console.log('urlQueryString....', urlQueryString);

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

  const measurementsData = [
    { label: "BODY LENGTH - HSP", value: 65, tolerance: 5 },
    { label: "HEM WIDTH", value: 36, tolerance: 3 },
    { label: "CHEST WIDTH", value: 46, tolerance: 2 },
    { label: "ARMHOLE STRAIGHT", value: 22, tolerance: 2 },
    { label: "SHOULDER WIDTH", value: 37, tolerance: 2 },
    { label: "SLEEVE LENGTH - HSP", value: 64, tolerance: 2 },
    { label: "NECK WIDTH", value: 15.5, tolerance: 2 },
    { label: "SLEEVE WIDTH", value: 17, tolerance: 2 },
  ];

  return (
    <>
      <div className="product-detail-wrapper">
        <div className="container">
          <Row>
            <Col xs={12} lg={6} xl={7}>
              <ProductImageGallery details={details} />
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
                  { }
                </div>

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
                  <br />
                  <br />
                  <br />
                  <br />
                  {/* <Image
                    src={'/images/sizes.jpg'}
                    alt={'size'}
                    width={417}
                    height={272}
                    loading="lazy"
                  /> */}
                  <MeasurementsForm measurements={measurementsData} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <AddToCartButton genders={genders} queryString={urlQueryString} productId={details._id} price={price.toString()} size={size} />
                </div>
                {/* <Link href={`${USER_ROUTES.sweater}${USER_ROUTES.lastStep}?${urlQueryString}`}>
                  <button className="cartbtn">{t('COMMON.CUSTOMISE_A_SWEATER')}</button>
                </Link> */}
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
