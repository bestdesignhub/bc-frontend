'use client';

import React, { useEffect } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '@/app/styles/payment-success.css';
import Link from 'next/link';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import toast from 'react-hot-toast';
import { useTranslations } from 'next-intl';
import { MESSAGES, USER_ROUTES } from '@/constants';
import userAxiosInstance from '@/config/userAxiosInstance';
import { setUserSettingCartCount } from '@/lib/redux/slices/userSettingSlice';
import BannerWrapper from '@/components/common/banner/BannerWrapper';

const OrderSuccess: React.FC<{ _id: string }> = ({ _id }) => {
  const t = useTranslations();
  useEffect(() => {
    const updateData = async () => {
      try {
        dispatch(setLoading(true));
        const response = await userAxiosInstance.post('/orders/update-and-send-email', {
          _id,
          paymentStatus: 'SUCCESS',
        });
        if (response.data.success) {
          dispatch(setUserSettingCartCount(0));
        }
      } catch (error) {
        console.error(error);
        toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
      } finally {
        dispatch(setLoading(false));
      }
    };
    updateData();
  }, [_id, t]);

  return (
    <BannerWrapper>
      <div className="payment-status-wrapper">
        <div className="container">
          <div className="payment-content success">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                fill="#71bb71"
              />
            </svg>
            <h1>{t('COMMON.THANK_YOU')}</h1>
            <h6>{t('COMMON.PAYMENT_DONE_SUCCESSFULLY')}</h6>
            <p>{t('COMMON.ORDER_SUCCESS_MESSAGE')}</p>
            <button className="small">
              <Link href={USER_ROUTES.shop}>{t('COMMON.GO_TO_SHOP')}</Link>
            </button>
          </div>
        </div>
      </div>
    </BannerWrapper>
    // <Container className="order-success-container">
    //   <Row className="justify-content-center">
    //     <Col md={6}>
    //       <Card className="order-success-card">
    //         <Card.Body>
    //           <Card.Title>
    //             <h2>{t('COMMON.ORDER_SUCCESSFUL')}</h2>
    //           </Card.Title>
    //           <Card.Text style={{ margin: '5px 0 !important' }}>
    //             {t('COMMON.ORDER_SUCCESS_MESSAGE')}
    //           </Card.Text>
    //           <div style={{ marginTop: '5px' }}>
    //             <Link href={USER_ROUTES.shop}>
    //               <Button variant="success">{t('COMMON.GO_TO_SHOP')}</Button>
    //             </Link>
    //           </div>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default OrderSuccess;
