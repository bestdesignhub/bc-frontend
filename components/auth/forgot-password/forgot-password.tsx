'use client';
import '@/app/styles/login.css';
import { EmailAtSign, InputField } from '@/components/common';
import BannerWrapper from '@/components/common/banner/BannerWrapper';
import { MESSAGES, USER_ROUTES } from '@/constants';
import {
  REQUEST_FORGOT_PASSWORD_LINK_URL,
  REQUEST_FORGOT_PASSWORD_SET_LINK_URL,
} from '@/constants/apis';
import { handleApiCall } from '@/utils/common.utils';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface IForgotPasswordFormType {
  email: string;
  password?: string;
  confirmPassword?: string;
}

export default function ForgotPassword({ token }: { token?: string }) {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const t = useTranslations();
  const router = useRouter();
  const methods = useForm<IForgotPasswordFormType>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { handleSubmit, watch } = methods;

  // Watch password and confirm password to validate them
  const password = watch('password');
  watch('confirmPassword');

  const onSubmit = async (data: IForgotPasswordFormType) => {
    try {
      setDisableSubmit(true);
      let apiResponse: any;

      // API call depending on whether token exists
      if (token) {
        apiResponse = await handleApiCall(
          REQUEST_FORGOT_PASSWORD_SET_LINK_URL,
          'POST',
          {
            newPassword: data.password,
          },
          { Authorization: token }
        );
      } else {
        apiResponse = await handleApiCall(REQUEST_FORGOT_PASSWORD_LINK_URL, 'POST', {
          email: data.email,
          user_type: 'user',
        });
      }

      if (apiResponse?.success) {
        toast.success(apiResponse?.message || t(MESSAGES.SUCCESS));
        if (token) router?.push(`${USER_ROUTES.signin}`);
      } else {
        toast.error(apiResponse?.message || t(MESSAGES.SOMETHING_WENT_WRONG));
      }
    } catch (error) {
      console.error(error);
      toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
    } finally {
      setDisableSubmit(false);
    }
  };

  return (
    <BannerWrapper>
      <div className="loginform-wrapper">
        <div className="container">
          <div className="login_title">
            <h1>{t(token ? 'SET_NEW_PASSWORD.TITLE' : 'FORGOT_PASSWORD.TITLE')}</h1>
          </div>
          <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(onSubmit)} method="post">
              {!token && (
                <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
                  <InputField
                    name="email"
                    label={t('COMMON.EMAIL_ADDRESS')}
                    placeholder="xyz@gmail.com"
                    type="email"
                    required={true}
                  />
                  <div className="icon">
                    <EmailAtSign />
                  </div>
                </Form.Group>
              )}

              {token && (
                <>
                  <Form.Group className="form-control" controlId="passwordForm.ControlInput">
                    <InputField
                      name="password"
                      label={t('COMMON.PASSWORD')}
                      type="password"
                      required={true}
                    />
                  </Form.Group>
                  <Form.Group className="form-control" controlId="confirmPasswordForm.ControlInput">
                    <InputField
                      name="confirmPassword"
                      label={t('COMMON.CONFIRM_PASSWORD')}
                      type="password"
                      required={true}
                      rules={{
                        validate: (value: string) =>
                          value === password || t('COMMON.PASSWORDS_DO_NOT_MATCH'),
                      }}
                    />
                  </Form.Group>
                </>
              )}

              <Form.Group className="form-control" controlId="submitForm.ControlInput">
                <Button variant="primary" type="submit" disabled={disableSubmit}>
                  {t('COMMON.SUBMIT')}
                </Button>
              </Form.Group>

              {!token && (
                <Form.Group className="form-control forgot-link" controlId="forgotForm.ControlInput">
                  <p>
                    <Link href={USER_ROUTES.signin}>{t('COMMON.LOG_IN')}</Link>
                  </p>
                </Form.Group>
              )}
            </Form>
          </FormProvider>
        </div>
      </div>
    </BannerWrapper>
  );
}
