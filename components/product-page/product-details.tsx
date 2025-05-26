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
  // console.log("ProductDetails==>", productDetailsData);

  const availableSizeData =
    availableSizeResult.status === 'fulfilled' ? availableSizeResult.value : [];
  const gendersData = gendersResult.status === 'fulfilled' ? gendersResult.value : [];
  // console.log("genderId", resolvedParams['gender']);


  // const sizeOrder = ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl'];

  // const sortedSizes = availableSizeData?.sort((a: any, b: any) => {
  //   return sizeOrder.indexOf(a.slug.toLowerCase()) - sizeOrder.indexOf(b.slug.toLowerCase());
  // });

  return (
    <>
      <ProdutDetail
        details={productDetailsData}
        availableSizes={availableSizeData}
        genders={gendersData}
      />
      {
        !!productDetailsData?.relatedProducts?.length && (
          <AlsoLike products={productDetailsData?.relatedProducts} />
        )
      }
    </>
  );
}
