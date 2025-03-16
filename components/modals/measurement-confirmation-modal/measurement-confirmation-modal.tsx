import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { MESSAGES, URL_SLUG, USER_ROUTES } from '@/constants';
import userAxiosInstance from '@/config/userAxiosInstance';
import { ADD_TO_CART_URL } from '@/constants/apis';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import toast from 'react-hot-toast';
import { setUserSettingIncreaseCartCount } from '@/lib/redux/slices/userSettingSlice';

const MeasurementConfirmationModal = (props: {
  productTypeId: string;
  show: boolean;
  steps: any[];
  defaultFittingSize: string;
  handleClose: () => void;
}) => {
  const { show, handleClose, steps, defaultFittingSize, productTypeId } = props;
  const router = useRouter();
  const t = useTranslations();
  const searchParams = useSearchParams();

  // State to manage the checkbox confirmation
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsConfirmed(event.target.checked);
  };

  const handleSubmit = () => {
    if (isConfirmed) {
      const searchParamsValues = {
        [URL_SLUG.FITTING_SIZE]: defaultFittingSize,
        ...Object.fromEntries(searchParams.entries()),
      };
      const stepsData = steps?.map((step) => ({
        stepType: step.value,
        slug: step.slug,
        stepCard: searchParamsValues[step.slug],
      }));
      const payload = {
        yarn: searchParamsValues.yarn,
        steps: stepsData,
        genderId: searchParamsValues.gender,
        fittingSizeId: searchParamsValues[URL_SLUG.FITTING_SIZE],
        productTypeId,
        quantity: 1,
      };
      dispatch(setLoading(true));
      userAxiosInstance
        .post(ADD_TO_CART_URL, payload)
        .then((response) => {
          if (response.data.success) {
            dispatch(setUserSettingIncreaseCartCount());
            router.push(USER_ROUTES.cart);
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error(MESSAGES.SOMETHING_WENT_WRONG);
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
      handleClose();
    } else {
      alert('Please confirm the measurement first.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} animation={false} centered>
      <div className="modal-block-main" style={{ paddingBottom: 0 }}>
        <div className="modal-block-top">
          <div className="modal-left-top">
            <h5>{t('COMMON.CONFIRM_MEASUREMENT')}</h5>
          </div>
        </div>
        <div className="d-flex" style={{ justifyContent: 'center', userSelect: 'none' }}>
          <div className="d-flex gap-3">
            <Form.Check
              type="checkbox"
              label={t('COMMON.I_CONFIRM_MEASUREMENT')}
              checked={isConfirmed}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
        <div className="modal-footer" style={{ borderTop: 0 }}>
          <Button variant="secondary" onClick={handleClose}>
            {t('COMMON.CANCEL')}
          </Button>
          <Button variant="primary" onClick={handleSubmit} disabled={!isConfirmed}>
            {t('COMMON.SUBMIT')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default MeasurementConfirmationModal;
