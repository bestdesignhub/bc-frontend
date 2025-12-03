// import { ProductDetailPage } from '@/components';

// export default async function ShopProductDetail({
//   params,
// }: {
//   params: Promise<{ [key: string]: string }>;
// }) {
//   return <ProductDetailPage params={params} />;
// }


// app/shop/[id]/page.tsx

import { ProductDetailPage } from '@/components';

export default async function ShopProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params; // 👈 REQUIRED in Next.js 14/15

  return <ProductDetailPage params={resolvedParams} />;
}


