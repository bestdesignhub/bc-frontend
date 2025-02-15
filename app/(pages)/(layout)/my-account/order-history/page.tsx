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
  return (
    <>
      <OrderHistory orders={orders?.data} />
      <CustomPagination currentPage={orders?.currentPage} totalPage={orders?.totalPage} />
    </>
  );
}
