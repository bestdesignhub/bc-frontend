'use client';
import '@/app/styles/login.css';
import { InputField, SelectField } from '@/components/common';
import userAxiosInstance from '@/config/userAxiosInstance';
import { COOKIES, MESSAGES, URL_SLUG, USER_ROUTES } from '@/constants';
import { REGISTARTION_URL } from '@/constants/apis';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { dispatch } from '@/lib/redux/store';
import { DropDownOptionType } from '@/types';
import { pickProperties } from '@/utils/common.utils';
import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface ISignUpFormType {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
  news_letter: boolean;
  mobile_number: string;
  gender_id: string;
  country_id: string;
  weight: string;
  height: string;
}

interface ISignUpForm {
  countries: any;
  genderList: DropDownOptionType[];
}
export default function SignUp({ countries, genderList }: ISignUpForm) {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();
  const methods = useForm<ISignUpFormType>({
    defaultValues: {
      email: '',
      first_name: '',
      last_name: '',
      middle_name: '',
      news_letter: false,
      mobile_number: '',
      country_id: '',
      password: '',
      gender_id: '',
      weight: '',
      height: '',
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: ISignUpFormType) => {
    try {
      setDisableSubmit(true);
      dispatch(setLoading(true));
      const registrationResponse = await userAxiosInstance.post(REGISTARTION_URL, {
        ...data,
        user_type: 'user',
      });
      if (registrationResponse.data.success) {
        toast.success(registrationResponse.data.message || t(MESSAGES.SUCCESS));
        const result = registrationResponse?.data?.data;
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
        toast.error(registrationResponse.data.message || t(MESSAGES.SOMETHING_WENT_WRONG));
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
          <h1>{t('SIGNUP.TITLE')}</h1>
          {/* <p>
            {t('SIGNUP.TITLE')}? <Link href={'/'}>{t('COMMON.GET_STARTED')}!</Link>
          </p> */}
        </div>
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
            {genderList && (
              <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
                <SelectField
                  name="gender_id"
                  label={t('COMMON.GENDER')}
                  options={genderList}
                  required={true}
                  isSearchable={false}
                  placeholder={t('COMMON.GENDER')}
                />
              </Form.Group>
            )}
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <InputField
                name="email"
                label={t('COMMON.EMAIL_ADDRESS')}
                placeholder="xyz@gmail.com"
                type="email"
                required={true}
              />
            </Form.Group>
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <InputField
                name="password"
                label={t('COMMON.PASSWORD')}
                placeholder={t('COMMON.PASSWORD')}
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
            </Form.Group>
            {countries && (
              <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
                <SelectField
                  name="country_id"
                  label={t('COMMON.CODE')}
                  options={countries}
                  required={true}
                />
              </Form.Group>
            )}
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <InputField
                name="mobile_number"
                label={t('COMMON.MOBILE_NUMBER')}
                placeholder={t('COMMON.MOBILE_NUMBER')}
                type="text"
                required={true}
                // rules={{
                //   pattern: {
                //     value: /^[6-9]\d{9}$/,
                //     message: t('VALIDATIONS.VALIDATE_MOBILE_NUMBER'),
                //   },
                // }}
              />
            </Form.Group>
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <InputField
                name="weight"
                label={`${t('COMMON.WEIGHT')} (kg)`}
                placeholder={`${t('COMMON.WEIGHT')} (kg)`}
                type="text"
                rules={{
                  pattern: {
                    value: /^[0-9]+$/,
                    message: t('VALIDATIONS.ONLY_NUMBER'),
                  },
                }}
              />
            </Form.Group>
            <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
              <InputField
                name="height"
                label={`${t('COMMON.HEIGHT')} (cm)`}
                placeholder={`${t('COMMON.HEIGHT')} (cm)`}
                type="text"
                rules={{
                  pattern: {
                    value: /^[0-9]+$/,
                    message: t('VALIDATIONS.ONLY_NUMBER'),
                  },
                }}
              />
            </Form.Group>
            <Form.Group className="form-control full" controlId="newsletterForm.ControlInput">
              <Button variant="primary" type="submit" disabled={disableSubmit}>
                {t('SIGNUP.TITLE')}
              </Button>
            </Form.Group>
            <Form.Group
              className="form-control login-link full"
              controlId="forgotForm.ControlInput"
            >
              <p>
                {t('SIGNUP.ALREADY_HAVE_ACCOUNT')}?{' '}
                <Link href={USER_ROUTES.signin}>{t('SIGNUP.LOGIN')}!</Link>
              </p>
            </Form.Group>
            {/* <Form.Group
              className="form-control google-btn full"
              controlId="googlebtnForm.ControlInput"
            >
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
