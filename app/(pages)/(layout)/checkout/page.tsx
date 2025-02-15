import Checkout from '@/app/components/checkout/checkout';
import {
  getCartDetails,
  getCountryList,
  getCountryNameList,
  getMyAddresses,
} from '@/utils/server-api.utils';

export default async function CheckoutPage() {
  const [cartDataResult, myAddressesResult, countriesResult, countriesNameResult] =
    await Promise.allSettled([
      getCartDetails(),
      getMyAddresses(),
      getCountryList(),
      getCountryNameList(),
    ]);
  const cartData = cartDataResult.status === 'fulfilled' ? cartDataResult.value : [];
  const myAddresses = myAddressesResult.status === 'fulfilled' ? myAddressesResult.value : [];
  const countries = countriesResult.status === 'fulfilled' ? countriesResult.value : [];
  const countriesName = countriesNameResult.status === 'fulfilled' ? countriesNameResult.value : [];

  return (
    <>
      <Checkout
        cartData={cartData}
        myAddresses={myAddresses}
        countries={countries}
        countriesName={countriesName}
      />
      {/* <Service /> */}
    </>
  );
}
