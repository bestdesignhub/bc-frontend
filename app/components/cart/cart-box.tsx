'use client';

import '@/app/styles/cart.css';
import Image from 'next/image';
import Link from 'next/link';

import { formatPrice, generateProductName, getAWSImageUrl } from '@/utils/common.utils';
import { ChangeEvent, useMemo } from 'react';
import { FIXED_STEPS_COUNT, MESSAGES, URL_SLUG, USER_ROUTES } from '@/constants';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { DELETE_CART_URL, UPDATE_QUANTITY_TO_CART_URL } from '@/constants/apis';
import userAxiosInstance from '@/config/userAxiosInstance';
import toast from 'react-hot-toast';
import { setUserSettingDecreaseCartCount } from '@/lib/redux/slices/userSettingSlice';
import { useTranslations } from 'next-intl';

export default function Cartbox({ cart, fetchCartData }: { cart: any; fetchCartData: () => void }) {
  const t = useTranslations();
  console.log('cart', cart);

  const name = useMemo(() => generateProductName(cart), [cart]);
  const urlQueryString = useMemo(() => {
    const params = new URLSearchParams();
    params.append(URL_SLUG.YARN, cart?.yarn?._id);
    params.append(URL_SLUG.GENDER, cart?.gender);
    cart?.steps?.forEach(({ stepTypeSlug, stepCardId }: any) =>
      params.append(stepTypeSlug, stepCardId)
    );
    //params.append(URL_SLUG.GENDER, cart?.gender);
    params.append(URL_SLUG.FITTING_SIZE, cart?.steps[3]?.stepCardId);
    params.append(URL_SLUG.ADD_TO_CART, cart?._id);
    params.append(URL_SLUG.PRODUCT, cart?.product?._id);
    return `${params.toString()}`;
  }, [cart]);

  const handleDelete = async () => {
    try {
      dispatch(setLoading(true));

      const response = await userAxiosInstance.delete(`${DELETE_CART_URL}/${cart?._id}`);

      if (response.data.success) {
        dispatch(setUserSettingDecreaseCartCount());
        await fetchCartData();
      }
    } catch (error) {
      console.error(error);
      toast.error(MESSAGES.SOMETHING_WENT_WRONG);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleQuantity = async (event: ChangeEvent<HTMLSelectElement>) => {
    try {
      dispatch(setLoading(true));

      const response = await userAxiosInstance.patch(UPDATE_QUANTITY_TO_CART_URL, {
        _id: cart._id,
        quantity: event.target.value,
      });

      if (response.data.success) {
        await fetchCartData();
      }
    } catch (error) {
      console.error(error);
      toast.error(MESSAGES.SOMETHING_WENT_WRONG);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <div className="cart-box">
        <div className="cart-img-big">
          <Image
            loading="lazy"
            src={getAWSImageUrl(cart?.product?.images[0])}
            alt="image"
            width={200}
            height={280}
          />
          {/* <Image
            loading="lazy"
            src={getAWSImageUrl(cart?.product?.images[0])}
            alt="image"
            width={350} // fixed width
            style={{ height: 'auto' }} // auto height
          /> */}

        </div>

        <div className='right-box'>

          <div className="cart-box-head">
            <h5>{name}</h5>
            <div className="cart-box-right">
              <div className="size">
                <span>size</span>{cart?.size.toUpperCase()}
              </div>
              <div className="qty">
                <span>{t('COMMON.QUANTITY_TEXT')}</span>
                <select className="form-select" value={cart?.quantity} onChange={handleQuantity}>
                  {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="price">
                <span className="new-price">{formatPrice(cart.amount)}</span>
              </div>
            </div>
          </div>
          <div className="cart-box-middle">
            <div className="cart-box-sub">
              {cart?.steps?.map((step: any, index: number) => {
                return (
                  <div className="car-box-inner" key={index}>
                    <div className="img">
                      <Image
                        src={getAWSImageUrl(step?.stepCardRealImage)}
                        alt="image"
                        width={85}
                        height={61}
                        loading="lazy"
                      />
                    </div>
                    <div className="box-sub">
                      <h6>{step?.stepCardTitle}</h6>
                      <div className="changes-link">
                        <Link
                          href={`${USER_ROUTES.sweater}/${index + FIXED_STEPS_COUNT}?${urlQueryString}&${URL_SLUG.CHANGE}=true`}
                        >
                          <span>{t('COMMON.CHANGE')} </span>
                          <i>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="16"
                              viewBox="0 0 9 16"
                              fill="none"
                            >
                              <path
                                d="M1.35938 15.0277L7.8959 8.49119L1.35937 1.95466"
                                stroke="#868686"
                                strokeWidth="1.96096"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="view-all-link">
                <Link href={`${USER_ROUTES.sweater}${USER_ROUTES.lastStep}?${urlQueryString}`}>
                  {t('COMMON.VIEW_ALL_DETAILS')}
                </Link>
              </div>
            </div>
          </div>
          <div className="cart-edit-links">
            <Link href={`${USER_ROUTES.sweater}${USER_ROUTES.lastStep}?${urlQueryString}`}>
              {t('COMMON.EDIT')}
            </Link>
            <Link href="#" onClick={handleDelete}>
              {t('COMMON.DELETE')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
