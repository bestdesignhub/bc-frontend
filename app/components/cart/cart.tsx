'use client';

import '@/app/styles/cart.css';

import Link from 'next/link';

import Cartbox from './cart-box';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import userAxiosInstance from '@/config/userAxiosInstance';
import { ADD_TO_CART_LIST_URL } from '@/constants/apis';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import OrderData from './order-data';
import { USER_ROUTES } from '@/constants';
import EmptyCartMessage from './empty-cart-message';

export default function CartContent({ initialCartData }: { initialCartData: any[] }) {
  const t = useTranslations();
  const [cartData, setCartData] = useState(initialCartData);
  useEffect(() => {
    setCartData(initialCartData);
  }, [initialCartData]);
  const fetchCartData = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const response = await userAxiosInstance.get(ADD_TO_CART_LIST_URL);
      if (response?.data?.success) {
        setCartData(response.data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  }, []);

  return (
    <>
      <div className="cart-page">
        <div className="container">
          <div className="page-title">
            <h1>{t('COMMON.SHOPPING_CART')}</h1>
          </div>
          {!!cartData.length ? (
            <div className="cart-block">
              <div className="cart-left">
                {cartData?.map((cart: any) => {
                  return <Cartbox fetchCartData={fetchCartData} cart={cart} key={cart?._id} />;
                })}
              </div>
              <div className="cart-right">
                <h6>{t('COMMON.ORDER_TOTAL')}</h6>
                <div className="cart-right-table">
                  <OrderData cartData={cartData} />
                  <div className="checkout-btn">
                    <Link href={USER_ROUTES.checkout}>{t('COMMON.PROCEED_TO_CHECKOUT')}</Link>
                  </div>
                  <div className="note-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis viverra
                      dui. Sed porta risus ligula.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <EmptyCartMessage
              buttonText={t('COMMON.SHOP_NOW')}
              message={t('COMMON.YOUR_CART_IS_EMPTY')}
            />
          )}
        </div>
      </div>
    </>
  );
}
