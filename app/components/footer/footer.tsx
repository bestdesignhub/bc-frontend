import '@/app/styles/footer.css';
import { USER_ROUTES } from '@/constants';
import { ISettings } from '@/types';
import { getAWSImageUrl } from '@/utils/common.utils';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';

export default async function Footer({ settings }: { settings?: ISettings }) {
  const t = await getTranslations();
  return (
    <div className="footer">
      <Row>
        <Col xs={12} lg={6} xl={4}>
          <div className="footerbox">
            <div className="footer_logo">
              <Link href={'/'}>
                <Image src={getAWSImageUrl(settings?.logo)} width={90} height={100} alt="Bespoke" />
              </Link>
            </div>
            <p>{settings?.footer_description ?? ''}</p>
            <div className="social">
              <ul>
                {settings?.social_media?.map((social) => (
                  <li key={`${social?.uuid}-${social?.link}`}>
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
          </div>
        </Col>
        <Col xs={12} lg={6} xl={8}>
          <Row className="justify-content-between">
            <Col xs={12} md={4} xl={2}>
              <div className="footerbox">
                <h5>Menu</h5>
                <ul>
                  <li>
                    <Link href={USER_ROUTES.women}>{t('COMMON.WOMEN')}</Link>
                  </li>
                  <li>
                    <Link href={USER_ROUTES.men}>{t('COMMON.MEN')}</Link>
                  </li>
                  <li>
                    <Link href={USER_ROUTES.shop}>{t('COMMON.SHOP')}</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={4} xl={2}>
              <div className="footerbox">
                <h5>Explore</h5>
                <ul>
                  <li>
                    <Link href={'/'}>Search</Link>
                  </li>
                  <li>
                    <Link href={'/'}>New In</Link>
                  </li>
                  <li>
                    <Link href={USER_ROUTES?.ourStory}>{t('COMMON.OUR_STORY')}</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={4} xl={2}>
              <div className="footerbox">
                <h5>Support</h5>
                <ul>
                  <li>
                    <Link href={'/'}>{t('COMMON.CONTACT_US')}</Link>
                  </li>
                  <li>
                    <Link href={'/'}>Returns Policy</Link>
                  </li>
                  <li>
                    <Link href={'/'}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href={'/'}>Terms of use</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={12} xl={5}>
              <div className="footerbox contact">
                <h5>{t('COMMON.CONTACT_US')}</h5>
                <ul>
                  <li>
                    <div className="icon">
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 16.8498H5.5C2.8 16.8498 1 15.4998 1 12.3498V6.0498C1 2.8998 2.8 1.5498 5.5 1.5498H14.5C17.2 1.5498 19 2.8998 19 6.0498V12.3498C19 15.4998 17.2 16.8498 14.5 16.8498Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.5 6.50098L11.683 8.75098C10.756 9.48898 9.235 9.48898 8.308 8.75098L5.5 6.50098"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <Link href={`mailto:${settings?.email}`}>{settings?.email ?? ''}</Link>
                  </li>
                  <li>
                    <div className="icon">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.28955 5.77522V15.5055C1.28955 17.4055 2.63959 18.1856 4.27963 17.2455L6.6297 15.9055C7.13971 15.6155 7.98974 15.5855 8.51975 15.8555L13.7699 18.4856C14.2999 18.7456 15.1499 18.7256 15.66 18.4356L19.9901 15.9555C20.5401 15.6355 21.0001 14.8555 21.0001 14.2155V4.48518C21.0001 2.58513 19.6501 1.80511 18.01 2.74513L15.66 4.08517C15.1499 4.37518 14.2999 4.40518 13.7699 4.13517L8.51975 1.5151C7.98974 1.25509 7.13971 1.27509 6.6297 1.5651L2.29958 4.04517C1.73956 4.36518 1.28955 5.1452 1.28955 5.77522Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.56006 1.99609V14.9965"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.7305 4.61426V17.9946"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <Link href={'/'}>{settings?.address ?? ''}</Link>
                  </li>
                  <li>
                    <div className="icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.973 15.6974C18.973 16.0214 18.901 16.3544 18.748 16.6784C18.595 17.0024 18.397 17.3084 18.136 17.5964C17.6949 18.0824 17.2089 18.4334 16.6599 18.6585C16.1199 18.8835 15.5349 19.0005 14.9049 19.0005C13.9868 19.0005 13.0058 18.7845 11.9708 18.3434C10.9358 17.9024 9.90074 17.3084 8.87471 16.5614C7.83969 15.8054 6.85866 14.9684 5.92264 14.0413C4.99561 13.1053 4.15859 12.1243 3.41157 11.0983C2.67355 10.0722 2.07954 9.04621 1.64753 8.02918C1.21552 7.00315 0.999512 6.02213 0.999512 5.08611C0.999512 4.47409 1.10751 3.88907 1.32352 3.34906C1.53953 2.80005 1.88153 2.29603 2.35855 1.84602C2.93456 1.27901 3.56458 1 4.2306 1C4.4826 1 4.73461 1.054 4.95961 1.162C5.19362 1.27001 5.40063 1.43201 5.56263 1.66602L7.65068 4.60909C7.81269 4.8341 7.92969 5.0411 8.01069 5.23911C8.09169 5.42811 8.1367 5.61712 8.1367 5.78812C8.1367 6.00413 8.07369 6.22013 7.94769 6.42714C7.83069 6.63414 7.65968 6.85015 7.44368 7.06616L6.75966 7.77717C6.66066 7.87618 6.61566 7.99318 6.61566 8.13718C6.61566 8.20919 6.62466 8.27219 6.64266 8.34419C6.66966 8.41619 6.69666 8.47019 6.71466 8.52419C6.87666 8.8212 7.15567 9.20821 7.55168 9.67622C7.95669 10.1442 8.3887 10.6212 8.85671 11.0983C9.34273 11.5753 9.81074 12.0163 10.2878 12.4213C10.7558 12.8173 11.1428 13.0873 11.4488 13.2493C11.4938 13.2673 11.5478 13.2943 11.6108 13.3213C11.6828 13.3483 11.7548 13.3573 11.8358 13.3573C11.9888 13.3573 12.1058 13.3033 12.2048 13.2043L12.8888 12.5293C13.1138 12.3043 13.3298 12.1333 13.5368 12.0253C13.7438 11.8993 13.9508 11.8363 14.1759 11.8363C14.3469 11.8363 14.5269 11.8723 14.7249 11.9533C14.9229 12.0343 15.1299 12.1513 15.3549 12.3043L18.334 14.4193C18.568 14.5813 18.73 14.7704 18.829 14.9954C18.919 15.2204 18.973 15.4454 18.973 15.6974Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M15.8498 7.2995C15.8498 6.75948 15.4268 5.93146 14.7968 5.25644C14.2207 4.63543 13.4557 4.14941 12.6997 4.14941"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.9999 7.30016C18.9999 3.81707 16.1828 1 12.6997 1"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <Link href={`tel:${settings?.phone_number}`}>
                      {settings?.country_code ? `${settings?.country_code} - ` : ''}
                      {settings?.phone_number ?? ''}
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
