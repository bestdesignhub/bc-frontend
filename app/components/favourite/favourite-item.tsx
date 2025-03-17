import Link from 'next/link';
import Image from 'next/image';
import { Col } from 'react-bootstrap';
import { getAWSImageUrl } from '@/utils/common.utils';

type FavouriteItemProps = {
  key: number;
  href: string;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
};

export default function FavouriteItem({
  href = '',
  title,
  image
}: FavouriteItemProps) {
  return (
    <Col>
      <div className="favouritebox">
        <Link href={href}>
          <div className="image">
            <Image
              loading="lazy"
              src={getAWSImageUrl(image)}
              alt={title}
              width={1520}
              height={680}
            />
          </div>
        </Link>
      </div>
    </Col>
  );
}
