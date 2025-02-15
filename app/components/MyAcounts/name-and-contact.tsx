'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { Col, Form, Row } from 'react-bootstrap';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';
import userAxiosInstance from '@/config/userAxiosInstance';
import { PROFILE_UPDATE_API_URL } from '@/constants/apis';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { InputField, SearchableDropdown } from '@/components/common';
import { useEffect } from 'react';

interface IProfileUpdateForm {
  first_name: string;
  last_name: string;
  middle_name?: string;
  email: string;
  mobile_number: string;
  country_id: string;
  gender_id: string;
  weight: string;
  height: string;
}

const ProfileUpdate = ({
  countries,
  genders,
  profileData,
}: {
  countries: { label: string; value: string }[];
  genders: { label: string; value: string }[];
  profileData: any;
}) => {
  const t = useTranslations();
  const methods = useForm<IProfileUpdateForm>({
    defaultValues: {
      first_name: '',
      last_name: '',
      middle_name: '',
      email: '',
      mobile_number: '',
      country_id: '',
      gender_id: '',
      weight: '',
      height: '',
    },
  });
  const { handleSubmit } = methods;

  useEffect(() => {
    if (profileData) {
      methods.reset({
        country_id: profileData.country_id,
        email: profileData.email,
        first_name: profileData.first_name,
        middle_name: profileData.middle_name,
        last_name: profileData.last_name,
        mobile_number: profileData.mobile_number,
        height: profileData.height,
        weight: profileData.weight,
        gender_id: profileData.gender_id,
      });
    }
  }, [profileData, methods]);

  const onSubmit = async (data: IProfileUpdateForm) => {
    try {
      dispatch(setLoading(true));
      let isError = false;
      if (!genders.some((country) => country.value === data.gender_id)) {
        methods.setError('gender_id', {
          type: 'custom',
          message: t('COMMON.PLEASE_SELECT_GENDER'),
        });
        isError = true;
      }
      if (!countries.some((country) => country.value === data.country_id)) {
        methods.setError('country_id', {
          type: 'custom',
          message: t('COMMON.PLEASE_SELECT_PHONE_CODE'),
        });
        isError = true;
      }
      if (isError) return;
      const response = await userAxiosInstance.patch(PROFILE_UPDATE_API_URL, data);
      if (response.data.success) {
        toast.success(response.data.message || t('COMMON.SUCCESS'));
      } else {
        toast.error(response.data.message || t('COMMON.SOMETHING_WENT_WRONG'));
      }
    } catch (error) {
      console.error(error);
      toast.error(t('COMMON.SOMETHING_WENT_WRONG'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="form-main">
      <FormProvider {...methods}>
        <Form className="col-form-2" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col sm={4}>
              <InputField required name="first_name" placeholder={t('COMMON.FIRST_NAME')} />
            </Col>
            <Col sm={4}>
              <InputField name="middle_name" placeholder={t('COMMON.MIDDLE_NAME')} />
            </Col>
            <Col sm={4}>
              <InputField name="last_name" placeholder={t('COMMON.LAST_NAME')} required />
            </Col>
            <Col sm={4}>
              <InputField name="email" type="email" placeholder={t('COMMON.EMAIL')} required />
            </Col>
            <Col sm={4}>
              <InputField name="mobile_number" placeholder={t('COMMON.MOBILE_NUMBER')} required />
            </Col>
            <Col sm={4}>
              <SearchableDropdown
                name="gender_id"
                options={genders}
                placeholder={t('COMMON.GENDER')}
                required
              />
            </Col>
            <Col sm={4}>
              <SearchableDropdown
                name="country_id"
                placeholder={t('COMMON.COUNTRY')}
                options={countries}
                required
              />
            </Col>
            <Col sm={4}>
              <InputField name="weight" type="number" placeholder={`${t('COMMON.WEIGHT')} (kg)`} />
            </Col>
            <Col sm={4}>
              <InputField name="height" type="number" placeholder={`${t('COMMON.HEIGHT')} (cm)`} />
            </Col>
            <Col sm={12}>
              <div className="input-box submit-row">
                <input type="submit" value={t('COMMON.SAVE')} />
              </div>
            </Col>
          </Row>
        </Form>
      </FormProvider>
    </div>
  );
};

export default ProfileUpdate;
