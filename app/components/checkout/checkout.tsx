'use client';

import '@/app/styles/checkout.css';

import Checkoutproducts from './checkout-products';

import Image from 'next/image';

// import Paymentimg1 from '@/public/images/payment-img-1.svg';
import Paymentimg2 from '@/public/images/payment-img-2.svg';
import PriceDetails from './price-details';
import { PAYMENT_OPTIONS } from '@/constants';
import { useEffect, useMemo, useState } from 'react';
import { DropDownOptionType, PaymentOption } from '@/types';
import AddressManagement from './address-management';
import { useTranslations } from 'next-intl';
import PaymentButton from './payment-button';
import { useRouter, useSearchParams } from 'next/navigation';
import { formatPrice, handleApiCall } from '@/utils/common.utils';
import toast from 'react-hot-toast';

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
  const router = useRouter();
  const _router = useSearchParams();
  const couponCode = _router?.get("couponCode");
  const [couponText, setCouponText] = useState("");
  const [disPrice, setDisPrice] = useState();
  const totalPrice = useMemo(() => {
    let total = 0;
    cartData.forEach((cart: any) => {
      total += cart.quantity * cart.amount;
    });
    return total;
  }, [cartData]);

  useEffect(() => {
    if (couponCode) {
      applyCouponCode(couponCode, false);
      return;
    }
    // fetchCartProducts();
  }, [couponCode]);

  const applyCouponCode = async (
    couponCode: string,
    message: boolean = true,
  ) => {
    const appyCoupon: any = await handleApiCall(`/cart/apply/coupon`, "POST", {
      couponCode,
    });

    console.log("appyCoupon", appyCoupon);
    if (appyCoupon.success == false) {
      toast.error(t(appyCoupon?.message));
      return;
    }

    // if (!appyCoupon?.status) {
    //   toast.error(t(appyCoupon?.message));
    //   return;
    // }
    setCouponText(couponCode);
    if (message) {
      toast.success(appyCoupon?.message);
    }
    if (appyCoupon?.data?.total) {
      const originalTotal = parseFloat((totalPrice || "0").toString().replace(/[^\d.-]/g, ""));
      const discount = parseFloat((totalPrice || "0").toString().replace(/[^\d.-]/g, ""));
      // orderData.total = (originalTotal - discount).toFixed(2); // Keeps two decimal points
      // alert(orderData.total)
      // const updatData: any = await handleApiCall(`/cart/apply/coupon`, "POST", {
      //   couponCode,
      // });
    }

    setDisPrice(appyCoupon?.data?.total)
    // setCartProducts(appyCoupon?.data);
  };


  return (
    <>
      <div className="checkout-page">
        <div className='container'>
          <div className="checkout-block-main">
            <div className="checkout-left">
              {/* <div style={{ marginBottom: '20px' }}>
                <Link href={USER_ROUTES.cart}>
                  <AngleCircleLeftIcon />
                </Link>
              </div> */}

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
                          <Image
                            loading="lazy"
                            src={Paymentimg2}
                            alt="image"
                            width={86}
                            height={36}
                          />
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
                <div className="apply-coupon">
                  <div className="info-head block">
                    <h3>{t("APPLY_VOUCHER")}</h3>
                  </div>
                  <div className="card-number-line">
                    <input
                      className="card-number"
                      type="text"
                      placeholder={t("COUPON_CODE")}
                      onChange={(e) => setCouponText(e?.target?.value)}
                      value={couponText}
                    />
                  </div>
                  <button
                    className="complete-btn"
                    type="button"
                    disabled={!couponText}
                    onClick={() =>
                      router?.replace(`/checkout?couponCode=${couponText}`)
                    }
                  >
                    {t("APPLY_LABEL")}
                  </button>
                </div>
                {disPrice && <ul>
                  <li className="grand-total">
                    <div className="text-1">Original Price</div>
                    <div className="text-2">{formatPrice(totalPrice)}</div>
                  </li>
                  <li className="grand-total">
                    <div className="text-1">Discount</div>
                    <div className="text-2">{formatPrice(Number(disPrice) || 0)}</div>
                  </li>
                </ul>}
                <PriceDetails totalPrice={totalPrice - (Number(disPrice) || 0)} />
              </div>
              <PaymentButton
                cartData={cartData}
                address={selectAddress}
                totalPrice={totalPrice - (Number(disPrice) || 0)}
                paymentOption={selectedPayment}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
