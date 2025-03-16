import MyAddresses from '@/app/components/MyAcounts/my-address';
import { getCountryList, getCountryNameList, getMyAddresses } from '@/utils/server-api.utils';
import '@/app/styles/checkout.css';

export default async function MyAcountspage() {
  const [myAddressesResult, countriesResult, countriesNameResult] = await Promise.allSettled([
    getMyAddresses(),
    getCountryList(),
    getCountryNameList(),
  ]);
  const myAddresses = myAddressesResult.status === 'fulfilled' ? myAddressesResult.value : [];
  const countries = countriesResult.status === 'fulfilled' ? countriesResult.value : [];
  const countriesName = countriesNameResult.status === 'fulfilled' ? countriesNameResult.value : [];
  return (
    <>
      <MyAddresses
        countries={countries}
        countriesName={countriesName}
        initialMyAddresses={myAddresses}
      />
    </>
  );
}
