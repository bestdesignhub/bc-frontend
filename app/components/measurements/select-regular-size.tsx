'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import MeasurementSizeChart from './measurement-size-chart';

const SelectRegularSize: FC<{
  fittingName: string;
  availableSizes: any[];
  selectedFittingSize: string;
}> = ({ fittingName, availableSizes, selectedFittingSize }) => {
  const t = useTranslations();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="add-btn">
        <Link href="#" onClick={handleShow}>
          {t('COMMON.SELECT')} {fittingName}
        </Link>
      </div>
      {show && (
        <MeasurementSizeChart handleClose={handleClose} show={show} sizes={availableSizes} />
      )}
      <div className="custom-size" style={{ marginTop: '10px' }}>
        {t('COMMON.SELECTED_FITTING')}
        <div className="checkbox">
          <label htmlFor="one">{selectedFittingSize}</label>
        </div>
      </div>
    </>
  );
};

export default SelectRegularSize;
