import Link from 'next/link';
import React from 'react';

const OrderHistory = () => {
  return (
    <div className="my-account-block-main">
      <h2>My orders</h2>
      <div className="border-box-account">
        <h3>Orders</h3>
        <div className="order-table-main">
          <div className="order-table">
            <ul className="thead">
              <li>
                <div className="text-1">Product name </div>
                <div className="text-2">Amount </div>
                <div className="text-3">Order status </div>
                <div className="text-4">View order</div>
              </li>
            </ul>
            <ul className="tbody">
              <li>
                <div data-title="Product name" className="text-1">
                  sweater
                </div>
                <div data-title="Amount" className="text-2">
                  $ 25.00
                </div>
                <div data-title="Order status" className="text-3">
                  Active
                </div>
                <div data-title="View order" className="text-4">
                  <Link href="#">view</Link>
                  <Link href="#">cancle</Link>
                </div>
              </li>
              <li>
                <div data-title="Product name" className="text-1">
                  sweater
                </div>
                <div data-title="Amount" className="text-2">
                  $ 25.00
                </div>
                <div data-title="Order status" className="text-3">
                  Active
                </div>
                <div data-title="View order" className="text-4">
                  <Link href="#">view</Link>
                  <Link href="#">cancle</Link>
                </div>
              </li>
              <li>
                <div data-title="Product name" className="text-1">
                  sweater
                </div>
                <div data-title="Amount" className="text-2">
                  $ 25.00
                </div>
                <div data-title="Order status" className="text-3">
                  Active
                </div>
                <div data-title="View order" className="text-4">
                  <Link href="#">view</Link>
                  <Link href="#">cancle</Link>
                </div>
              </li>
              <li>
                <div data-title="Product name" className="text-1">
                  sweater
                </div>
                <div data-title="Amount" className="text-2">
                  $ 25.00
                </div>
                <div data-title="Order status" className="text-3">
                  Active
                </div>
                <div data-title="View order" className="text-4">
                  <Link href="#">view</Link>
                  <Link href="#">cancle</Link>
                </div>
              </li>
              <li>
                <div data-title="Product name" className="text-1">
                  sweater
                </div>
                <div data-title="Amount" className="text-2">
                  $ 25.00
                </div>
                <div data-title="Order status" className="text-3">
                  Active
                </div>
                <div data-title="View order" className="text-4">
                  <Link href="#">view</Link>
                  <Link href="#">cancle</Link>
                </div>
              </li>
              <li>
                <div data-title="Product name" className="text-1">
                  sweater
                </div>
                <div data-title="Amount" className="text-2">
                  $ 25.00
                </div>
                <div data-title="Order status" className="text-3">
                  Active
                </div>
                <div data-title="View order" className="text-4">
                  <Link href="#">view</Link>
                  <Link href="#">cancle</Link>
                </div>
              </li>
              <li>
                <div data-title="Product name" className="text-1">
                  sweater
                </div>
                <div data-title="Amount" className="text-2">
                  $ 25.00
                </div>
                <div data-title="Order status" className="text-3">
                  Active
                </div>
                <div data-title="View order" className="text-4">
                  <Link href="#">view</Link>
                  <Link href="#">cancle</Link>
                </div>
              </li>
              <li>
                <div data-title="Product name" className="text-1">
                  sweater
                </div>
                <div data-title="Amount" className="text-2">
                  $ 25.00
                </div>
                <div data-title="Order status" className="text-3">
                  Active
                </div>
                <div data-title="View order" className="text-4">
                  <Link href="#">view</Link>
                  <Link href="#">cancle</Link>
                </div>
              </li>
              <li>
                <div data-title="Product name" className="text-1">
                  sweater
                </div>
                <div data-title="Amount" className="text-2">
                  $ 25.00
                </div>
                <div data-title="Order status" className="text-3">
                  Active
                </div>
                <div data-title="View order" className="text-4">
                  <Link href="#">view</Link>
                  <Link href="#">cancle</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
