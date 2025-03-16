import { ProductDetailPage } from '@/components';

export default async function WomenProductDetail({
  params,
}: {
  params: Promise<{ [key: string]: string }>;
}) {
  return <ProductDetailPage params={params} />;
}
