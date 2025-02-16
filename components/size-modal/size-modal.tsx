'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import '@/app/styles/modal-size.css';
import { useTranslations } from 'next-intl';
import { SITE_SETTINGS, URL_SLUG, USER_ROUTES } from '@/constants';
import { getAWSImageUrl } from '@/utils/common.utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { dispatch } from '@/lib/redux/store';
import { setIsPageSwitchLoading } from '@/lib/redux/slices/loaderSlice';

const SizeModal = (props: { show: boolean; yarnDetails?: any; handleClose: () => void }) => {
  const { show, handleClose, yarnDetails } = props;
  const t = useTranslations();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSelect = useCallback(() => {
    if (yarnDetails?._id) {
      const edit = searchParams?.get(URL_SLUG.EDIT);
      const change = searchParams?.get(URL_SLUG.CHANGE);
      if (change === 'true') {
        const params = new URLSearchParams(searchParams.toString());
        params.delete(URL_SLUG.YARN);
        params.delete(URL_SLUG.CHANGE);
        for (const key of Array.from(params.keys())) {
          if (key.startsWith('_')) {
            params.delete(key);
          }
        }
        const queryString = params.toString();
        router.push(
          `${USER_ROUTES.sweater}/last-step?${URL_SLUG.YARN}=${yarnDetails?._id}&${queryString}`
        );
        return;
      } else {
        router.push(
          `${USER_ROUTES.sweater}/2?${URL_SLUG.YARN}=${yarnDetails?._id}${edit ? `&${URL_SLUG.EDIT}=${edit}` : ''}`
        );
      }
    }
  }, [yarnDetails?._id, router, searchParams]);

  return (
    <>
      <Modal className="sizemodal" show={show} onHide={handleClose} animation={false} centered>
        <div className="modal-block-main">
          <div className="modal-block-top">
            <div className="modal-left-top">
              <h5>{yarnDetails?.name}</h5>
              <div className="name">
                {t('COMMON.NAME')}:{' '}
                <span>
                  {yarnDetails?.name} - {yarnDetails?.yarnId}
                </span>
              </div>
            </div>
            <div className="modal-right-top">
              {/* <div className="i-icon">
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <rect
                      x="1.6198"
                      y="1.98986"
                      width="28.7607"
                      height="28.7607"
                      rx="14.3804"
                      stroke="#377DD7"
                      stroke-width="2.61461"
                    />
                    <path
                      d="M18.9944 13.0144L14.2029 13.6746L14.0306 14.5505L14.9744 14.74C15.5877 14.9008 15.7101 15.144 15.5746 15.8173L14.0306 23.7957C13.6265 25.8587 14.2517 26.8287 15.722 26.8287C16.8619 26.8287 18.1849 26.2495 18.7852 25.4534L18.9694 24.4964C18.5534 24.9017 17.94 25.0638 17.5359 25.0638C16.9594 25.0638 16.7514 24.6193 16.8988 23.8363L18.9944 13.0144ZM19.1394 8.21266C19.1394 8.51481 19.0853 8.81401 18.9801 9.09316C18.875 9.37231 18.7209 9.62596 18.5266 9.83961C18.3324 10.0533 18.1018 10.2227 17.8479 10.3384C17.5941 10.454 17.3221 10.5135 17.0474 10.5135C16.7726 10.5135 16.5006 10.454 16.2468 10.3384C15.993 10.2227 15.7624 10.0533 15.5681 9.83961C15.3738 9.62596 15.2197 9.37231 15.1146 9.09316C15.0095 8.81401 14.9554 8.51481 14.9554 8.21266C14.9554 7.60244 15.1758 7.0172 15.5681 6.58571C15.9604 6.15422 16.4925 5.9118 17.0474 5.9118C17.6022 5.9118 18.1343 6.15422 18.5266 6.58571C18.919 7.0172 19.1394 7.60244 19.1394 8.21266Z"
                      fill="#377DD7"
                    />
                  </svg>
                </Link>
              </div> */}
              <div className="price">
                {/* <span className="old-price">$60.00</span> */}
                <span className="new-price">
                  {SITE_SETTINGS.CURRENCY}
                  {yarnDetails?.price}
                </span>
              </div>
              <div className="button-set-close">
                <div className="select-btn" onClick={handleSelect}>
                  <Link href="#">{t('COMMON.SELECT')}</Link>
                </div>
                <div className="close-btn">
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClose();
                    }}
                  >
                    CLOSE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-block-bottom">
            <div className="modal-left-pro">
              <Image src={getAWSImageUrl(yarnDetails?.image)} alt="" width={170} height={170} />
            </div>
            <div className="modal-bottom-right">
              <div className="modal-row">
                <ul>
                  <li>
                    <div className="icon-text">
                      <span>{t('COMMON.GENDER')}:</span>
                    </div>
                    <div className="bg-text">{yarnDetails?.gender}</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <span>{t('COMMON.MATERIAL')}:</span>
                    </div>
                    <div className="bg-text">{yarnDetails?.material}</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <span>{t('COMMON.COLOUR')}:</span>
                    </div>
                    <div className="bg-text">{yarnDetails?.colour}</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <span>{t('COMMON.SEASONALITY')}:</span>
                    </div>
                    <div className="bg-text">{yarnDetails?.seasonality}</div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <span>{t('COMMON.PERCEIVED_WEIGHT')}:</span>
                    </div>
                    <div className="bg-text">{yarnDetails?.perceivedWeight}</div>
                  </li>
                </ul>
              </div>
              <div className="modal-row">
                <ul>
                  {yarnDetails?.yarns?.map((yarn: any, index: number) => (
                    <li key={index}>
                      <div className="icon-text">
                        {yarn.image && (
                          <i>
                            <Image
                              src={getAWSImageUrl(yarn.image)}
                              alt={yarn.name}
                              width={24}
                              height={24}
                            />
                          </i>
                        )}
                        <span>{yarn.name}</span>
                      </div>
                      <div className="bg-text">{yarn.value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

SizeModal.displayName = 'SizeModal';

export default SizeModal;
