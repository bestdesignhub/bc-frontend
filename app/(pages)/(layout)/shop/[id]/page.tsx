import { ProductDetailPage } from '@/components';

export default async function ShopProductDetail({
  params,
}: {
  params: Promise<{ [key: string]: string }>;
}) {
  return <ProductDetailPage params={params} />;
}
