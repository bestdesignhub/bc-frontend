'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useState } from 'react';
import { MeasurementConfirmationModal } from '@/components/modals/measurement-confirmation-modal';

const MeasurementAddToCartButton = ({
  steps,
  productTypeId,
  defaultFittingSize,
}: {
  steps: any[];
  productTypeId: string;
  defaultFittingSize: string;
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
      <div className="login-link-sub" onClick={handleModalOpen}>
        <Link href="#">{t('COMMON.ADD_TO_CART')}</Link>
      </div>
      <MeasurementConfirmationModal
        productTypeId={productTypeId}
        steps={steps}
        defaultFittingSize={defaultFittingSize}
        handleClose={handleModalClose}
        show={showModal}
      />
    </>
  );
};

export default MeasurementAddToCartButton;
