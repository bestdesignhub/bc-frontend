'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { Col, Form, Row } from 'react-bootstrap';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';
import userAxiosInstance from '@/config/userAxiosInstance';
import { CHANGE_PASSWORD_API_URL } from '@/constants/apis';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { PasswordInputField } from '@/components';
import '@/app/styles/login.css';

interface IChangePasswordForm {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const defaultValues = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const ChangePassword = () => {
  const t = useTranslations();
  const methods = useForm<IChangePasswordForm>({
    defaultValues,
  });
  const { handleSubmit } = methods;

  const onSubmit = async (data: IChangePasswordForm) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error(t('COMMON.PASSWORDS_DO_NOT_MATCH'));
      return;
    }

    try {
      dispatch(setLoading(true));
      const response = await userAxiosInstance.post(CHANGE_PASSWORD_API_URL, {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      });
      if (response.data.success) {
        toast.success(response.data.message || t('COMMON.SUCCESS'));
        methods.reset(defaultValues);
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            {['oldPassword', 'newPassword', 'confirmPassword'].map((field) => (
              <Col sm={4} key={field}>
                <PasswordInputField
                  name={field}
                  placeholder={t(`COMMON.${field.toUpperCase()}`)}
                  type="password"
                  required={true}
                  rules={{
                    minLength: {
                      value: 8,
                      message: t('COMMON.PASSWORD_AT_LEAST_EIGHT', {
                        label: t('COMMON.PASSWORD'),
                      }),
                    },
                  }}
                />
              </Col>
            ))}
            <Col sm={12}>
              <div className="input-box submit-row">
                <input type="submit" value={t('COMMON.SAVE_NEW_PASSWORD')} />
              </div>
            </Col>
          </Row>
        </Form>
      </FormProvider>
    </div>
  );
};

export default ChangePassword;
