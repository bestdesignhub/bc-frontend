import Link from 'next/link';
import Image from 'next/image';
import { getAWSImageUrl } from '@/utils/common.utils';

type CategoryItemProps = {
  key: number;
  href: string;
  title: string;
  image: string;
};

export default function CategoryItem({ href = '', title, image }: CategoryItemProps) {
  return (
    <div className="categorybox">
      <Link href={href}>
        <div className="image">
          <Image loading="lazy" src={getAWSImageUrl(image)} alt={title} width={1520} height={680} />
        </div>
        <div className="info">
          <h5>{title}</h5>
        </div>
      </Link>
    </div>
  );
}
