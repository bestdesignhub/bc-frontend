'use client';
import { useEffect, useLayoutEffect, useMemo } from 'react';
import Image from 'next/image';
//import '@/app/styles/header.css';
import Cookies from 'js-cookie';
import userAxiosInstance from '@/config/userAxiosInstance';
import { GENERAL_USER_SETTINGS_URL } from '@/constants/apis';
import { dispatch } from '@/lib/redux/store';
import { setAllUserSettingsValues } from '@/lib/redux/slices/userSettingSlice';
import Logo from './logo';
import Settings from '../MyAcounts/settings';
import Link from 'next/link';
import { COOKIES, USER_ROUTES } from '@/constants';
import CartWishlist from './cart-wishlist';

export default function Header() {
  const token = useMemo(() => Cookies.get('userToken'), []);

  useLayoutEffect(() => {
    const fetchUserSettings = async () => {
      try {
        const response = await userAxiosInstance.get(GENERAL_USER_SETTINGS_URL);
        if (response?.data?.success) {
          const result = response?.data?.data || {};
          dispatch(
            setAllUserSettingsValues({
              cartCount: result?.cartCount ?? 0,
              wishlistCount: result?.wishlistCount ?? 0,
            })
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (token) {
      fetchUserSettings();
    }
  }, [token]);

  useEffect(() => {
    const handleScroll = () => {
      // Reserved for scroll logic (e.g., sticky header)
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="header-top">
        <div className="f-container">
          <span className="f-shipping">Free Shipping on all orders over $500</span>
          <ul className="h-top-btn">
            <li>
              <a href="/sweater" title="Create My SWEATER">
                Create My SWEATER
              </a>
            </li>
            <li>
              <a href="/shop" title="Customise a Sweater">
                Customise a Sweater
              </a>
            </li>
          </ul>
        </div>
      </div>

      <header className="header-main">
        <div className="f-container">
          <Logo />
          <div className="search-box">
            <input className="search-input" type="search" name="search" placeholder="search" />
          </div>
          <ul className="header-links">
            <li>
              <a className="phone" href="tel:+4531327890" title="+45 3132 7890">
                +45 3132 7890
              </a>
            </li>
            <li>
              <a className="order-Track" href="#" title="Order Tracking">
                Order Tracking
              </a>
            </li>
            <li>
              {/* <a className="my-account" href="#" title="My Account">
                My Account
              </a> */}
              <Link href={USER_ROUTES[token ? 'myAccount' : 'signin']}>My Account</Link>
            </li>
          </ul>
          <div className="my-cart">{token && <CartWishlist />}</div>

          <Settings />
          {/* <div className="country-selecter">
            <button className="country-dropdown" type="button">
              Text
            </button>
            <ul className="country-list">
              <li>
                <a href="#" title="English">
                  <span className="country-flag">
                    <Image src="/images/english.png" alt="English" width={24} height={16} />
                  </span>
                  <span className="country-name">English</span>
                </a>
              </li>
              <li>
                <a href="#" title="Danish">
                  <span className="country-flag">
                    <Image src="/images/danish.png" alt="Danish" width={24} height={16} />
                  </span>
                  <span className="country-name">Danish</span>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </header>
      <nav className="nav-row">
        <div className="f-container">
          <nav className="navigation-menu">
            <ul className="category-list">
              <li>
                <a href="/women" title="Women">
                  Women
                </a>
              </li>
              <li>
                <a href="/men" title="Men">
                  Men
                </a>
              </li>
              <li>
                <a href="/shop" title="Shop">
                  Shop
                </a>
              </li>
              <li>
                <a href="/our-story" title="Our Story">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/gift" title="Gift">
                  Gift
                </a>
              </li>
              <li>
                <a href="/discovery" title="Discovery">
                  Discovery
                </a>
              </li>
            </ul>
          </nav>
          <ul className="usefull-links">
            <li>
              <a className="wholeseller" href="#" title="Wholeseller">
                Wholeseller
              </a>
            </li>
            <li>
              <a href="#" title="Download manual book">
                Download manual book
              </a>
            </li>
            <li>
              <a href="#" title="Download color book">
                Download color book
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
