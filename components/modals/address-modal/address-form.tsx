'use client';
import '@/app/styles/login.css';
import { InputField, SearchableDropdown } from '@/components/common';
import userAxiosInstance from '@/config/userAxiosInstance';
import { MESSAGES } from '@/constants';
import { MY_ADDRESS_CREATE_URL, MY_ADDRESS_UPDATE_URL } from '@/constants/apis';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { dispatch } from '@/lib/redux/store';
import { DropDownOptionType } from '@/types';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface ISignUpFormType {
  first_name: string;
  last_name: string;
  middle_name?: string;
  phone_number: string;
  company?: string;
  address_line1: string;
  address_line2?: string;
  phone_code: string;
  country: string;
  city: string;
  postal_code: string;
}

interface ISignUpForm {
  countries: DropDownOptionType[];
  onClose: () => void;
  editData: any | null;
  countriesName: DropDownOptionType[];
  onSuccess: () => void;
}
export default function AddressForm({
  countries,
  onSuccess,
  countriesName,
  editData,
  onClose,
}: ISignUpForm) {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const t = useTranslations();
  const methods = useForm<ISignUpFormType>({
    defaultValues: {
      first_name: '',
      last_name: '',
      middle_name: '',
      phone_number: '',
      company: '',
      address_line1: '',
      address_line2: '',
      phone_code: '',
      country: '',
      city: '',
      postal_code: '',
    },
  });

  useEffect(() => {
    if (editData) {
      methods.reset({
        address_line1: editData?.address_line1,
        address_line2: editData.address_line2 ?? '',
        city: editData.city,
        company: editData.company ?? '',
        country: editData.country_id,
        first_name: editData.first_name,
        last_name: editData.last_name,
        middle_name: editData.middle_name ?? '',
        postal_code: editData.postal_code,
        phone_code: editData.phone_code_id,
        phone_number: editData.phone_number,
      });
    }
  }, [editData, methods]);

  const { handleSubmit } = methods;

  const onSubmit = async (data: ISignUpFormType) => {
    try {
      setDisableSubmit(true);
      dispatch(setLoading(true));
      if (!countries.some((country) => country.value === data.phone_code)) {
        methods.setError('phone_code', {
          type: 'custom',
          message: t('COMMON.PLEASE_SELECT_PHONE_CODE'),
        });
        return;
      }
      if (!countriesName.some((country) => country.value === data.country)) {
        methods.setError('country', { type: 'custom', message: t('COMMON.PLEASE_SELECT_COUNTRY') });
        return;
      }
      const response = await userAxiosInstance({
        url: editData ? MY_ADDRESS_UPDATE_URL : MY_ADDRESS_CREATE_URL,
        data: {
          ...data,
          _id: editData?._id,
        },
        method: editData ? 'PUT' : 'POST',
      });
      if (response.data.success) {
        toast.success(response.data.message || t(MESSAGES.SUCCESS));
        await onSuccess();
        onClose();
      }
    } catch (error) {
      console.error(error);
      toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
    } finally {
      setDisableSubmit(false);
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="loginform-wrapper" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <FormProvider {...methods}>
        <Form className="col-form-2" onSubmit={handleSubmit(onSubmit)} method="post">
          <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
            <InputField
              name="first_name"
              label={t('COMMON.FIRST_NAME')}
              placeholder={t('COMMON.FIRST_NAME')}
              type="text"
              required={true}
            />
          </Form.Group>
          <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
            <InputField
              name="middle_name"
              label={t('COMMON.MIDDLE_NAME')}
              placeholder={t('COMMON.MIDDLE_NAME')}
              type="text"
            />
          </Form.Group>
          <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
            <InputField
              name="last_name"
              label={t('COMMON.LAST_NAME')}
              placeholder={t('COMMON.LAST_NAME')}
              type="text"
              required={true}
            />
          </Form.Group>
          <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
            <InputField
              name="company"
              label={t('COMMON.COMPANY')}
              placeholder={t('COMMON.COMPANY')}
              type="text"
            />
          </Form.Group>
          <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
            <InputField
              name="address_line1"
              label={t('COMMON.ADDRESS_LINE_ONE')}
              placeholder={t('COMMON.ADDRESS_LINE_ONE')}
              type="text"
              required={true}
            />
          </Form.Group>
          <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
            <InputField
              name="address_line2"
              label={t('COMMON.ADDRESS_LINE_TWO')}
              placeholder={t('COMMON.ADDRESS_LINE_TWO')}
              type="text"
            />
          </Form.Group>
          <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
            <SearchableDropdown
              name="phone_code"
              label={t('COMMON.CODE')}
              options={countries}
              required
            />
          </Form.Group>
          <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
            <InputField
              name="phone_number"
              label={t('COMMON.MOBILE_NUMBER')}
              placeholder={t('COMMON.MOBILE_NUMBER')}
              type="text"
              required={true}
            />
          </Form.Group>
          <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
            <SearchableDropdown
              name="country"
              label={t('COMMON.COUNTRY')}
              options={countriesName}
              required
            />
          </Form.Group>

          <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
            <InputField
              name="city"
              label={t('COMMON.CITY')}
              placeholder={t('COMMON.CITY')}
              type="text"
              required={true}
            />
          </Form.Group>

          <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
            <InputField
              name="postal_code"
              label={t('COMMON.POSTAL_CODE')}
              placeholder={t('COMMON.POSTAL_CODE')}
              type="text"
              required={true}
            />
          </Form.Group>
          <Form.Group className="form-control" />
          <Form.Group
            className="form-control d-flex"
            style={{ alignItems: 'center', margin: '10px 0 0 0', gap: 5 }}
            controlId="newsletterForm.ControlInput"
          >
            <Button
              variant="primary"
              style={{ minWidth: 'auto', margin: 0 }}
              type="submit"
              disabled={disableSubmit}
            >
              {t('COMMON.SUBMIT')}
            </Button>
            <Button
              variant="primary"
              onClick={onClose}
              style={{ minWidth: 'auto', margin: 0 }}
              // style={{
              //   height: '40px',
              //   background: 'var(--bsp-black)',
              //   fontSize: 'var(--bsp-body-20)',
              //   borderRadius: '0',
              //   display: 'flex',
              //   justifyContent: 'center',
              //   alignItems: 'center',
              //   fontWeight: 600,
              // }}
              type="button"
              disabled={disableSubmit}
            >
              {t('COMMON.CANCEL')}
            </Button>
          </Form.Group>
        </Form>
      </FormProvider>
    </div>
  );
}
