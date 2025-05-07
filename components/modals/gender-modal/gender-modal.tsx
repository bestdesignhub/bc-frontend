'use client';

import { URL_SLUG, USER_ROUTES } from '@/constants';
import { DropDownOptionType } from '@/types';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { Modal } from 'react-bootstrap';

const GenderModal = (props: {
  show: boolean;
  handleClose: () => void;
  genders: DropDownOptionType[];
  urlQueryString?: string;
  redirectRoute?: string;
  handleSelect?: (value: string) => void;
  message?: string;
}) => {
  // const t = useTranslations();
  const {
    show,
    handleClose,
    genders,
    urlQueryString,
    redirectRoute = USER_ROUTES.measurements,
    handleSelect
  } = props;
  const searchParams = useSearchParams();
  const queryString = urlQueryString || new URLSearchParams(searchParams).toString();
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN_URL || '';

  return (
    <Modal show={show} onHide={handleClose} animation={false} centered className='customize-gender-model'>
      <div className='model-gender-upper-block'>
        <div className="modal-block-main model-gender-inner-block">
          <div className="modal-block-top">
            <div className="modal-left-top">
              {/* <h5>{message}:</h5> */}
            </div>
          </div>
          <div className="d-flex" style={{ justifyContent: 'center', userSelect: 'none' }}>
            <div className="d-flex gap-3">
              {genders.map((gender) => {
                const backgroundImage = `url(${domain}/images/${gender.label === 'Men' ? 'men-img.jpg' : 'women-img.jpg'})`;
                if (handleSelect) {
                  return (
                    <div
                      key={gender.value}
                      style={{
                        width: '225px',
                        height: '300px',
                        backgroundImage: backgroundImage,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        handleSelect?.(gender.value);
                      }}
                    >
                      <div className="title">
                        <h6 className='genderLable'>{gender.label}</h6>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={gender.label}
                    href={`${redirectRoute}?${queryString}${!!queryString.length ? `&` : ``}${URL_SLUG.GENDER}=${gender.value}`}
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
      </div>
    </Modal>
  );
};

export default GenderModal;
