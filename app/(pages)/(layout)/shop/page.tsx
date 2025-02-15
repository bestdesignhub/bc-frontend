import { ProductPage } from '@/components';
import { USER_ROUTES } from '@/constants';

const FILTERS = [
  { key: '_gender', label: 'Gender', field: 'genders' },
  { key: '_colour', label: 'Colour', field: 'colours' },
  { key: '_material', label: 'Material', field: 'materials' },
  { key: '_pattern', label: 'Pattern', field: 'patterns' },
];

export default async function ShopProductPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  return (
    <ProductPage
      filters={FILTERS}
      productDetailsURL={USER_ROUTES.shop}
      searchParams={searchParams}
      showGenders
      slug="shop"
    />
  );
}
