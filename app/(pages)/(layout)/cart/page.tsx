import { CartContent } from '@/app/components/cart';
import BannerWrapper from '@/components/common/banner/BannerWrapper';
import { getCartDetails } from '@/utils/server-api.utils';

export default async function CartPage() {
  const cartData = await getCartDetails();
  return (
    <BannerWrapper>
      <CartContent initialCartData={cartData} />
      {/* <Service /> */}
    </BannerWrapper>
  );
}
