import { MeasurementProfileComponent } from '@/app/components/measurements-profile';
import { URL_SLUG } from '@/constants';
import {
  getMeasurementProfileById,
  getUserMeasurementActive,
  getUserMeasurementBySlug,
} from '@/utils/server-api.utils';

export default async function MeasurementProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const measurementProfileId = resolvedSearchParams[URL_SLUG.MEASUREMENT_PROFILE];

  const promises = [getUserMeasurementActive(), getUserMeasurementBySlug()];

  if (measurementProfileId) {
    promises.push(getMeasurementProfileById(measurementProfileId));
  }

  const results = await Promise.allSettled(promises);

  const userMeasurementActive = results[0].status === 'fulfilled' ? results[0].value : [];

  const userMeasurementBySlug = results[1].status === 'fulfilled' ? results[1].value : [];

  const measurementProfile = measurementProfileId
    ? results[2]?.status === 'fulfilled'
      ? results[2].value
      : []
    : [];

  return (
    <>
      <MeasurementProfileComponent
        userMeasurementBySlug={userMeasurementBySlug}
        userMeasurementActiveList={userMeasurementActive}
        measurementProfile={measurementProfile}
      />
    </>
  );
}
