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
  const name = useMemo(() => generateProductName(cart), [cart]);
  const urlQueryString = useMemo(() => {
    const params = new URLSearchParams();
    params.append(URL_SLUG.YARN, cart?.yarn?._id);
    cart?.steps?.forEach(({ stepTypeSlug, stepCardId }: any) =>
      params.append(stepTypeSlug, stepCardId)
    );
    params.append(URL_SLUG.GENDER, cart?.gender);
    params.append(URL_SLUG.FITTING_SIZE, cart?.fittingSizeid);
    params.append(URL_SLUG.ADD_TO_CART, cart?._id);
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
        <div className="cart-box-head">
          <h5>{name}</h5>
          <div className="cart-box-right">
            <div className="size">
              <span>size</span>L
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
            {/* <div className="i-icon">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <rect
                    x="1.6198"
                    y="1.98986"
                    width="28.7607"
                    height="28.7607"
                    rx="14.3804"
                    stroke="#377DD7"
                    strokeWidth="2.61461"
                  />
                  <path
                    d="M18.9944 13.0144L14.2029 13.6746L14.0306 14.5505L14.9744 14.74C15.5877 14.9008 15.7101 15.144 15.5746 15.8173L14.0306 23.7957C13.6265 25.8587 14.2517 26.8287 15.722 26.8287C16.8619 26.8287 18.1849 26.2495 18.7852 25.4534L18.9694 24.4964C18.5534 24.9017 17.94 25.0638 17.5359 25.0638C16.9594 25.0638 16.7514 24.6193 16.8988 23.8363L18.9944 13.0144ZM19.1394 8.21266C19.1394 8.51481 19.0853 8.81401 18.9801 9.09316C18.875 9.37231 18.7209 9.62596 18.5266 9.83961C18.3324 10.0533 18.1018 10.2227 17.8479 10.3384C17.5941 10.454 17.3221 10.5135 17.0474 10.5135C16.7726 10.5135 16.5006 10.454 16.2468 10.3384C15.993 10.2227 15.7624 10.0533 15.5681 9.83961C15.3738 9.62596 15.2197 9.37231 15.1146 9.09316C15.0095 8.81401 14.9554 8.51481 14.9554 8.21266C14.9554 7.60244 15.1758 7.0172 15.5681 6.58571C15.9604 6.15422 16.4925 5.9118 17.0474 5.9118C17.6022 5.9118 18.1343 6.15422 18.5266 6.58571C18.919 7.0172 19.1394 7.60244 19.1394 8.21266Z"
                    fill="#377DD7"
                  />
                </svg>
              </Link>
            </div> */}
            <div className="price">
              {/* <span className="old-price">$60.00</span> */}
              <span className="new-price">{formatPrice(cart.amount)}</span>
            </div>
          </div>
        </div>
        <div className="cart-box-middle">
          <div className="cart-img-big">
            <Image src={getAWSImageUrl(cart?.yarn?.image)} alt="image" width={327} height={328} />
          </div>
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
    </>
  );
}
