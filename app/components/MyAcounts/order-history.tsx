import { formatPrice } from '@/utils/common.utils';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const OrderHistory = async ({ orders }: { orders: any[] }) => {
  const t = await getTranslations();
  return (
    <div className="my-account-block-main">
      <h2>{t('COMMON.MY_ORDERS')}</h2>
      <div className="border-box-account">
        <h3>{t('COMMON.ORDER_HISTROY')}</h3>
        <div className="order-table-main">
          <div className="order-table">
            <ul className="thead">
              <li>
                <div className="text-2">{t('COMMON.PRODUCTS')}</div>
                <div className="text-3">{t('COMMON.SHIPPING_ADDRESS')}</div>
                <div className="text-4">{t('COMMON.TOTAL_PRICE')}</div>
              </li>
            </ul>
            <ul className="tbody">
              {orders.map((order) => (
                <li
                  key={order.orderId}
                  style={{ marginBottom: '10px', display: 'flex', borderBottom: '1px solid' }}
                >
                  <div data-title={t('COMMON.PRODUCTS')} className="text-2">
                    {order.products.map((product: any) => (
                      <div key={product._id} className="product-item border p-2 mb-2 rounded flex">
                        <p className="font-bold">{product.name}</p>
                        <p>
                          <strong>{t('COMMON.PRICE')}:</strong> {formatPrice(product?.price)}
                        </p>
                        <p>
                          <strong>{t('COMMON.QUANTITY_TEXT')}:</strong> {product.quantity}
                        </p>
                        {/* <p>
                        <strong>{t("COMMON.VIEW")}:</strong>{' '}
                          <Link href={`${USER_ROUTES.shop}/${product._id}`}>
                            <EyeIcon />
                          </Link>
                        </p> */}
                      </div>
                    ))}
                  </div>
                  <div data-title={t('COMMON.SHIPPING_ADDRESS')} className="text-3">
                    <p>{order.shippingAddress.name}</p>
                    <p>{order.shippingAddress.company}</p>
                    <p>
                      {order.shippingAddress.addressLine1}, {order.shippingAddress.addressLine2}
                    </p>
                    <p>
                      {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                    </p>
                    <p>{order.shippingAddress.country}</p>
                    <p>{order.shippingAddress.phoneNumber}</p>
                  </div>
                  <div data-title={t('COMMON.TOTAL_PRICE')} className="text-4">
                    {formatPrice(order.totalPrice)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
