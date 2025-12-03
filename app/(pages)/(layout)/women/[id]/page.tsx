// import { ProductDetailPage } from '@/components';

// export default async function WomenProductDetail({
//   params,
// }: {
//   params: Promise<{ [key: string]: string }>;
// }) {
//   return <ProductDetailPage params={params} />;
// }




import { ProductDetailPage } from '@/components';

export default async function WomenProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params; // 🔥 FIX

  return <ProductDetailPage params={resolvedParams} />;
}