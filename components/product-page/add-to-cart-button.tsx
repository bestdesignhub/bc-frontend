'use client';

import { useTranslations } from 'next-intl';
import React, { FC, useState } from 'react';
import GenderModal from '../modals/gender-modal/gender-modal';
import { DropDownOptionType } from '@/types';
import { dispatch } from '@/lib/redux/store';
import userAxiosInstance from '@/config/userAxiosInstance';
import { MESSAGES } from '@/constants';
import { PRODUCT_UPDATE_PRICE_BY_SIZE } from '@/constants/apis';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
// import { setUserSettingDecreaseWishlistCount } from '@/lib/redux/slices/userSettingSlice';
import toast from 'react-hot-toast';

const AddToCartButton: FC<{ genders: DropDownOptionType[]; queryString: string; productId: string; price: number, size: string }> = ({
  genders,
  queryString,
  productId,
  price,
  size
}) => {
  const t = useTranslations();
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = async () => {

    try {
      dispatch(setLoading(true));
      const response = await userAxiosInstance.put(PRODUCT_UPDATE_PRICE_BY_SIZE, {
        _id: productId,
        updatedPrice: price,
        updatedSize: size,
      });
      if (response.data.success) {
        // setIsWishlisted(false);
        // dispatch(setUserSettingDecreaseWishlistCount());
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

    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="cartbtn" onClick={handleModalOpen}>
        {t('COMMON.ADD_TO_CART')}
      </button>

      <GenderModal
        handleClose={handleModalClose}
        show={showModal}
        genders={genders}
        urlQueryString={queryString}
      />
    </>
  );
};

export default AddToCartButton;
