'use client';

import { Row, Col, InputGroup, Form } from 'react-bootstrap';
import { formatPrice } from '@/utils/common.utils';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import userAxiosInstance from '@/config/userAxiosInstance';
import {
  PRODUCT_PRICE_BY_SIZE,
  WISHLIST_CREATE_URL,
  WISHLIST_DELETE_BY_PRODUCT_ID_URL,
} from '@/constants/apis';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { DropDownOptionType } from '@/types';
// import Link from 'next/link';
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
import ProductImageGallery from './product-gallery';
// import Image from 'next/image';
import MeasurementsForm from '../measurements/measurementsForm';
import Link from 'next/link';
import MeasurementAddToCartButton from '../measurements/add-to-cart-button';
import { usePathname, useSearchParams } from 'next/navigation';

const allSizes = [
  { slug: 'xs', name: 'XS' },
  { slug: 's', name: 'S' },
  { slug: 'm', name: 'M' },
  { slug: 'l', name: 'L' },
  { slug: 'xl', name: 'XL' },
  { slug: '2xl', name: '2XL' },
  { slug: '3xl', name: '3XL' },
  { slug: '4xl', name: '4XL' },
  { slug: '5xl', name: '5XL' }
];

const measurementsData = [
  { label: "Body Length - HSP", value: 65, tolerance: 5 },
  { label: "Hem Width", value: 36, tolerance: 3 },
  { label: "Chest Width", value: 46, tolerance: 2 },
  { label: "Armhole Straight", value: 22, tolerance: 2 },
  { label: "Shoulder Width", value: 37, tolerance: 2 },
  { label: "Sleeve Length - HSP", value: 64, tolerance: 2 },
  { label: "Neck Width", value: 15.5, tolerance: 2 },
  { label: "Sleeve Width", value: 17, tolerance: 2 },
];
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
  const [size, setSize] = useState(availableSizes?.at(7)?.slug || '');
  const [slug, setSizeSlug] = useState(availableSizes?.at(7)?.slug || '');
  const [selectedSize, setSelectedSize] = useState('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const queryString = useMemo(() => new URLSearchParams(searchParams).toString(), [searchParams]);
  // const queryString = new URLSearchParams(await searchParams).toString();
  const gender = searchParams.get('gender');
  type Measurement = { label: string; value: number; tolerance: number };
  type MeasurementDataItem = { size: string; measurements: Measurement[] };

  const [measurementData, setMeasurementData] = useState<Measurement[]>(measurementsData);
  const [allMeasurementData, setAllMeasurementData] = useState<MeasurementDataItem[]>([]);


  const [isWishlisted, setIsWishlisted] = useState(!!details?.isWishlisted);
  console.log('details', details.stepDetails);
  console.log(slug);
  console.log('details', details);
  console.log('details', availableSizes);
  console.log(size);
  console.log(slug);
  console.log(genders);
  console.log(pathname);
  const styleStep = details?.stepDetails?.find((step: any) => step.slug === 'style');
  const [comment, setComment] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  }


  // const handleChangeSize = (event: ChangeEvent<HTMLInputElement>) => {
  //   setSizeSlug(event.target.id);
  //   dispatch(setLoading(true));
  //   setSize("");
  //   userAxiosInstance
  //     .post(PRODUCT_PRICE_BY_SIZE, {
  //       _id: details._id,
  //       size: event.target.id,
  //     })
  //     .then((response) => {
  //       setPrice(response.data.data.price);
  //       setSize(event.target.id);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       dispatch(setLoading(false));
  //     });
  // };
  const fetchPriceBySize = (sizeId: string) => {
    dispatch(setLoading(true));
    setSize('');
    setSizeSlug(sizeId);

    userAxiosInstance
      .post(PRODUCT_PRICE_BY_SIZE, {
        _id: details._id,
        size: sizeId,
      })
      .then((response) => {
        setPrice(response.data.data.price);
        setSize(sizeId);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  const handleChangeSize = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    console.log("event.target.id===>>>>", event.target.id);
    console.log("event.target.id===>>>>", allMeasurementData);
    console.log(allMeasurementData.find((e: any) => e.size == event.target.id.toLocaleUpperCase())?.measurements || []);

    setMeasurementData(allMeasurementData.find((e: any) => e.size == event.target.id.toLocaleUpperCase())?.measurements || [])
    // const [allMeasurementData, setAllMeasurementData] = useState(measurementsData);
    fetchPriceBySize(event.target.id);

  };

  // Auto-call on page load if you have an initial size slug
  useEffect(() => {
    if (slug) {
      fetchPriceBySize(slug);
    }
  }, [slug]);

  useEffect(() => {
    const fetchMeasurementData = async () => {
      try {
        if (gender && styleStep) {
          const genderId = gender;
          const style = styleStep?.stepCard;

          const response = await userAxiosInstance({
            url: "measurement-data/get",
            method: "POST",
            data: { genderId, style },
          });

          const fetchedData = response?.data?.data?.measurementData || null;
          console.log("Fetched Measurement Data:", fetchedData);
          setAllMeasurementData(JSON.parse(fetchedData));
          setMeasurementData(JSON.parse(fetchedData).find((e: any) => e.size == 'L').measurements)

          // setMeasurementData(JSON.parse(fetchedData));
          // isFetched.current = true;
        }
      } catch (error) {
        console.error("Failed to fetch measurement data:", error);
        toast.error("Failed to load measurement data.");
      }
    };

    fetchMeasurementData();
  }, [gender, styleStep?.stepCard]);

  console.log("setMeasurementData===>>>", measurementData);

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

  useEffect(() => {
    if (details?.gender) {
      const defaultSize = details.gender === 'men' ? 'l' : 'm'; // use lowercase if your slugs are lowercase
      setSelectedSize(defaultSize);
      setSizeSlug(defaultSize)
    }
  }, [details?.gender]);

  // Get fitting type from stepCards
  const fittingStep = details?.steps?.find((step: any) => step.key === 'fitting');
  const fittingCard = details?.stepCards?.find((card: any) => card._id === fittingStep?.value);
  const fittingSlug = fittingCard?.slug; // e.g., 'regular-fitting' or 'slim-fitting'

  // Decide size list
  // let availableSizes = [];
  if (fittingSlug === 'regular-fitting') {
    availableSizes = allSizes.filter(size => ['m', 'l', 'xl', '2xl', '3xl', '4xl', '5xl'].includes(size.slug));
  } else if (fittingSlug === 'slim-fitting') {
    availableSizes = allSizes.filter(size => ['xs', 's', 'm', 'l', 'xl'].includes(size.slug));
  }

  // useEffect(() => {
  //   const updatePriceAndSize = async () => {
  //     try {
  //       dispatch(setLoading(true));
  //       const response = await userAxiosInstance.patch("/product-template/updatePriceAndSize", {
  //         productId: details?._id,
  //         updatedPrice: price,
  //         updatedSize: size
  //       });
  //       if (response.data.success) {
  //         // setIsWishlisted(false);
  //         // dispatch(setUserSettingDecreaseWishlistCount());
  //       } else {
  //         console.error(response?.data?.message);
  //         toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
  //     } finally {
  //       dispatch(setLoading(false));
  //     }
  //   };
  //   updatePriceAndSize();
  // }, []);


  return (
    <>
      <div className="product-detail-wrapper">
        <div className="container">
          <Row>
            <Col xs={12} lg={6} xl={4}>
              <ProductImageGallery details={details} />
            </Col>
            <Col xs={12} lg={6} xl={8}>
              <Row>
                <Col xs={12} lg={6} xl={8}>
                  <div className="detail-content">
                    <div className="d-flex product-title-name" style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
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
                    </div>
                    {/* <div className="info">
                      {details?.contents?.map((content: any, index: number) => {
                        return (
                          <Fragment key={index}>
                            <h6>{content?.title}</h6>
                            <p>{content?.description}</p>
                          </Fragment>
                        );
                      })}
                    </div> */}
                    <div className='statics-sweater'>
                      <Row>
                        <Col xs={12} lg={6} xl={6}>
                          <p className='w-full fullpcontent'><span>Gender:</span> <strong>{details?.gender?.toUpperCase()}</strong></p>
                        </Col>
                        <Col xs={12} lg={6} xl={6}>
                          <p className='w-full fullpcontent'><span>Yarn:</span> <strong>{details?.yarnData?.title}</strong></p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} lg={6} xl={6}>
                          <p className='w-full fullpcontent'><span>Colour:</span> <strong>{details?.yarnData?.colour}</strong></p>
                        </Col>
                        <Col xs={12} lg={6} xl={6}>
                          <p className='w-full fullpcontent'><span>Cable:</span> <strong>{
                            details?.steps?.find((step: { key: string; }) => step.key === 'pattern') &&
                            details?.stepCards?.find((card: any) => card._id === details.steps.find((step: any) => step.key === 'pattern')?.value)?.title
                          }</strong></p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} lg={6} xl={6}>
                          <p className='w-full fullpcontent'><span>Gauge:</span> <strong>{
                            details?.steps?.find((step: any) => step.key === 'gauge') &&
                            details?.stepCards?.find((card: any) => card._id === details.steps.find((step: any) => step.key === 'gauge')?.value)?.title
                          }</strong></p>
                        </Col>
                        <Col xs={12} lg={6} xl={6}>
                          <p className='w-full fullpcontent'><span>Fitting:</span> <strong>{
                            details?.steps?.find((step: any) => step.key === 'fitting') &&
                            details?.stepCards?.find((card: any) => card._id === details.steps.find((step: any) => step.key === 'fitting')?.value)?.title
                          }</strong></p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} lg={6} xl={6}>
                          <p className='w-full fullpcontent'><span>Seasonality:</span> <strong>{details?.yarnData?.seasonality}</strong></p>
                        </Col>
                        <Col xs={12} lg={6} xl={6} />
                      </Row>
                    </div>
                    <div className="pr-size d-flex flex-wrap">
                      <MeasurementsForm measurements={measurementData} />
                    </div>
                    <div className='addcomment'>
                      <p>Any special instructions or request for us?</p>
                      <textarea
                        value={comment}
                        onChange={handleChange}
                        placeholder="Enter Special Details"
                      />
                    </div>
                  </div>
                </Col>
                <Col xs={12} lg={6} xl={4}>
                  <div className='w-full fullpcontent price-section'>
                    <strong className='price-color'>{formatPrice(price)}</strong>
                    <div className="size-item">
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
                    <div className='price-section-bottom' style={{ marginBottom: '10px' }}>
                      {/* <AddToCartButton genders={genders} queryString={urlQueryString} productId={details._id} price={price.toString()} size={size} /> */}
                      {(token) ? (
                        <MeasurementAddToCartButton
                          steps={details?.stepDetails}
                          productId={details._id}
                          fittingId={details?.stepCards?.find((card: any) => card._id === details.steps.find((step: any) => step.key === 'fitting')?.value)?._id}
                          productTypeId={details?.productTypeId}
                          defaultFittingSize={selectedSize}
                          queryParams={urlQueryString}
                          gender={searchParams.get('gender')}
                          price={price}
                          size={size}
                          createdBy='shop'
                          instructions={comment}
                        />
                      ) : (
                        <><span>{t('COMMON.ALREADY_A_CUSTOMER')}?</span>
                          <div className="login-link-sub">
                            <Link className='addto-cart-laststep'
                              href={`${USER_ROUTES.signin}?${queryString}&${URL_SLUG.REDIRECT}=${pathname}`}
                            >
                              {t('COMMON.LOG_IN')}
                            </Link> <span>/</span> &nbsp;
                            <Link
                              href={`${USER_ROUTES.signup}?${queryString}&${URL_SLUG.REDIRECT}=${pathname}`}
                            >
                              {t('COMMON.REGISTER')}
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
