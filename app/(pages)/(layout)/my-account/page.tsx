import AccountPage from '@/app/components/MyAcounts/account';
import { getCountryList, getGenderList, getUserProfileData } from '@/utils/server-api.utils';

export default async function MyAcountspage() {
  const [countriesResult, genderResult, profileResult] = await Promise.allSettled([
    getCountryList(),
    getGenderList(),
    getUserProfileData(),
  ]);
  const countries = countriesResult.status === 'fulfilled' ? countriesResult.value : [];
  const genders = genderResult.status === 'fulfilled' ? genderResult.value : [];
  const profileData = profileResult.status === 'fulfilled' ? profileResult.value : null;

  return (
    <>
      <AccountPage countries={countries} genders={genders} profileData={profileData} />
    </>
  );
}
