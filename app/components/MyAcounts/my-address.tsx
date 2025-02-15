import { DropDownOptionType } from '@/types';
import React from 'react';
import AddressManagement from '../checkout/address-management';

const MyAddresses = ({
  initialMyAddresses,
  countries,
  countriesName,
}: {
  initialMyAddresses: any[];
  countries: DropDownOptionType[];
  countriesName: DropDownOptionType[];
}) => {
  return (
    <div className="my-account-block-main">
      <h2>My address</h2>
      <div className="border-box-account">
        <h3>Addresses</h3>
        <div className="form-main">
          <AddressManagement
            myAddresses={initialMyAddresses}
            countries={countries}
            countriesName={countriesName}
            hideRadioButton={true}
          />
        </div>
      </div>
    </div>
  );
};

export default MyAddresses;
