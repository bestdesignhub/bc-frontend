import { getAWSImageUrl } from '@/utils/common.utils';
import Image from 'next/image';
import Link from 'next/link';
type AccessoriesItemProps = {
  href: string;
  title: string;
  image: string;
  price: number;
  popularProduct: string;
};

const statusOptions = [
  { id: 1, label: "New Arrival", value: "new_arrival" },
  { id: 2, label: "Most Popular", value: "most_popular" },
  { id: 3, label: "Popular", value: "popular" },
  { id: 4, label: "Normal", value: "normal" },
];


export default function AccessoriesItem({ href = '', image, title, price, popularProduct }: AccessoriesItemProps) {
  console.log("href===>>>", href);
  const statusLabel = statusOptions.find(opt => opt.value === popularProduct)?.label;
  return (
    <div className="accessoriesbox">
      {statusLabel && (
        <div className='productTag'>
          <span>{statusLabel}</span>
        </div>
      )}
      <Link href={href}>
        <div className="image">
          <Image src={getAWSImageUrl(image)} alt={title} width={575} height={476} loading="lazy" />
        </div>
        <div className="info">
          <h6>{title}</h6>
          <div className="pr-price">
            <span>Start from <strong> €{price}</strong></span>
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
