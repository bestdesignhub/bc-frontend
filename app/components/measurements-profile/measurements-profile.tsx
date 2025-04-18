'use client';

import '@/app/styles/Measurements-profile.css';

import Measurementsform from './measurements-form';
import { useState } from 'react';
import { getAWSImageUrl } from '@/utils/common.utils';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import userAxiosInstance from '@/config/userAxiosInstance';
import { USER_MEASUREMENT_SLUG_URL } from '@/constants/apis';
import { MESSAGES } from '@/constants';
import toast from 'react-hot-toast';
import { useTranslations } from 'next-intl';

export default function MeasurementProfileComponent({
  userMeasurementBySlug,
  measurementProfile,
  userMeasurementActiveList,
}: {
  userMeasurementBySlug: any;
  measurementProfile: any;
  userMeasurementActiveList: any[];
}) {
  const t = useTranslations();
  const [measurementDetails, setMeasurementDetails] = useState(userMeasurementBySlug);
  const handleMeasurementFieldFocus = async (slug: string) => {
    if (measurementDetails.slug !== slug) {
      try {
        dispatch(setLoading(true));
        const response = await userAxiosInstance.get(`${USER_MEASUREMENT_SLUG_URL}/${slug}`);
        if (response.data.success) {
          const result = response?.data?.data ?? {};
          setMeasurementDetails(result);
        }
      } catch (error) {
        console.error(error);
        toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
      } finally {
        dispatch(setLoading(false));
      }
    }
  };
  return (
    <>
      <div className="measurements-page">
        <div className="measurements-block">
          <div className="measurements-left">
            <div className="measurements-left-sub">
              <h4>{measurementDetails?.title ?? ''}</h4>
              <p style={{ whiteSpace: 'pre-wrap' }}>{measurementDetails?.description ?? ''}</p>
              <video
                controls
                src={getAWSImageUrl(measurementDetails?.video)}
                width="100%"
                style={{ marginTop: '25px' }}
              />
            </div>
          </div>
          <div className="measurements-right">
            <Measurementsform
              measurementProfile={measurementProfile}
              measurementList={userMeasurementActiveList}
              handleMeasurementFieldFocus={handleMeasurementFieldFocus}
            />
          </div>
        </div>
      </div>
      {/* <Customisebreadcrumb /> */}
    </>
  );
}
