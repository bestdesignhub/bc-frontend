import { ProductDetailPage } from '@/components';

export default async function MenProductDetail({
  params,
}: {
  params: Promise<{ [key: string]: string }>;
}) {
  return <ProductDetailPage params={params} />;
}
