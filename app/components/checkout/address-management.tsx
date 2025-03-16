'use client';

import { AddressModal } from '@/components/modals';
import userAxiosInstance from '@/config/userAxiosInstance';
import { MY_ADDRESS_LIST_URL } from '@/constants/apis';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { dispatch } from '@/lib/redux/store';
import { DropDownOptionType } from '@/types';
import { useTranslations } from 'next-intl';
import React, { useCallback, useLayoutEffect, useState } from 'react';

const AddressManagement = ({
  myAddresses,
  onSelect,
  selectedAddress,
  countries,
  countriesName,
  hideRadioButton = false,
}: {
  selectedAddress?: any;
  onSelect?: any;
  myAddresses: any[];
  countries: DropDownOptionType[];
  countriesName: DropDownOptionType[];
  hideRadioButton?: boolean;
}) => {
  const t = useTranslations();
  const [addresses, setAddresses] = useState(myAddresses);
  const [showModal, setShowModal] = useState<{
    open: boolean;
    data: any | null;
  }>({
    open: false,
    data: null,
  });
  useLayoutEffect(() => {
    setAddresses(myAddresses);
  }, [myAddresses]);
  const fetchAddresses = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const response = await userAxiosInstance.post(MY_ADDRESS_LIST_URL);
      if (response?.data?.success) {
        if (!selectedAddress) {
          onSelect?.(response?.data?.data?.[0] ?? '');
        }
        setAddresses(response.data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  }, [selectedAddress, onSelect]);
  const handleEdit = (_id: string) => {
    const addressData = addresses.find((address) => address._id === _id);
    setShowModal({ open: true, data: addressData });
  };
  const handleAdd = () => {
    setShowModal({ open: true, data: null });
  };
  const handleModalClose = () => {
    setShowModal({ open: false, data: null });
  };

  return (
    <div className="checkout-block-inner-sub">
      {addresses.map((address, index) => (
        <div
          key={address?._id}
          className="checkout-address-block"
          style={
            index > 0
              ? { borderTop: 'var(--bsp-gray7) dashed 2px', padding: '20px 0' }
              : { padding: '20px 0' }
          }
        >
          <div className="checkout-address-left">
            <div className="checkrow">
              {!hideRadioButton && (
                <>
                  <input
                    type="radio"
                    name="address"
                    id={address?._id}
                    checked={selectedAddress?._id === address._id}
                    onChange={() => onSelect(address)}
                  />
                  <label htmlFor={address?._id}>
                    {address?.first_name} {address?.last_name}
                  </label>
                </>
              )}
              {hideRadioButton && (
                <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
                  {address?.first_name} {address?.last_name}
                </span>
              )}
            </div>
            <div className="address-blk" style={hideRadioButton ? { padding: 0 } : {}}>
              {address?.company && <p>{address?.company}</p>}
              <p>{address?.address_line1}</p>
              {address?.address_line2 && <p>{address?.address_line2}</p>}
              <p>
                {address?.city}
                {address?.country ? `, ${address?.country}` : ''} - {address?.postal_code}
              </p>
              <p>
                {t('COMMON.PHONE_NUMBER')}: {address?.phone_code} {address?.phone_number}
              </p>
            </div>
          </div>
          <div className="edit-link" onClick={() => handleEdit(address?._id)}>
            <span
              style={{
                display: 'flex',
                textTransform: 'uppercase',
                fontSize: 'var(--bsp-body-text)',
                fontWeight: 600,
                color: 'var(--bsp-black)',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              {t('COMMON.EDIT_TEXT')}
            </span>
          </div>
        </div>
      ))}
      <div className="checkout-address-left">
        <div className="address-blk" style={{ padding: 0 }}>
          <div className="black-btn">
            <span
              style={{
                background: 'var(--bsp-black)',
                color: 'var(--bsp-white)',
                textTransform: 'uppercase',
                padding: '0 30px',
                height: '60px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                userSelect: 'none',
              }}
              onClick={handleAdd}
            >
              &#43; {t('COMMON.ADD_TEXT')}
            </span>
          </div>
        </div>
      </div>
      {showModal.open && (
        <AddressModal
          onSuccess={fetchAddresses}
          countriesName={countriesName}
          countries={countries}
          handleClose={handleModalClose}
          editData={showModal.data}
          show={showModal.open}
        />
      )}
    </div>
  );
};

export default AddressManagement;
