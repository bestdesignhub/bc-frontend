'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import '@/app/styles/my-account.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MESSAGES, USER_ROUTES } from '@/constants';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import toast from 'react-hot-toast';
import { useTranslations } from 'next-intl';
import userAxiosInstance from '@/config/userAxiosInstance';
import { SIGNOUT_API_URL } from '@/constants/apis';
import { clearLocalStorageTokenAndData } from '@/utils/common.utils';
import BannerWrapper from '@/components/common/banner/BannerWrapper';

export default function MyAccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();

  const handleLogout = async () => {
    try {
      dispatch(setLoading(true));
      const logoutResponse = await userAxiosInstance.get(SIGNOUT_API_URL);
      if (logoutResponse.data.success) {
        clearLocalStorageTokenAndData();
        toast.success(logoutResponse.data.message || t(MESSAGES.SUCCESS));
        router.push(USER_ROUTES.signin);
      }
    } catch (error) {
      console.error('Logout error: ', error);
      toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <BannerWrapper>
      <div className="my-account-page">
        <div className="container">
          <Row>
            <Col md={3}>
              <nav className="flex-column nav nav-pills">
                <div className="nav-item">
                  <Link
                    href={USER_ROUTES.myAccount}
                    className={`nav-link ${pathname === USER_ROUTES.myAccount ? 'active' : ''}`}
                  >
                    {t('COMMON.MY_ACCOUNT')}
                  </Link>
                </div>
                <div className="nav-item">
                  <Link
                    href={`${USER_ROUTES.myAccount}${USER_ROUTES.myAddresses}`}
                    className={`nav-item nav-link ${pathname === `${USER_ROUTES.myAccount}${USER_ROUTES.myAddresses}` ? 'active' : ''}`}
                  >
                    {t('COMMON.MY_ADDRESS')}
                  </Link>
                </div>
                <div className="nav-item">
                  <Link
                    href={`${USER_ROUTES.myAccount}${USER_ROUTES.orderHistory}`}
                    className={`nav-item nav-link ${pathname === `${USER_ROUTES.myAccount}${USER_ROUTES.orderHistory}` ? 'active' : ''}`}
                  >
                    {t('COMMON.ORDER_HISTORY')}
                  </Link>
                </div>
                <div className="nav-item">
                  <Link
                    href={`${USER_ROUTES.myAccount}${USER_ROUTES.settings}`}
                    className={`nav-item nav-link ${pathname === `${USER_ROUTES.myAccount}${USER_ROUTES.settings}` ? 'active' : ''}`}
                  >
                    {t('COMMON.SETTINGS')}
                  </Link>
                </div>
                <div className="nav-item">
                  <Link className="nav-item nav-link " href="#" onClick={handleLogout}>
                    {t('COMMON.LOGOUT')}
                  </Link>
                </div>
              </nav>
            </Col>
            <Col md={9}>{children}</Col>
          </Row>
        </div>
      </div>
    </BannerWrapper>
  );
}
