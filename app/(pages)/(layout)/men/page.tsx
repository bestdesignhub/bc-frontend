import { ProductPage } from '@/components';
import { USER_ROUTES } from '@/constants';

const FILTERS = [
  { key: '_colour', label: 'Colour', field: 'colours' },
  { key: '_material', label: 'Material', field: 'materials' },
  { key: '_pattern', label: 'Pattern', field: 'patterns' },
];

export default async function WomanProductPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  return (
    <ProductPage
      filters={FILTERS}
      productDetailsURL={USER_ROUTES.men}
      searchParams={searchParams}
      category="men"
      slug="men"
    />
  );
}
