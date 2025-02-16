import { URL_SLUG, USER_ROUTES } from '@/constants';
import { DropDownOptionType } from '@/types';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { Modal } from 'react-bootstrap';

const GenderModal = (props: {
  show: boolean;
  handleClose: () => void;
  genders: DropDownOptionType[];
  urlQueryString?: string;
  url?: string;
}) => {
  const { show, handleClose, genders, urlQueryString, url } = props;
  const t = useTranslations();
  const searchParams = useSearchParams();
  const queryString = urlQueryString || new URLSearchParams(searchParams).toString();

  return (
    <Modal show={show} onHide={handleClose} animation={false} centered>
      <div className="modal-block-main">
        <div className="modal-block-top">
          <div className="modal-left-top">
            <h5>{t('COMMON.SELECT_GENDER')}</h5>
          </div>
        </div>
        <div className="d-flex" style={{ justifyContent: 'center', userSelect: 'none' }}>
          <div className="d-flex gap-3">
            {genders.map((gender) => {
              return (
                <Link
                  key={gender.label}
                  href={
                    url
                      ? url
                      : `${USER_ROUTES.measurements}?${queryString}&${URL_SLUG.GENDER}=${gender.value}`
                  }
                >
                  <div
                    style={{
                      border: '1px solid var(--bsp-black)',
                      padding: '12px 14px',
                      cursor: 'pointer',
                    }}
                  >
                    <div className="title">
                      <h6 style={{ color: 'var(--bsp-black)' }}>{gender.label}</h6>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GenderModal;
