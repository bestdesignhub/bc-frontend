import OrderCancel from '@/app/components/checkout/order-cancel/order-cancel';
import React from 'react';

const OrderCancelPage = async ({ params }: { params: Promise<{ [key: string]: string }> }) => {
  const resolvedParams = await params;
  return <OrderCancel _id={resolvedParams?.orderId} />;
};

export default OrderCancelPage;
