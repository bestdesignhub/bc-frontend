import Link from 'next/link';
import Image from 'next/image';
import { getAWSImageUrl } from '@/utils/common.utils';

type StoriesProps = {
  key: number;
  href: string;
  title: string;
  discription: string;
  image: string;
};

export default function StoriesItem({ href = '', title, image, discription }: StoriesProps) {
  return (
    <div className="storiesbox">
      <Link href={href}>
        <div className="image">
          <Image src={getAWSImageUrl(image)} alt={title} width={1520} height={680} priority />
        </div>
        <div className="info">
          <h5>{title}</h5>
          <p>{discription}</p>
        </div>
      </Link>
    </div>
  );
}
