import OrderSuccess from '@/app/components/checkout/order-success/order-success';
import React from 'react';

const OrderSuccessPage = async ({ params }: { params: Promise<{ [key: string]: string }> }) => {
  const resolvedParams = await params;
  return <OrderSuccess _id={resolvedParams?.orderId} />;
};

export default OrderSuccessPage;
