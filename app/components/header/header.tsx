'use client';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import router for navigation
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
import Settings from '@/app/components/MyAcounts/settings';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // Search state
  const router = useRouter();
  const token = useMemo(() => Cookies.get(COOKIES.userToken), []);

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

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?search=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/men');
    }
  };

  return (
    <>
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
            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
            <div className="header_right">
              <Settings />
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
            </div>
          </div>
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
