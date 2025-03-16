'use client';

import CONFIG from '@/config';
import userAxiosInstance from '@/config/userAxiosInstance';
import { COOKIES, MESSAGES } from '@/constants';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { dispatch } from '@/lib/redux/store';
import { PaymentOption } from '@/types';
import { generateProductName } from '@/utils/common.utils';
import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';
import React, { useMemo } from 'react';
import toast from 'react-hot-toast';
import { loadStripe } from '@stripe/stripe-js';

const PaymentButton = ({
  cartData,
  totalPrice,
  address,
}: {
  totalPrice: any;
  cartData: any;
  address: any;
  paymentOption: PaymentOption;
}) => {
  const t = useTranslations();
  const cookiesUserData = Cookies.get(COOKIES.user);
  const userData = useMemo(() => {
    return cookiesUserData ? JSON.parse(cookiesUserData) : null;
  }, [cookiesUserData]);

  const handleSubmit = async () => {
    if (!address) {
      toast.error(t('COMMON.PLEASE_SELECT_ADDRESS'));
      return;
    }

    let placeOrder: any;
    try {
      dispatch(setLoading(true));
      placeOrder = await userAxiosInstance.post('/orders/create', {
        address,
        totalPrice,
      });
      if (placeOrder.data.success) {
        // console.log('placeOrder: ', placeOrder);
      } else {
        console.error(placeOrder?.data?.message);
        toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
        return;
      }
    } catch {
      toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
      return;
    } finally {
      dispatch(setLoading(false));
    }

    try {
      dispatch(setLoading(true));
      const session = await userAxiosInstance.post('/create-checkout-session', {
        address,
        amount: Math.round(totalPrice * 100),
        products: cartData?.map((cart: any) => generateProductName(cart)).join(', '),
        name: `${userData?.first_name} ${userData.last_name}`,
        email: userData?.email,
        orderId: placeOrder?.data?.data?._id,
      });
      if (session.data.success) {
        const stripe: any = await loadStripe(CONFIG?.stripePublicKey as string);
        const { error } = await stripe.redirectToCheckout({
          sessionId: session?.data?.data?.id,
        });

        if (error) {
          console.log('Stripe redirect to checkout failed:', error.message);
          toast.error(error.message ?? t(MESSAGES.SOMETHING_WENT_WRONG));
        }
      } else {
        console.error(session?.data?.message);
        toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div
      className="process-btn"
      style={{
        background: 'var(--bsp-black)',
        color: 'var(--bsp-white)',
        textTransform: 'uppercase',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        height: '64px',
        fontSize: '20px',
        padding: '0',
        cursor: 'pointer',
      }}
      onClick={handleSubmit}
    >
      {t('COMMON.PROCESS_TO_PAYMENT_TEXT')}
    </div>
  );
};

export default PaymentButton;
