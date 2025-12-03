// import { ProductDetailPage } from '@/components';

// export default async function MenProductDetail({
//   params,
// }: {
//   params: Promise<{ [key: string]: string }>;
// }) {
//   return <ProductDetailPage params={params} />;
// }


import { ProductDetailPage } from '@/components';

export default async function MenProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params; // 🔥 FIX

  return <ProductDetailPage params={resolvedParams} />;
}