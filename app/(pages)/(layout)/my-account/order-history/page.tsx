import OrderHistory from '@/app/components/MyAcounts/order-history';
import { CustomPagination } from '@/components';
import { getUserOrders } from '@/utils/server-api.utils';

export default async function MyAcountspage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const orders = await getUserOrders(resolvedSearchParams);
  orders?.data?.forEach((order: any) => {
    order.products.forEach((product: any) => {
      if (typeof product.measurements === 'string') {
        try {
          product.measurements = JSON.parse(product.measurements);
        } catch (e) {
          console.error("Failed to parse measurements for product:", product._id, e);
        }
      }
    });
  });
  console.log("orderData===>>>", orders?.data[0]);

  return (
    <>
      <OrderHistory orders={orders?.data} />
      <CustomPagination currentPage={orders?.currentPage} totalPage={orders?.totalPage} />
    </>
  );
}
