'use client';

import React, { useState } from 'react';
import { formatPrice, getAWSImageUrl } from '@/utils/common.utils';
import ReorderSweaterModal from '@/components/modals/re-order-modal/ReorderSweaterModal';
// import { COLOUR_DROPDOWN_URL } from '@/constants/apis';
// import { getDropdownList } from '@/utils/server-api.utils';

const OrderHistoryClient = ({
    orders,
    labels,
}: {
    orders: any[];
    labels: Record<string, string>;
}) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
    // console.log('Orders:', orders);


    // const [coloursResult] = await Promise.allSettled([
    //     getDropdownList(COLOUR_DROPDOWN_URL),

    // ]);

    // const colours = coloursResult.status === 'fulfilled' ? coloursResult.value : [];
    // console.log(colours, "colours");

    const openReorderModal = (product: any) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const closeReorderModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    // const handleGoToCart = () => {
    //     console.log('Going to cart with:', selectedProduct);
    //     closeReorderModal();
    //     // Optional: navigate to cart
    //     // router.push('/cart');
    // };

    return (
        <div className="my-account-block-main">
            <h2>{labels.myOrders}</h2>
            <div className="border-box-account">
                <h3>{labels.orderHistory}</h3>
                <div className="order-table-main">
                    <div className="order-table">
                        <ul className="tbody accounlist-order">
                            {orders?.map((order) => (
                                <li key={order.orderId}>
                                    <div data-title={labels.products} className="text-2">
                                        <strong>Order Details:</strong>

                                        <div className='orderDetailsHeader'>
                                            <p>
                                                <strong>{labels.orderDate}:</strong>{' '}
                                                <span>{order?.createdAt
                                                    ? new Date(order.createdAt).toLocaleString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                        hour: 'numeric',
                                                        minute: '2-digit',
                                                        hour12: true,
                                                    })
                                                    : 'N/A'}
                                                </span>
                                            </p>
                                            <p>
                                                <strong>{labels.status}:</strong> <span className='green'>{order?.paymentStatus}</span>
                                            </p>
                                            <p>
                                                <strong>Tracking Number:</strong> <span>#456 4566 4566</span>
                                            </p>
                                            <p>
                                                <strong>Item Status:</strong> <span className='orange'>Shipped</span>
                                            </p>
                                        </div>
                                        {order.products.map((product: any) => (
                                            <div key={product._id} className="product-item p-2 mb-2">
                                                <div className='productSection'>
                                                    <div className="thumbnail">
                                                        <img
                                                            src={getAWSImageUrl(product?.steps[2]?.stepCard?.realImage)}
                                                            alt="image"
                                                            width={100}
                                                            height={120}
                                                        />
                                                    </div>
                                                    <div className='productRightSection'>
                                                        <p className="font-bold">{product.name}</p>
                                                        <p className='priceLable'>
                                                            <strong>{labels.price}:</strong> {formatPrice(product?.price)}
                                                        </p>
                                                        <p>
                                                            <strong>{labels.quantity}:</strong> {product.quantity}
                                                        </p>
                                                        <p>
                                                            <strong>{labels.style}:</strong>{' '}
                                                            {product?.steps[2]?.stepCard?.title?.en}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="mesurment-size">
                                                    <ul className="list-disc pl-5">
                                                        {product.measurements?.map((measurement: any, index: number) => (
                                                            <li key={index}>
                                                                <strong>{measurement.label}:</strong> {measurement.value} cm (±
                                                                {measurement.tolerance} cm)
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="order-actions mt-3">
                                                    <button
                                                        className="reorderBtn"
                                                        onClick={() => openReorderModal(product)}
                                                    >
                                                        Reorder
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div data-title={labels.shippingAddress} className="text-3 shipping-block">
                                        <strong>Shipping Address:</strong>
                                        <p>{order.shippingAddress.name}</p>
                                        <p>{order.shippingAddress.company}</p>
                                        <p>
                                            {order.shippingAddress.addressLine1},{' '}
                                            {order.shippingAddress.addressLine2}
                                        </p>
                                        <p>
                                            {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                                        </p>
                                        <p>{order.shippingAddress.country}</p>
                                        <p>{order.shippingAddress.phoneNumber}</p>
                                    </div>

                                    <div data-title={labels.totalPrice} className="text-4 price-block">
                                        <p>
                                            <strong>Total Orders Price:</strong>
                                        </p>
                                        {formatPrice(order.totalPrice)}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {
                showModal && selectedProduct && (
                    <ReorderSweaterModal
                        isOpen={showModal}
                        onClose={closeReorderModal}
                        // onGoToCart={handleGoToCart}
                        product={selectedProduct} // ✅ Pass selected product
                    />
                )
            }
        </div >
    );
};

export default OrderHistoryClient;
