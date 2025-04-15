'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { Col, Row, Form } from 'react-bootstrap';
import { InfoIcon, InputField } from '@/components';
import userAxiosInstance from '@/config/userAxiosInstance';
import { USER_MEASUREMENT_ADD_URL, USER_MEASUREMENT_UPDATE_URL } from '@/constants/apis';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import toast from 'react-hot-toast';
import { useLocale, useTranslations } from 'next-intl';
import { MESSAGES, URL_SLUG } from '@/constants';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface Measurement {
  slug: string;
  name: Record<string, string>;
  info?: string;
  min?: number;
  max?: number;
}

interface MeasurementsFormProps {
  measurementProfile: any;
  measurementList: Measurement[];
  handleMeasurementFieldFocus: (slug: string) => void;
}

const cmToInches = (cm: number) => (cm ? (cm * 0.393701).toFixed(2) : '0.00');

export default function MeasurementsForm({
  measurementProfile,
  measurementList,
  handleMeasurementFieldFocus,
}: MeasurementsFormProps) {
  const methods = useForm();
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [disableSubmit, setDisableSubmit] = useState(false);
  const { handleSubmit, watch } = methods;
  const t = useTranslations();

  useEffect(() => {
    if (measurementProfile) {
      measurementProfile?.measurements?.forEach((measurement: any) => {
        methods.setValue(measurement.slug, measurement.value);
      });
      methods.setValue('notes', measurementProfile.notes);
      methods.setValue('profileName', measurementProfile.profileName);
    }
  }, [measurementProfile, methods]);

  const onSubmit = async (data: any) => {
    try {
      setDisableSubmit(true);
      dispatch(setLoading(true));

      const { profileName, notes, ...rest } = data;
      const result = measurementList
        .filter((item: any) => rest.hasOwnProperty(item.slug))
        .map((item) => ({
          slug: item.slug,
          name: item.name,
          value: rest[item.slug],
        }));

      const isEditData = searchParams.has(URL_SLUG.MEASUREMENT_PROFILE);
      const payload = {
        measurements: result,
        notes,
        profileName,
        ...(isEditData ? { _id: searchParams.get(URL_SLUG.MEASUREMENT_PROFILE) } : {}),
      };

      const response = await userAxiosInstance({
        url: isEditData ? USER_MEASUREMENT_UPDATE_URL : USER_MEASUREMENT_ADD_URL,
        method: isEditData ? 'PUT' : 'POST',
        data: payload,
      });

      if (response.data.success) {
        toast.success(t(MESSAGES.SUCCESS));
        methods.reset();
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      toast.error(t(MESSAGES.SOMETHING_WENT_WRONG));
    } finally {
      setDisableSubmit(false);
      dispatch(setLoading(false));
    }
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)} className="form-block-main">
        <div className="form-header-block">
          <div className="input-box-main">
            <div className="label-title">Profile Name</div>
            <InputField name="profileName" placeholder="Profile Name" required type="text" />
          </div>
        </div>

        <div className="tab-contain-block">
          <div className="tab-custom-form">
            <Row>
              {Array.isArray(measurementList) &&
                measurementList.map((measurement) => {
                  const valueInCm = Number(watch(measurement.slug) || '');
                  const valueInInches = cmToInches(valueInCm);
                  const name = measurement?.name?.[locale] ?? measurement?.name?.en;

                  return (
                    <Col sm={6} key={measurement.slug}>
                      <div className="input-box-cls">
                        <div className="input-title">{name}</div>
                        <div className="icon-with-input">
                          {measurement.info && (
                            <div className="i-icon">
                              <InfoIcon id={measurement.slug} title={measurement.info} />
                            </div>
                          )}
                          <div className="input-box-in flex">
                            <InputField
                              name={measurement.slug}
                              placeholder={`Enter ${name}`}
                              type="number"
                              onFocus={() => handleMeasurementFieldFocus(measurement.slug)}
                              required
                              rules={{
                                min:
                                  measurement.min !== undefined
                                    ? {
                                        value: measurement.min,
                                        message: `Minimum value is ${measurement.min}`,
                                      }
                                    : undefined,
                                max:
                                  measurement.max !== undefined
                                    ? {
                                        value: measurement.max,
                                        message: `Maximum value is ${measurement.max}`,
                                      }
                                    : undefined,
                              }}
                            />
                            {valueInCm !== 0 && (
                              <span className="ml-2 text-xs text-gray-600">
                                ({valueInInches} inches)
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}

              <Col sm={6}>
                <div className="input-box-cls">
                  <div className="input-title">Notes</div>
                  <div className="icon-with-input">
                    <div className="i-icon" />
                    <div className="input-box-in">
                      <InputField name="notes" placeholder="Enter notes" type="text" />
                    </div>
                  </div>
                </div>
              </Col>

              <Col sm={12}>
                <div className="input-box-cls submit-btn">
                  <button disabled={disableSubmit} type="submit">
                    Save your profile
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Form>
    </FormProvider>
  );
}
