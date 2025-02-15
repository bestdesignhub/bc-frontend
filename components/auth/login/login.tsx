'use client';
import Link from 'next/link';
import { Button, Form } from 'react-bootstrap';
import '@/app/styles/login.css';
import { FormProvider, useForm } from 'react-hook-form';
import { EmailAtSign, InputField, PasswordLockIcon, PasswordUnLockIcon } from '../../common';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { COOKIES, MESSAGES, URL_SLUG, USER_ROUTES } from '@/constants';
import toast from 'react-hot-toast';
import userAxiosInstance from '@/config/userAxiosInstance';
import { SIGNIN_API_URL } from '@/constants/apis';
import Cookies from 'js-cookie';
import { useRouter, useSearchParams } from 'next/navigation';
import { pickProperties } from '@/utils/common.utils';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';

interface ISignInFormType {
  email: string;
  password: string;
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const t = useTranslations();
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: ISignInFormType) => {
    try {
      setDisableSubmit(true);
      dispatch(setLoading(true));
      // dispatch(setLoadingState(true));
      const loginResponse = await userAxiosInstance.post(SIGNIN_API_URL, {
        ...data,
        userType: 'user',
      });
      if (loginResponse.data.success) {
        toast.success(loginResponse.data.message || t(MESSAGES.SUCCESS));
        const result = loginResponse?.data?.data;
        const userData = pickProperties(result, [
          '_id',
          'first_name',
          'middle_name',
          'last_name',
          'gender',
          'email',
          'country_id',
          'profile_picture',
          'mobile_number',
        ]);
        Cookies.set(COOKIES['userToken'], result?.token);
        Cookies.set(COOKIES['user'], JSON.stringify(userData));
        if (searchParams.has(URL_SLUG.REDIRECT)) {
          const params = new URLSearchParams(searchParams);
          params.delete(URL_SLUG.REDIRECT);
          router.push(`${USER_ROUTES.measurements}?${params.toString()}`);
        } else {
          router.replace(`/`);
        }
      } else {
        toast.error(loginResponse.data.message || t(MESSAGES.SOMETHING_WENT_WRONG));
      }
    } catch (error) {
      console.error(error);
      toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
    } finally {
      // dispatch(setLoadingState(false));
      setDisableSubmit(false);
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="loginform-wrapper">
      <div className="container">
        <div className="login_title">
          <h1>{t('COMMON.LOG_IN').toUpperCase()}</h1>
          <p>
            {t('COMMON.NEED_AN_ACCOUNT')}?{' '}
            <Link href={USER_ROUTES.signup}>{t('COMMON.GET_STARTED')}!</Link>
          </p>
        </div>
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onSubmit)} method="post">
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <InputField
                name="email"
                label={t('COMMON.EMAIL_ADDRESS')}
                placeholder="xyz@gmail.com"
                type="email"
                required={true}
              />
              <div className="icon" onClick={() => setShowPassword(!showPassword)}>
                <EmailAtSign />
              </div>
            </Form.Group>
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <InputField
                name="password"
                label={t('COMMON.PASSWORD')}
                placeholder="Enter your password"
                type={showPassword ? 'text' : 'password'}
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
              <div className="icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <PasswordLockIcon /> : <PasswordUnLockIcon />}
              </div>
            </Form.Group>
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <Button variant="primary" type="submit" disabled={disableSubmit}>
                {t('COMMON.LOG_IN')}
              </Button>
            </Form.Group>
            <Form.Group className="form-control forgot-link" controlId="forgotForm.ControlInput">
              <p>
                <Link href={USER_ROUTES.forgotPassword}>
                  {t('FORGOT_PASSWORD.FORGOT_YOUR_PASSWORD')}?
                </Link>
              </p>
            </Form.Group>
            {/* <Form.Group className="form-control google-btn" controlId="googlebtnForm.ControlInput">
              <button className="google bordered">
                <Image src={'/images/google-icon.svg'} width={16} height={17} alt="google" />
                {t('COMMON.GOOGLE')}
              </button>
            </Form.Group> */}
          </Form>
        </FormProvider>
      </div>
    </div>
  );
}
