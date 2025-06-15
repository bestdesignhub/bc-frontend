import { formatPrice, getAWSImageUrl } from '@/utils/common.utils';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import OrderHistoryClient from './OrderHistoryClient';

const OrderHistory = async ({ orders }: { orders: any[] }) => {
  const t = await getTranslations();

  // Translate only necessary keys and pass them as plain strings
  const labels = {
    myOrders: t('COMMON.MY_ORDERS'),
    orderHistory: t('COMMON.ORDER_HISTROY'),
    products: t('COMMON.PRODUCTS'),
    shippingAddress: t('COMMON.SHIPPING_ADDRESS'),
    totalPrice: t('COMMON.TOTAL_PRICE'),
    price: t('COMMON.PRICE'),
    quantity: t('COMMON.QUANTITY_TEXT'),
    status: 'Status',
    style: 'Style',
    orderDate: 'Order Date',
  };

  // return (
  //   <div className="my-account-block-main">
  //     <h2>{t('COMMON.MY_ORDERS')}</h2>
  //     <div className="border-box-account">
  //       <h3>{t('COMMON.ORDER_HISTROY')}</h3>
  //       <div className="order-table-main">
  //         <div className="order-table">
  //           {/* <ul className="thead">
  //             <li>
  //               <div className="text-2">{t('COMMON.PRODUCTS')}</div>
  //               <div className="text-3">{t('COMMON.SHIPPING_ADDRESS')}</div>
  //               <div className="text-4">{t('COMMON.TOTAL_PRICE')}</div>
  //               <div className="text-4">{'Measurements'}</div>
  //             </li>
  //           </ul> */}
  //           <ul className="tbody accounlist-order">
  //             {orders?.map((order) => (
  //               <li key={order.orderId}>
  //                 <div data-title={t('COMMON.PRODUCTS')} className="text-2">
  //                   <strong>Order Details:</strong>
  //                   <p>
  //                     <strong>Order Date:</strong>{' '}
  //                     {order?.createdAt
  //                       ? new Date(order.createdAt).toLocaleString('en-US', {
  //                         year: 'numeric',
  //                         month: 'long',
  //                         day: 'numeric',
  //                         hour: 'numeric',
  //                         minute: '2-digit',
  //                         hour12: true,
  //                       })
  //                       : 'N/A'}
  //                   </p>
  //                   <p>
  //                     <strong>{'Status'}:</strong> {order?.paymentStatus}
  //                   </p>
  //                   {order.products.map((product: any) => (
  //                     <div key={product._id} className="product-item p-2 mb-2">
  //                       <p className="font-bold">{product.name}</p>
  //                       <p>
  //                         <strong>{t('COMMON.PRICE')}:</strong> {formatPrice(product?.price)}
  //                       </p>

  //                       <p>
  //                         <strong>{t('COMMON.QUANTITY_TEXT')}:</strong> {product.quantity}
  //                       </p>
  //                       <p>
  //                         <strong>{'Style'}:</strong> {product?.steps[2]?.stepCard?.title?.en}
  //                       </p>
  //                       <p>
  //                         <strong>{'ProductImage'}:</strong> <div key={product?.steps[2]} className="thumbnail">
  //                           <img src={getAWSImageUrl(product?.steps[2]?.stepCard?.realImage)} alt="image" width={80} height={80} />
  //                         </div>
  //                       </p>
  //                       <div className='mesurment-size'>
  //                         <ul className="list-disc pl-5">
  //                           {product.measurements && product.measurements?.map((measurement: any, index: number) => (
  //                             <li key={index}>
  //                               <strong>{measurement.label}:</strong> {measurement.value} cm (±{measurement.tolerance} cm)
  //                             </li>
  //                           ))}
  //                         </ul>
  //                       </div>
  //                       {/* <p>
  //                       <strong>{t("COMMON.VIEW")}:</strong>{' '}
  //                         <Link href={`${USER_ROUTES.shop}/${product._id}`}>
  //                           <EyeIcon />
  //                         </Link>
  //                       </p> */}
  //                     </div>

  //                   ))}
  //                 </div>
  //                 <div data-title={t('COMMON.SHIPPING_ADDRESS')} className="text-3 shipping-block">
  //                   <strong>Shipping Address:</strong>
  //                   <p>{order.shippingAddress.name}</p>
  //                   <p>{order.shippingAddress.company}</p>
  //                   <p>
  //                     {order.shippingAddress.addressLine1}, {order.shippingAddress.addressLine2}
  //                   </p>
  //                   <p>
  //                     {order.shippingAddress.city}, {order.shippingAddress.postalCode}
  //                   </p>
  //                   <p>{order.shippingAddress.country}</p>
  //                   <p>{order.shippingAddress.phoneNumber}</p>
  //                 </div>
  //                 <div data-title={t('COMMON.TOTAL_PRICE')} className="text-4 price-block">
  //                   <p><strong>Total Orders Price:</strong></p>
  //                   {formatPrice(order.totalPrice)}
  //                 </div>

  //                 <div className="order-actions mt-3">
  //                   <button className="btn btn-primary me-2">
  //                     Details
  //                   </button>
  //                   <button className="btn btn-secondary me-2">
  //                     Review
  //                   </button>
  //                   <button className="btn btn-success me-2">
  //                     Reorder
  //                   </button>
  //                   <button className="btn btn-secondary me-2">
  //                     Make As PDF
  //                   </button>
  //                   <button className="btn btn-success">
  //                     Exports
  //                   </button>
  //                 </div>


  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </div >
  // );
  return <OrderHistoryClient orders={orders} labels={labels} />;
};

export default OrderHistory;
