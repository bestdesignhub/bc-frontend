'use client';

import { useTranslations } from 'next-intl';
import React, { FC, useState } from 'react';
import GenderModal from '../modals/gender-modal/gender-modal';
import { DropDownOptionType } from '@/types';

const AddToCartButton: FC<{ genders: DropDownOptionType[]; queryString: string }> = ({
  genders,
  queryString,
}) => {
  const t = useTranslations();
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => {
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
