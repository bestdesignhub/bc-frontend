'use client';
import '@/app/styles/keep-connect.css';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { ISettings } from '@/types';
import { useTranslations } from 'next-intl';
import { getAWSImageUrl } from '@/utils/common.utils';
export default function KeepConnect({ settings }: { settings?: ISettings }) {
  const t = useTranslations();
  return (
    <div className="keepconnect-wrapper">
      <Row className="g-0">
        <Col xs={12} lg={5}>
          <div className="newsletter">
            <h3>{t('KEEP_CONNECTED.TITLE')}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form>
              <Form.Group className="form-control" controlId="newsletterForm.ControlInput">
                <Form.Control type="email" placeholder="name@example.com" />
                <Button variant="primary" type="submit">
                  Send
                  <span>
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8893 15.2522C11.6633 15.2522 11.4372 15.1745 11.2588 15.008C10.9137 14.6861 10.9137 14.1534 11.2588 13.8315L17.8496 7.68269L11.2588 1.53386C10.9137 1.21199 10.9137 0.67924 11.2588 0.357369C11.6038 0.0354992 12.1748 0.0354992 12.5198 0.357369L19.7412 7.09445C20.0862 7.41632 20.0862 7.94907 19.7412 8.27094L12.5198 15.008C12.3414 15.1745 12.1153 15.2522 11.8893 15.2522Z"
                        fill="white"
                      />
                      <path
                        d="M17.7745 8.63019H1.22544C0.555532 8.63019 0 8.20133 0 7.68417C0 7.16702 0.555532 6.73816 1.22544 6.73816H17.7745C18.4444 6.73816 19 7.16702 19 7.68417C19 8.20133 18.4444 8.63019 17.7745 8.63019Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </Button>
              </Form.Group>
              {/* <Form.Group className="form-control checkbox">
                <Form.Check
                  inline
                  label="Lorem ipsum dolor sit amet."
                  name="group1"
                  type="checkbox"
                  id="1"
                />
              </Form.Group> */}
            </form>
          </div>
          <div className="social">
            <p>Follow us on social media</p>
            <ul>
              {settings?.social_media?.map((social) => (
                <li key={`${social?.uuid}-${social?.image}`}>
                  <Link href={social?.link}>
                    <Image
                      src={getAWSImageUrl(social?.image)}
                      width={30}
                      height={30}
                      alt="social-logo"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col xs={12} lg={7}>
          <div className="image">
            <Image
              src={'/images/keep-connect-img.png'}
              alt={'keep connect'}
              width={1001}
              height={584}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
