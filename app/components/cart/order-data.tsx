'use client';

import { formatPrice, generateProductName } from '@/utils/common.utils';
import { useTranslations } from 'next-intl';
import React, { useMemo } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const OrderData = ({ cartData }: { cartData: any[] }) => {
  const t = useTranslations();

  const orderData = useMemo(() => {
    let total = 0;
    const orderItems = cartData.map((cart: any) => {
      const price = cart.quantity * cart.amount;
      total += price;
      return {
        name: generateProductName(cart),
        quantity: cart.quantity,
        price: formatPrice(price),
      };
    });
    return {
      orderItems,
      total: formatPrice(total),
    };
  }, [cartData]);

  const tooltip = (
    <Tooltip id="tooltip">
      {orderData.orderItems?.map((cart, index: number) => <p key={index}>{cart.name}</p>)}
    </Tooltip>
  );
  return (
    <ul>
      {orderData.orderItems?.map((cart, index: number) => (
        <li key={index}>
          <div className="text-1">
            <OverlayTrigger placement="top" overlay={tooltip}>
              <p>{cart.name}</p>
            </OverlayTrigger>
            <div className="price">
              {/* <span className="old-price">$60.00</span> */}
              <span>
                Size <b>L</b>
              </span>
              <span>
                Qty <b>{cart.quantity}</b>
              </span>
              <span className="new-price">{cart.price}</span>
            </div>
          </div>
          <div className="text-2">
            {/* <div className="i-icon">
                        <Link href="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="33"
                            viewBox="0 0 32 33"
                            fill="none"
                          >
                            <rect
                              x="1.6198"
                              y="1.98986"
                              width="28.7607"
                              height="28.7607"
                              rx="14.3804"
                              stroke="#377DD7"
                              strokeWidth="2.61461"
                            />
                            <path
                              d="M18.9944 13.0144L14.2029 13.6746L14.0306 14.5505L14.9744 14.74C15.5877 14.9008 15.7101 15.144 15.5746 15.8173L14.0306 23.7957C13.6265 25.8587 14.2517 26.8287 15.722 26.8287C16.8619 26.8287 18.1849 26.2495 18.7852 25.4534L18.9694 24.4964C18.5534 24.9017 17.94 25.0638 17.5359 25.0638C16.9594 25.0638 16.7514 24.6193 16.8988 23.8363L18.9944 13.0144ZM19.1394 8.21266C19.1394 8.51481 19.0853 8.81401 18.9801 9.09316C18.875 9.37231 18.7209 9.62596 18.5266 9.83961C18.3324 10.0533 18.1018 10.2227 17.8479 10.3384C17.5941 10.454 17.3221 10.5135 17.0474 10.5135C16.7726 10.5135 16.5006 10.454 16.2468 10.3384C15.993 10.2227 15.7624 10.0533 15.5681 9.83961C15.3738 9.62596 15.2197 9.37231 15.1146 9.09316C15.0095 8.81401 14.9554 8.51481 14.9554 8.21266C14.9554 7.60244 15.1758 7.0172 15.5681 6.58571C15.9604 6.15422 16.4925 5.9118 17.0474 5.9118C17.6022 5.9118 18.1343 6.15422 18.5266 6.58571C18.919 7.0172 19.1394 7.60244 19.1394 8.21266Z"
                              fill="#377DD7"
                            />
                          </svg>
                        </Link>
                      </div> */}
            {/* <div className="price">
              {/* <span className="old-price">$60.00</span> *
              <span className="new-price">{cart.price}</span>
            </div> */}
          </div>
        </li>
      ))}
      <li>
        <div className="text-1">{t('COMMON.TOTAL_TEXT')}</div>
        <div className="text-2">
          <div className="price">
            <span className="new-price">{orderData.total}</span>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default OrderData;
