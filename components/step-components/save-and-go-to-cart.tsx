'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import userAxiosInstance from '@/config/userAxiosInstance';
import { UPDATE_TO_CART_URL } from '@/constants/apis';
import { MESSAGES, URL_SLUG, USER_ROUTES } from '@/constants';
import toast from 'react-hot-toast';

const SaveAndGoToCart = ({ steps, productId, fittingId, productTypeId, price, size }: { steps: any[], productId: string, fittingId: string, productTypeId?: string, price?: any, size?: any }) => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const router = useRouter();
  const onSaveAndGoToCart = () => {
    const searchParamsValues = Object.fromEntries(searchParams.entries());
    const filteredSteps = steps.filter((step) => step.slug !== 'price_module');

    const stepsData = filteredSteps?.map((step) => ({
      stepType: step.value,
      slug: step.slug,
      stepCard: searchParamsValues[step.slug],
    }));

    // const payload = {
    //   yarn: searchParamsValues[URL_SLUG.YARN],
    //   steps: stepsData,
    //   fittingSizeId: searchParamsValues[URL_SLUG.FITTING_SIZE],
    //   _id: searchParamsValues[URL_SLUG.ADD_TO_CART],
    // };
    const measurementData = sessionStorage.getItem('measurements');
    const payload = {
      _id: searchParamsValues['cart'],
      yarn: searchParamsValues.yarn,
      steps: stepsData,
      productId: productId,
      fittingId: fittingId,
      genderId: searchParamsValues.gender ?? searchParamsValues['gender'],
      fittingSizeId: searchParamsValues[URL_SLUG.FITTING],
      productTypeId,
      quantity: 1,
      measurements: measurementData,
      price: price,
      size: size
    };
    // console.log("Payload-=========", payload);

    dispatch(setLoading(true));
    userAxiosInstance
      .patch(UPDATE_TO_CART_URL, payload)
      .then((response) => {
        console.log("response", response);

        if (response.data.success) {
          router.push(USER_ROUTES.cart);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(MESSAGES.SOMETHING_WENT_WRONG);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
  return (
    <>
      <button className='saveandcartbtn' onClick={onSaveAndGoToCart}>
        <Link href="#">
          {t('COMMON.SAVE_AND_GO_TO_CART')}
        </Link>
      </button>
    </>
  );
};

export default SaveAndGoToCart;
