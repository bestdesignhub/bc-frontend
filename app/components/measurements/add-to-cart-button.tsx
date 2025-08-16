'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useState } from 'react';
import { MeasurementConfirmationModal } from '@/components/modals/measurement-confirmation-modal';
import { useRouter } from 'next/navigation';

const MeasurementAddToCartButton = ({
  steps,
  productId,
  fittingId,
  productTypeId,
  defaultFittingSize,
  queryParams,
  gender, price, size, createdBy, instructions
}: {
  steps: any[];
  productId: string;
  fittingId: string;
  productTypeId: string;
  defaultFittingSize: string;
  queryParams?: any;
  gender?: any;
  price?: any;
  size?: any;
  createdBy?: any;
  instructions?: any
}) => {
  const t = useTranslations();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const handleModalOpen = () => {
    if (queryParams) {
      if (typeof queryParams === 'string') {
        router.push(`?${queryParams}&gender=${gender}`);
      } else {
        const sp = new URLSearchParams();
        for (const [k, v] of Object.entries(queryParams)) {
          sp.set(k, String(v));
        }
        router.push(`?${sp.toString()}`);
      }
    }
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  const filteredSteps = steps?.filter((step) => step.slug !== 'price_module');

  return (
    <>
      <div className="login-link-sub" onClick={handleModalOpen}>
        <Link className="cartbtn" href="#">{t('COMMON.ADD_TO_CART')}</Link>
      </div>
      <MeasurementConfirmationModal
        productTypeId={productTypeId}
        steps={filteredSteps}
        productId={productId}
        fittingId={fittingId}
        defaultFittingSize={defaultFittingSize}
        handleClose={handleModalClose}
        price={price}
        size={size}
        createdBy={createdBy}
        instructions={instructions}
        show={showModal}


      />
    </>
  );
};

export default MeasurementAddToCartButton;
