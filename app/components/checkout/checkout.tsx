'use client';

import '@/app/styles/checkout.css';

import Checkoutproducts from './checkout-products';

import Image from 'next/image';
import Link from 'next/link';
// import Paymentimg1 from '@/public/images/payment-img-1.svg';
import Paymentimg2 from '@/public/images/payment-img-2.svg';
import PriceDetails from './price-details';
import { AngleCircleLeftIcon } from '@/components';
import { PAYMENT_OPTIONS, USER_ROUTES } from '@/constants';
import { useMemo, useState } from 'react';
import { DropDownOptionType, PaymentOption } from '@/types';
import AddressManagement from './address-management';
import { useTranslations } from 'next-intl';
import PaymentButton from './payment-button';

export default function Checkout({
  cartData,
  myAddresses,
  countries,
  countriesName,
}: {
  cartData: any[];
  myAddresses: any[];
  countries: DropDownOptionType[];
  countriesName: DropDownOptionType[];
}) {
  const t = useTranslations();
  const [selectedPayment, setSelectedPayment] = useState<PaymentOption>(PAYMENT_OPTIONS.STRIPE);
  const [selectAddress, setSelectAddress] = useState<any>(myAddresses?.[0] ?? null);
  const totalPrice = useMemo(() => {
    let total = 0;
    cartData.forEach((cart: any) => {
      total += cart.quantity * cart.amount;
    });
    return total;
  }, [cartData]);
  return (
    <>
      <div className="checkout-page">
        <div className="checkout-block-main">
          <div className="checkout-left">
            <div style={{ marginBottom: '20px' }}>
              <Link href={USER_ROUTES.cart}>
                <AngleCircleLeftIcon />
              </Link>
            </div>

            <div className="checkout-block-inner">
              <div className="checkout-black-head">
                <h6>
                  <i>1</i> <span>{t('COMMON.ORDER_SUMMERY')}</span>
                </h6>
              </div>
              <div className="checkout-block-inner-sub">
                <div className="checkout-create-list">
                  {cartData?.map((cart) => <Checkoutproducts cart={cart} key={cart?._id} />)}
                </div>
              </div>
            </div>
            <div className="checkout-block-inner">
              <div className="checkout-black-head">
                <h6>
                  <i>2</i> <span>{t('COMMON.DELIVERY_ADDRESS')}</span>
                </h6>
              </div>
              <AddressManagement
                selectedAddress={selectAddress}
                onSelect={setSelectAddress}
                myAddresses={myAddresses}
                countries={countries}
                countriesName={countriesName}
              />
            </div>
            <div className="checkout-block-inner">
              <div className="checkout-black-head">
                <h6>
                  <i>3</i> <span>{t('COMMON.PAYMENT_OPTIONS')}</span>
                </h6>
              </div>
              <div className="checkout-block-inner-sub">
                <div className="payment-block">
                  {/* <div className="paymant-box">
                    <input
                      type="radio"
                      name="payment"
                      id={PAYMENT_OPTIONS.PAYPAL}
                      checked={selectedPayment === PAYMENT_OPTIONS.PAYPAL}
                      onChange={() => setSelectedPayment(PAYMENT_OPTIONS.PAYPAL)}
                    />
                    <label htmlFor={PAYMENT_OPTIONS.PAYPAL}>
                      <span>
                        <Image src={Paymentimg1} alt="image" width={127} height={33} />
                      </span>
                    </label>
                  </div> */}
                  <div className="paymant-box">
                    <input
                      type="radio"
                      name="payment"
                      id={PAYMENT_OPTIONS.STRIPE}
                      checked={selectedPayment === PAYMENT_OPTIONS.STRIPE}
                      onChange={() => setSelectedPayment(PAYMENT_OPTIONS.STRIPE)}
                    />
                    <label htmlFor={PAYMENT_OPTIONS.STRIPE}>
                      <span>
                        <Image src={Paymentimg2} alt="image" width={86} height={36} />
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout-right">
            <div className="checkout-right-inner">
              <h5>{t('COMMON.PRICE_DETAILS_TEXT')}</h5>
              <PriceDetails totalPrice={totalPrice} />
            </div>
            <PaymentButton
              cartData={cartData}
              address={selectAddress}
              totalPrice={totalPrice}
              paymentOption={selectedPayment}
            />
          </div>
        </div>
      </div>
    </>
  );
}
