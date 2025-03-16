import { SizeModal } from '@/components/size-modal';
import userAxiosInstanceWithoutToken from '@/config/userAxiosInstanceWithoutToken';
import { MESSAGES, URL_SLUG } from '@/constants';
import { YARN_GET_DETAIL_URL } from '@/constants/apis';
import { useView } from '@/hooks';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { dispatch } from '@/lib/redux/store';
import { formatPrice, getAWSImageUrl } from '@/utils/common.utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { FC, useState } from 'react';
import { Col } from 'react-bootstrap';
import toast from 'react-hot-toast';

const ProductCard: FC<{ product: any }> = ({ product }) => {
  const { view } = useView();
  const t = useTranslations();
  const searchParams = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const [yarnDetails, setYarnDetails] = useState<any>(null);

  const handleShow = () => {
    dispatch(setLoading(true));
    userAxiosInstanceWithoutToken
      .get(`${YARN_GET_DETAIL_URL}/${product._id}`)
      .then((response) => {
        const result = response.data as any;
        if (result.success) {
          setYarnDetails(result.data);
          setShowModal(true);
        } else {
          toast.error(result?.message || t(MESSAGES.SOMETHING_WENT_WRONG));
          return;
        }
      })
      .catch((err) => {
        console.log('eee', err);
        toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  const handleClose = () => setShowModal(false);

  const yarnId = searchParams.get(URL_SLUG.YARN);
  return (
    <>
      <Col
        key={product?._id}
        xs={12}
        md={view === 'grid' ? 3 : 4}
        lg={view === 'grid' ? 3 : 4}
        xl={view === 'grid' ? 3 : 4}
      >
        <div
          className={'womanproductbox'}
          style={
            yarnId === product?._id
              ? {
                  border: '3px solid',
                }
              : {}
          }
        >
          <div className="image" onClick={handleShow}>
            <Image
              src={getAWSImageUrl(product.image)}
              width={328}
              height={350}
              alt={'offer'}
              loading="lazy"
            />
          </div>
          <div className="info">
            <h6>{product.name}</h6>
            <div className="pr-price">
              <ins>{formatPrice(product?.price)}</ins>
            </div>
          </div>
          <button
            onClick={handleShow}
            style={{
              background: 'var(--bsp-black)',
              width: '100%',
              padding: '10px 0',
              color: 'white',
            }}
          >
            {t('COMMON.SELECT')}
          </button>
        </div>
      </Col>
      {showModal && (
        <SizeModal yarnDetails={yarnDetails} show={showModal} handleClose={handleClose} />
      )}
    </>
  );
};

export default ProductCard;
