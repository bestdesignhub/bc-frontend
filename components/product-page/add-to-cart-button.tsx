'use client';

import { useTranslations } from 'next-intl';
import React, { FC, useState } from 'react';
import GenderModal from '../modals/gender-modal/gender-modal';
import { DropDownOptionType } from '@/types';
// import { dispatch } from '@/lib/redux/store';
// import userAxiosInstance from '@/config/userAxiosInstance';
import { URL_SLUG, USER_ROUTES } from '@/constants';
// import { PRODUCT_UPDATE_PRICE_BY_SIZE } from '@/constants/apis';
// import { setLoading } from '@/lib/redux/slices/loaderSlice';
// import { setUserSettingDecreaseWishlistCount } from '@/lib/redux/slices/userSettingSlice';
// import toast from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation';

const AddToCartButton: FC<{ genders: DropDownOptionType[]; queryString: string; productId: string; price: number, size: string }> = ({
  genders,
  queryString,
  productId,
  price,
  size
}) => {
  const t = useTranslations();
  const [showModal, setShowModal] = useState(false);
  const searchParams = useSearchParams();
  const genderId = searchParams.get('gender');
  const router = useRouter();
  // console.log('genderId===>>>> searchParams', genderId);
  console.log(productId);
  console.log(price);
  console.log(size);

  // const handleModalOpen = async () => {
  //   // const params = new URLSearchParams();
  //   // const searchParams = new URLSearchParams(queryString);
  //   // console.log(params.get('gender'), 'searchParams');



  //   try {
  //     dispatch(setLoading(true));
  //     const response = await userAxiosInstance.put(PRODUCT_UPDATE_PRICE_BY_SIZE, {
  //       _id: productId,
  //       updatedPrice: price,
  //       updatedSize: size,
  //     });
  //     if (response.data.success) {
  //       // setIsWishlisted(false);
  //       // dispatch(setUserSettingDecreaseWishlistCount());
  //     } else {
  //       console.error(response?.data?.message);
  //       toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
  //   } finally {
  //     dispatch(setLoading(false));
  //   }

  //   setShowModal(true);
  // };
  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAddToCard = async () => {
    // const params = new URLSearchParams();
    // const searchParams = new URLSearchParams(queryString);
    // console.log(params.get('gender'), 'searchParams');
    if (!genderId) {
      setShowModal(true); // open modal if gender is missing
      return;
    }


    // try {
    //   dispatch(setLoading(true));
    //   const response = await userAxiosInstance.put(PRODUCT_UPDATE_PRICE_BY_SIZE, {
    //     _id: productId,
    //     updatedPrice: price,
    //     updatedSize: size,
    //   });
    //   if (response.data.success) {
    //     // setIsWishlisted(false);
    //     // dispatch(setUserSettingDecreaseWishlistCount());
    //   } else {
    //     console.error(response?.data?.message);
    //     toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
    //   }
    // } catch (error) {
    //   console.error(error);
    //   toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
    // } finally {
    //   dispatch(setLoading(false));
    // }

    router.push(`${USER_ROUTES.measurements}?${queryString}${queryString.length ? '&' : ''}${URL_SLUG.GENDER}=${genderId}`);

    setShowModal(true);
  };

  return (
    <>
      <button className="cartbtn" onClick={handleAddToCard}>
        {t('COMMON.ADD_TO_CART')}
      </button>

      {!genderId && <GenderModal
        handleClose={handleModalClose}
        // handleClose={handleAddToCard}
        show={showModal}
        genders={genders}
        urlQueryString={queryString}
      />}
    </>
  );
};

export default AddToCartButton;
