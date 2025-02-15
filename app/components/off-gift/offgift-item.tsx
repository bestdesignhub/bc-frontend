import Link from 'next/link';
import Image from 'next/image';
import { Col } from 'react-bootstrap';
import { getAWSImageUrl } from '@/utils/common.utils';

type OffgiftItemProps = {
  key: number;
  href: string;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
};

export default function OffgiftItem({
  href = '',
  title,
  subtitle,
  image,
  buttonText,
}: OffgiftItemProps) {
  return (
    <Col>
      <div className="offgiftbox">
        <Link href={href}>
          <div className="image">
            <Image src={getAWSImageUrl(image)} alt={title} width={1520} height={680} priority />
          </div>
          <div className="info">
            <p>{subtitle}</p>
            <h5>{title}</h5>
            <button>{buttonText}</button>
          </div>
        </Link>
      </div>
    </Col>
  );
}
