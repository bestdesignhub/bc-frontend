import AlsoLike from '@/app/components/product-detail/also-like';
import ProdutDetail from '@/app/components/product-detail/product-detail';
// import ZeeZap from '@/app/components/zee-zap/zee-zap';
import '@/app/styles/product-detail.css';
import { getAvailableSizes, getGenderList, getProductDetails } from '@/utils/server-api.utils';

type ProductDetailProps = {
  params: Promise<{ [key: string]: string }>;
};

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const resolvedParams = await params;
  const [productDetailsResult, availableSizeResult, gendersResult] = await Promise.allSettled([
    getProductDetails(resolvedParams.id),
    getAvailableSizes(),
    getGenderList(),
  ]);

  const productDetailsData =
    productDetailsResult.status === 'fulfilled' ? productDetailsResult.value : {};
  const availableSizeData =
    availableSizeResult.status === 'fulfilled' ? availableSizeResult.value : [];
  const gendersData = gendersResult.status === 'fulfilled' ? gendersResult.value : [];

  return (
    <>
      <ProdutDetail
        details={productDetailsData}
        availableSizes={availableSizeData}
        genders={gendersData}
      />
      {/* <DiscoverMore /> */}
      {/* <Rating /> */}
      {!!productDetailsData?.relatedProducts?.length && (
        <AlsoLike products={productDetailsData?.relatedProducts} />
      )}
      {/* <ZeeZap /> */}
    </>
  );
}
