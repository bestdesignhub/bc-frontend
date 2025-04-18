import { Instagram } from '@/app/components';
import '@/app/styles/woman.css';
import { BannerComponent } from '@/components';
import { CmsWrapperComponent } from '@/components/listing-page/cms-wrapper';
import ListingFaq from '@/components/product-listing/listing-faq';
import ProductList from '@/components/product-listing/product-list';
import {
  COLOUR_DROPDOWN_URL,
  GENDER_DROPDOWN_URL,
  MATERIAL_DROPDOWN_URL,
  PATTERN_DROPDOWN_URL,
} from '@/constants/apis';
import { ISlug } from '@/types';
import { getDropdownList, getFaqBySlug, getProductList } from '@/utils/server-api.utils';

type ProductPageProps = {
  searchParams: Promise<{ [key: string]: string }>;
  category?: 'women' | 'men';
  productDetailsURL: string;
  filters: { key: string; label: string; field: string }[];
  showGenders?: boolean;
  slug?: ISlug;
};

export default async function ProductPage({
  searchParams,
  category,
  productDetailsURL,
  filters,
  showGenders,
  slug,
}: ProductPageProps) {
  const resolvedSearchParams = await searchParams;

  // Define the dropdown requests based on showGenders
  const dropdownRequests = [
    getDropdownList(COLOUR_DROPDOWN_URL),
    getDropdownList(MATERIAL_DROPDOWN_URL),
    getDropdownList(PATTERN_DROPDOWN_URL),
    getProductList(resolvedSearchParams, category),
  ];

  if (showGenders) {
    dropdownRequests.push(getDropdownList(GENDER_DROPDOWN_URL));
  }

  // Execute all dropdown requests
  const results = await Promise.allSettled(dropdownRequests);

  // Extract results safely
  const colours = results[0].status === 'fulfilled' ? results[0].value : [];
  const materials = results[1].status === 'fulfilled' ? results[1].value : [];
  const patterns = results[2].status === 'fulfilled' ? results[2].value : [];
  const productList = results[3].status === 'fulfilled' ? results[3].value : [];
  const genders = showGenders && results[4]?.status === 'fulfilled' ? results[4].value : [];
  const faqData = await getFaqBySlug(slug ?? '');

  return (
    <>
      <BannerComponent slug={slug} />
      <ProductList
        colours={colours}
        materials={materials}
        patterns={patterns}
        productList={productList}
        filtersOptions={filters}
        productDetailsURl={productDetailsURL}
        genders={genders}
      />
      <CmsWrapperComponent />
      <ListingFaq faqData={faqData} />
      <Instagram />
    </>
  );
}
