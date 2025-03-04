import { formatPrice, getAWSImageUrl } from '@/utils/common.utils';
import Image from 'next/image';
import Link from 'next/link';
type AlsoLikeItemProps = {
  href: string;
  title: string;
  image: string;
  price: number;
};
export default function AlsoLikeItem({ href = '', image, title, price }: AlsoLikeItemProps) {
  return (
    <div className="accessoriesbox">
      <Link href={href}>
        <div className="image">
          <Image src={getAWSImageUrl(image)} alt={title} width={575} height={476} loading="lazy" />
        </div>
        <div className="info">
          <h6>{title}</h6>
          <div className="pr-price">
            <ins>{formatPrice(price)}</ins>
            {/* <del>$60.00</del> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
