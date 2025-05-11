'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useState } from 'react';
import { MeasurementConfirmationModal } from '@/components/modals/measurement-confirmation-modal';

const MeasurementAddToCartButton = ({
  steps,
  productId,
  fittingId,
  productTypeId,
  defaultFittingSize,
}: {
  steps: any[];
  productId: string;
  fittingId: string;
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
  const filteredSteps = steps.filter((step) => step.slug !== 'price_module');

  return (
    <>
      <div className="login-link-sub" onClick={handleModalOpen}>
        <Link href="#">{t('COMMON.ADD_TO_CART')}</Link>
      </div>
      <MeasurementConfirmationModal
        productTypeId={productTypeId}
        steps={filteredSteps}
        productId={productId}
        fittingId={fittingId}
        defaultFittingSize={defaultFittingSize}
        handleClose={handleModalClose}
        show={showModal}
      />
    </>
  );
};

export default MeasurementAddToCartButton;
