import { getAWSImageUrl } from '@/utils/common.utils';
import Image from 'next/image';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import { IStoryItem } from './our-story-list';
import { USER_ROUTES } from '@/constants';

const OurStoryCard = ({ data }: { data: IStoryItem }) => {
  return (
    <Col key={data._id} xs={12} md={3} lg={3} xl={3}>
      <div className="womanproductbox">
        <Link href={`${USER_ROUTES.ourStory}/${data?._id}`}>
          <div className="image">
            <Image src={getAWSImageUrl(data?.bg_image)} width={328} height={350} alt={'offer'} />
          </div>
          <div className="info">
            <h6>{data?.title}</h6>
            <div className="pr-price">
              <ins>{data?.sub_title}</ins>
            </div>
          </div>
        </Link>
      </div>
    </Col>
  );
};

export default OurStoryCard;
