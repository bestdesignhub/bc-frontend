import { CartContent } from '@/app/components/cart';
import { getCartDetails } from '@/utils/server-api.utils';

export default async function CartPage() {
  const cartData = await getCartDetails();
  return (
    <>
      <CartContent initialCartData={cartData} />
      {/* <Service /> */}
    </>
  );
}
