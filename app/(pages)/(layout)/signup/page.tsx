import { SignUp } from '@/components';
import { DropDownOptionType } from '@/types';
import { getCountryList, getGenderList } from '@/utils/server-api.utils';
export default async function SignupPage() {
  const [filteredResResult, genderListResult] = await Promise.allSettled([
    getCountryList(),
    getGenderList(),
  ]);

  const filteredRes = filteredResResult.status === 'fulfilled' ? filteredResResult.value : [];
  const genderList =
    genderListResult.status === 'fulfilled' ? (genderListResult.value as DropDownOptionType[]) : [];

  return <SignUp countries={filteredRes} genderList={genderList} />;
}
