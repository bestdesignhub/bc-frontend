'use client';

import { USER_ROUTES } from '@/constants';
import { RootState } from '@/lib/redux/store';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import Settings from '@/app/components/MyAcounts/settings'; // Import the Settings component

const CartWishlist = () => {
  const { cartCount, wishlistCount } = useSelector((state: RootState) => state.userSetting);
  return (
    <>
      <Settings />
      <div className="user_item wishlist">
        <Link href={USER_ROUTES.wishlist}>
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4998 12.572L11.9998 20L4.49981 12.572C4.00512 12.0906 3.61546 11.512 3.35536 10.8726C3.09527 10.2333 2.97037 9.54694 2.98855 8.85693C3.00673 8.16691 3.16758 7.48813 3.46097 6.86333C3.75436 6.23853 4.17395 5.68125 4.6933 5.22657C5.21265 4.7719 5.82052 4.42968 6.47862 4.22147C7.13673 4.01327 7.83082 3.94358 8.51718 4.0168C9.20354 4.09001 9.86731 4.30455 10.4667 4.6469C11.0661 4.98925 11.5881 5.45199 11.9998 6.00599C12.4133 5.45602 12.9359 4.99731 13.5349 4.6586C14.1339 4.31988 14.7963 4.10844 15.4807 4.03751C16.1652 3.96658 16.8569 4.03769 17.5126 4.24639C18.1683 4.45508 18.7738 4.79687 19.2914 5.25036C19.8089 5.70385 20.2272 6.25928 20.5202 6.88189C20.8132 7.50449 20.9746 8.18088 20.9941 8.8687C21.0137 9.55653 20.8911 10.241 20.6339 10.8792C20.3768 11.5175 19.9907 12.0958 19.4998 12.578"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="number">{wishlistCount}</div>
          </div>
        </Link>
      </div>
      <div className="user_item cart">
        <Link href={USER_ROUTES.cart}>
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7M2 10H22L18 21H6L2 10Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="number">{cartCount}</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CartWishlist;
