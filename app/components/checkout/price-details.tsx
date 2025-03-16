'use client';

import { formatPrice } from '@/utils/common.utils';
import { useTranslations } from 'next-intl';
import React from 'react';

const PriceDetails = ({ totalPrice }: { totalPrice: any }) => {
  const t = useTranslations();
  return (
    <>
      {/* <div className="total-table">
        <ul>
          <li>
            <div className="text-1">Total</div>
            <div className="text-2">$55.00</div>
          </li>
          <li>
            <div className="text-1">Sub Total</div>
            <div className="text-2">
              <span className="old-price">$40</span>
              Free
            </div>
          </li>
          <li className="tex-colum">
            <div className="text-1">Tex</div>
            <div className="text-2">$5</div>
          </li>
        </ul>
      </div> */}
      {/* <div className="doat-line"></div>
      <div className="coupan-code">
        <form action="">
          <div className="input-box-main">
            <input type="text" className="input-text" placeholder="cupon code" />
            <button>Apply</button>
          </div>
        </form>
      </div>
      <div className="total-table">
        <ul>
          <li className="offer-row">
            <div className="text-1">Offer</div>
            <div className="text-2">$15</div>
          </li>
        </ul>
      </div>
      <div className="doat-line"></div> */}
      <div className="total-table" style={{ marginTop: '10px' }}>
        <ul>
          <li className="grand-total">
            <div className="text-1">{t('COMMON.TOTAL_PAYABLE')}</div>
            <div className="text-2">{formatPrice(totalPrice)}</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PriceDetails;
