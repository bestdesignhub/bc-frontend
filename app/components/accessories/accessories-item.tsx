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
          <Image src={getAWSImageUrl(image)} alt={title} width={575} height={476} priority />
        </div>
        <div className="info">
          <h6>{title}</h6>
          {/* <ul>
          <li className="active">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                fill="currentColor"
              />
            </svg>
          </li>
          <li className="active">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                fill="currentColor"
              />
            </svg>
          </li>
          <li className="active">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                fill="currentColor"
              />
            </svg>
          </li>
          <li className="active">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                fill="currentColor"
              />
            </svg>
          </li>
          <li>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                fill="currentColor"
              />
            </svg>
          </li>
        </ul> */}
          <div className="pr-price">
            <ins>${price}</ins>
            {/* <del>$60.00</del> */}
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
