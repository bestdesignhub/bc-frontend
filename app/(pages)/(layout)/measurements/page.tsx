import Measurements from '@/app/components/measurements/measurements'; // Default import
import { URL_SLUG } from '@/constants';
import {
  getAvailableSizes,
  getDefaultProductType,
  getFittingStepDetails,
  getMeasurementProfiles,
  getStepTypesList,
} from '@/utils/server-api.utils';

export default async function Measurementspage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const productType = await getDefaultProductType();
  const [stepsResult, availableSizesResult, fittingStepDetailsResult, measurementProfileResult] =
    await Promise.allSettled([
      getStepTypesList(productType?._id),
      getAvailableSizes(),
      getFittingStepDetails({ id: resolvedSearchParams[URL_SLUG.FITTING] }),
      getMeasurementProfiles(),
    ]);
  const steps = stepsResult.status === 'fulfilled' ? stepsResult.value : [];
  const availableSizes =
    availableSizesResult.status === 'fulfilled' ? availableSizesResult.value : [];
  const fittingStepDetails =
    fittingStepDetailsResult.status === 'fulfilled' ? fittingStepDetailsResult.value : [];
  const measurementProfiles =
    measurementProfileResult.status === 'fulfilled' ? measurementProfileResult.value : [];

  return (
    <>
      <Measurements
        fittingName={fittingStepDetails?.title}
        productTypeId={productType?._id}
        steps={steps}
        availableSizes={availableSizes}
        measurementProfiles={measurementProfiles}
      />
    </>
  );
}
