'use client';
import '@/app/styles/login.css';
import '@/app/styles/modal-home.css';
import { InputField } from '@/components';
import { getAWSImageUrl } from '@/utils/common.utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';

export interface IHomeModelRes {
  _id: string;
  image: string;
  slug: string;
  is_form_enable: boolean;
  status: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  title: string;
  description: string;
}

interface IModelHomeProps {
  modelData: IHomeModelRes | null;
}

export default function ModalHome({ modelData }: IModelHomeProps) {
  const t = useTranslations();
  // const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async () => {
    // try {
    //   dispatch(setLoading(true));
    // } catch (error) {
    //   console.error(error);
    //   toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
    // } finally {
    //   dispatch(setLoading(false));
    // }
  };

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  // Automatically show modal after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 500); // Optional delay (500ms)
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <Modal show={show} onHide={handleClose} animation={false} className="entry-modal">
      <Button variant="secondary" onClick={handleClose} className="closed">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_773_821)">
            <rect width="24" height="24" rx="12" fill="black" />
            <path
              d="M7.05029 7.05023L16.9498 16.9497"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.05029 16.9498L16.9498 7.05027"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_773_821">
              <rect width="24" height="24" rx="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Button>
      <Modal.Body>
        <div className="entry-modal">
          <Row className="g-0">
            <Col xs={12} lg={6}>
              <div className="signupform">
                <h4>{modelData?.title ?? ''}</h4>
                <p>{modelData?.description}</p>
                {modelData?.is_form_enable && (
                  <FormProvider {...methods}>
                    <Form onSubmit={handleSubmit(onSubmit)} method="post">
                      <Form.Group className="form-control" controlId="homeModel">
                        <InputField
                          name="email"
                          label={''}
                          placeholder="xyz@gmail.com"
                          type="email"
                          required={false}
                        />
                      </Form.Group>
                      <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
                        <InputField
                          name="password"
                          label={''}
                          placeholder="Enter your password"
                          type={'password'}
                          required={false}
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
                      <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
                        <Button variant="primary" type="submit">
                          {t('COMMON.SEND')}
                        </Button>
                      </Form.Group>
                    </Form>
                  </FormProvider>
                )}
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <Image
                src={getAWSImageUrl(modelData?.image)}
                width={400}
                height={670}
                alt={'offer'}
                loading="lazy"
              />
            </Col>
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
}
