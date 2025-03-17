import { getAWSImageUrl } from '@/utils/common.utils';
import Image from 'next/image';
import Link from 'next/link';
type AccessoriesItemProps = {
  href: string;
  title: string;
  image: string;
  price: number;
};
export default function AccessoriesItem({ href = '', image, title, price }: AccessoriesItemProps) {
  return (
    <div className="accessoriesbox">
      <Link href={href}>
        <div className="image">
          <Image src={getAWSImageUrl(image)} alt={title} width={575} height={476} loading="lazy" />
        </div>
        <div className="info">
          <h6>{title}</h6>
          <div className="pr-price">
            <span>Start from <strong>${price}</strong></span>
          </div>
          <div className="pr-color d-none">
            <div className="color-item">
              <span style={{ backgroundColor: `${'#691933'}` }}></span>
            </div>
            <div className="color-item">
              <span style={{ backgroundColor: `${'#334746'}` }}></span>
            </div>
            <div className="color-item">
              <span style={{ backgroundColor: `${'#BD161A'}` }}></span>
            </div>
            <div className="color-item">
              <span style={{ backgroundColor: `${'#EB2D76'}` }}></span>
            </div>
            <div className="color-item">
              <span style={{ backgroundColor: `${'#B89884'}` }}></span>
            </div>
            <div className="color-item">
              <span style={{ backgroundColor: `${'#95C0E8'}` }}></span>
            </div>
            <div className="color-item">
              <span style={{ backgroundColor: `${'#047036'}` }}></span>
            </div>
            <div className="color-item">
              <span style={{ backgroundColor: `${'#EE709F'}` }}></span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
