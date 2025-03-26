'use client';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import '@/app/styles/header.css';
import Link from 'next/link';
import Logo from './logo';
import MenuList from './menu-list';
import { COOKIES, USER_ROUTES } from '@/constants';
import CartWishlist from './cart-wishlist';
import Cookies from 'js-cookie';
import userAxiosInstance from '@/config/userAxiosInstance';
import { GENERAL_USER_SETTINGS_URL } from '@/constants/apis';
import { dispatch } from '@/lib/redux/store';
import { setAllUserSettingsValues } from '@/lib/redux/slices/userSettingSlice';
import Settings from '@/app/components/MyAcounts/settings'; // Import the Settings component

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const token = useMemo(() => Cookies.get(COOKIES.userToken), []);
  // const [isSearchActive, setSearchActive] = useState(false);

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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const toggleSearch = () => {
  //   setSearchActive(!isSearchActive);
  // };
  return (
    <>
      {/* <div className="header_middle">
        <div className="container">
          <div className="flexrow">
            <TopMenu />
            <Logo />
            <button className="bsp-btn">Become a wholesaler</button>
          </div>
        </div>
      </div> */}
      <div className="top-strip">
        <div className="container">
          <div className="inner-content">
            <div className="left-text">Free Shipping on all orders over $500</div>
            <div className="top-right-panel">
              <Link className="button-top" href="/sweater">
                Create My Sweater
              </Link>
              <Link className="button-top" href="/shop">
                Customise a sweater
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`header_bottom ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="flexrow">
            <Logo />
            <div className="header_right">
              <Settings />
              {/* <div className={`user_item search ${isSearchActive ? 'active' : ''}`}>
                <input type="text" className="search_input" placeholder="Search..." />
                <div className="icon" onClick={toggleSearch}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_931_1670)">
                      <path
                        d="M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 21L15 15"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_931_1670">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div> */}
              <div className="user_item user">
                <Link href={USER_ROUTES[token ? 'myAccount' : 'signin']}>
                  <div className="icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.125 8.75C15.941 11.228 14.062 13.25 12 13.25C9.93798 13.25 8.05598 11.229 7.87498 8.75C7.68798 6.172 9.51498 4.25 12 4.25C14.484 4.25 16.313 6.219 16.125 8.75Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.01709 20.747C3.78309 16.5 7.92209 14.25 12.0001 14.25C16.0781 14.25 20.2171 16.5 20.9841 20.747"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
              {token && <CartWishlist />}
              {/* <div className="user_item web">
                <div className="icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_931_1683)">
                      <path
                        d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.6001 9H20.4001"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.6001 15H20.4001"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.5002 3C9.8155 5.69961 8.92236 8.81787 8.92236 12C8.92236 15.1821 9.8155 18.3004 11.5002 21"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.5 3C14.1847 5.69961 15.0778 8.81787 15.0778 12C15.0778 15.1821 14.1847 18.3004 12.5 21"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_931_1683">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div> */}
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="menubar">
        <div className="container">
          <MenuList />
        </div>
      </div>
    </>
  );
}
