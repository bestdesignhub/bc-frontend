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

const SaveAndGoToCart = ({ steps }: { steps: any[] }) => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const router = useRouter();
  const onSaveAndGoToCart = () => {
    const searchParamsValues = Object.fromEntries(searchParams.entries());
    const stepsData = steps?.map((step) => ({
      stepType: step._id,
      slug: step.slug,
      stepCard: searchParamsValues[step.slug],
    }));
    const payload = {
      yarn: searchParamsValues[URL_SLUG.YARN],
      steps: stepsData,
      fittingSizeId: searchParamsValues[URL_SLUG.FITTING_SIZE],
      _id: searchParamsValues[URL_SLUG.ADD_TO_CART],
    };
    dispatch(setLoading(true));
    userAxiosInstance
      .patch(UPDATE_TO_CART_URL, payload)
      .then((response) => {
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
      <button onClick={onSaveAndGoToCart}>
        <Link href="#">
          {t('COMMON.SAVE_AND_GO_TO_CART')}
          <span>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8893 15.2522C11.6633 15.2522 11.4372 15.1745 11.2588 15.008C10.9137 14.6861 10.9137 14.1534 11.2588 13.8315L17.8496 7.68269L11.2588 1.53386C10.9137 1.21199 10.9137 0.67924 11.2588 0.357369C11.6038 0.0354992 12.1748 0.0354992 12.5198 0.357369L19.7412 7.09445C20.0862 7.41632 20.0862 7.94907 19.7412 8.27094L12.5198 15.008C12.3414 15.1745 12.1153 15.2522 11.8893 15.2522Z"
                fill="white"
              ></path>
              <path
                d="M17.7745 8.63019H1.22544C0.555532 8.63019 0 8.20133 0 7.68417C0 7.16702 0.555532 6.73816 1.22544 6.73816H17.7745C18.4444 6.73816 19 7.16702 19 7.68417C19 8.20133 18.4444 8.63019 17.7745 8.63019Z"
                fill="white"
              ></path>
            </svg>
          </span>
        </Link>
      </button>
    </>
  );
};

export default SaveAndGoToCart;
