'use client';

import React, { useEffect } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import './order-cancel.css'; // Import the custom CSS for styling
import '@/app/styles/payment-success.css';
import Link from 'next/link';
import { MESSAGES, USER_ROUTES } from '@/constants';
import { useTranslations } from 'next-intl';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import userAxiosInstance from '@/config/userAxiosInstance';
import toast from 'react-hot-toast';

const OrderCancel: React.FC<{ _id: string }> = ({ _id }) => {
  const t = useTranslations();
  useEffect(() => {
    const updateData = async () => {
      try {
        dispatch(setLoading(true));
        await userAxiosInstance.post('/orders/cancel', {
          _id,
        });
      } catch (error) {
        console.error(error);
        toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
      } finally {
        dispatch(setLoading(false));
      }
    };
    updateData();
  }, [t, _id]);
  return (
    <div className="payment-status-wrapper">
      <div className="container">
        <div className="payment-content failed">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
              fill="#fa8585"
            />
          </svg>
          <h1>{t('COMMON.OHH_NO')}</h1>
          <h6>{t('COMMON.PAYMENT_FAILED')}</h6>
          <p>{t('COMMON.ORDER_CANCEL_MESSAGE')}</p>
          <button className="small">
            <Link href={USER_ROUTES.cart}>{t('COMMON.GO_TO_CART')}</Link>
          </button>
        </div>
      </div>
    </div>
    // <Container className="order-cancel-container">
    //   <Row className="justify-content-center">
    //     <Col md={6}>
    //       <Card className="order-cancel-card">
    //         <Card.Body>
    //           <Card.Title>
    //             <h2>{t('COMMON.ORDER_CANCELED')}</h2>
    //           </Card.Title>
    //           <Card.Text style={{ margin: '5px 0 !important' }}>
    //             {t('COMMON.ORDER_CANCEL_MESSAGE')}
    //           </Card.Text>
    //           <div style={{ marginTop: '5px' }}>
    //             <Link href={USER_ROUTES.cart}>
    //               <Button variant="danger">{t('COMMON.GO_TO_CART')}</Button>
    //             </Link>
    //           </div>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default OrderCancel;
