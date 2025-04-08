'use client';

import { USER_ROUTES } from '@/constants';
import { RootState } from '@/lib/redux/store';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const CartWishlist = () => {
  const { cartCount, wishlistCount } = useSelector((state: RootState) => state.userSetting);
  return (
    <>
      <Link className="minicart" href={USER_ROUTES.cart}>
        <span className="cart-text">My Cart</span>
        <span className="counter-number">{cartCount}</span>
      </Link>
    </>
  );
};

export default CartWishlist;
