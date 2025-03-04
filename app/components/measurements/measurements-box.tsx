'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { COOKIES, URL_SLUG, USER_ROUTES } from '@/constants';
import Cookies from 'js-cookie';
import MeasurementAddToCartButton from './add-to-cart-button';
import { DropDownOptionType } from '@/types';
import SelectRegularSize from './select-regular-size';
import SelectYourMeasurementProfile from './select-your-measurement-profile';

export default function MeasurementsBox({
  fittingName,
  availableSizes,
  steps,
  productTypeId,
  measurementProfiles,
}: {
  fittingName: string;
  availableSizes: any[];
  steps: any[];
  productTypeId: string;
  measurementProfiles: DropDownOptionType[];
}) {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const fittingSize = searchParams.get(URL_SLUG.FITTING_SIZE);
  const queryString = useMemo(() => new URLSearchParams(searchParams).toString(), [searchParams]);
  const measurementProfile = searchParams.get(URL_SLUG.MEASUREMENT_PROFILE);

  const selectedFittingSize = useMemo(() => {
    if (fittingSize) {
      return availableSizes.find((size) => size._id === fittingSize)?.name;
    }
    return availableSizes?.at(0)?.name ?? 'XS';
  }, [fittingSize, availableSizes]);

  const userToken = Cookies.get(COOKIES.userToken);

  const selectedMeasurementProfile = useMemo(() => {
    return measurementProfiles?.find((profile: any) => profile.value === measurementProfile)?.label;
  }, [measurementProfile, measurementProfiles]);
  const addMeasurementQueryString = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    if (params.has(URL_SLUG.MEASUREMENT_PROFILE)) {
      params.delete(URL_SLUG.MEASUREMENT_PROFILE);
    }
    return params.toString();
  }, [searchParams]);

  return (
    <>
      <div className="measurements-right-sub">
        <h4>{t('COMMON.CHOOSE_YOUR_SWEATER_SIZE')}</h4>
        <p>{t('COMMON.CHOOSE_YOUR_SWEATER_SIZE_DESCRIPTION')}</p>
        <div className="add-btn-set">
          <div
            className="add-btn"
            style={
              !userToken
                ? {
                    pointerEvents: 'none',
                    userSelect: 'none',
                    backgroundColor: 'var(--bsp-black-20)',
                  }
                : {}
            }
          >
            <Link
              style={!userToken ? { backgroundColor: 'var(--bsp-black-20)' } : {}}
              href={`${USER_ROUTES.measurementProfile}?${addMeasurementQueryString}`}
            >
              Add a new measurements profile
            </Link>
          </div>
          {!userToken && (
            <span style={{ color: 'red' }}>
              Please login first to add a new measurement profile
            </span>
          )}
          {!!measurementProfiles.length && (
            <>
              <SelectYourMeasurementProfile measurementProfiles={measurementProfiles} />
              {selectedMeasurementProfile && (
                <div className="custom-size" style={{ marginTop: '10px' }}>
                  {t('COMMON.SELECTED_MEASUREMENT_PROFILE')}
                  <div className="checkbox">
                    <label htmlFor="one">{selectedMeasurementProfile}</label>
                  </div>
                </div>
              )}
            </>
          )}
          <div className="or-text">or</div>
          <SelectRegularSize
            availableSizes={availableSizes}
            fittingName={fittingName}
            selectedFittingSize={selectedFittingSize}
          />
        </div>

        <div className="measurements-login-link">
          {userToken ? (
            <MeasurementAddToCartButton
              steps={steps}
              productTypeId={productTypeId}
              defaultFittingSize={availableSizes?.at(0)?._id}
            />
          ) : (
            <>
              <span>{t('COMMON.ALREADY_A_CUSTOMER')}?</span>
              <div className="login-link-sub">
                <Link
                  href={`${USER_ROUTES.signin}?${queryString}&${URL_SLUG.REDIRECT}=measurements`}
                >
                  {t('COMMON.LOG_IN')}
                </Link>
              </div>
              <span>
                {t('COMMON.DONT_HAVE_AN_ACCOUNT')}?{' '}
                <Link
                  href={`${USER_ROUTES.signup}?${queryString}&${URL_SLUG.REDIRECT}=measurements`}
                >
                  {t('COMMON.REGISTER')}
                </Link>
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
}
