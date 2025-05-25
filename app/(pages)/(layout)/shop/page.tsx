import { ProductPage } from '@/components';
import GenderModalWrapper from '@/components/modals/gender-modal/gender-modal-wrapper';
import { USER_ROUTES } from '@/constants';
import { GENDER_DROPDOWN_URL, MATERIAL_DROPDOWN_URL } from '@/constants/apis';
import { getDropdownList } from '@/utils/server-api.utils';

const FILTERS = [
  { key: 'gender', label: 'Gender', field: 'genders' },
  { key: '_colour', label: 'Colour', field: 'colours' },
  { key: '_material', label: 'Material', field: 'materials' },
  { key: '_pattern', label: 'Pattern', field: 'patterns' },
];

export default async function ShopProductPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {

  const resolvedSearchParams = await searchParams;
  const genderSlug = resolvedSearchParams["gender"]
  const [genderResult, materialResult] = await Promise.allSettled([
    getDropdownList(GENDER_DROPDOWN_URL),
    getDropdownList(MATERIAL_DROPDOWN_URL),
  ]);


  const genders = genderResult.status === 'fulfilled' ? genderResult.value : [];
  const materials = materialResult.status === 'fulfilled' ? materialResult.value : [];
  // console.log("materials", materials);


  return (
    <>
      <ProductPage
        filters={FILTERS}
        productDetailsURL={USER_ROUTES.shop}
        searchParams={searchParams}
        showGenders
        slug="shop"
      />
      {!genderSlug && <GenderModalWrapper genders={genders} material={materials[1]?.value} />}
    </>
  );
}
