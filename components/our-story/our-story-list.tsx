import '@/app/styles/woman.css';
import { Row } from 'react-bootstrap';
import { CustomPagination } from '../common';
import OurStoryCard from './our-story-card';

export interface IStoryItem {
  _id: string;
  bg_image: string;
  thumb_image: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  title: string;
  sub_title: string;
}

export interface IStoryResponse {
  currentPage: number;
  totalCount: number;
  totalPage: number;
  data: IStoryItem[];
}

export interface IStoryProps {
  storyListData: IStoryResponse;
}

const OurStoryList = ({ storyListData }: IStoryProps) => {
  return (
    <>
      {/* {storyListData?.data?.map((stories) => (
        <StoriesItem
          key={+stories?._id}
          href={`${USER_ROUTES.ourStory}/${stories?._id}`}
          title={stories.title}
          discription={stories?.sub_title}
          image={stories?.thumb_image}
        />
      ))} */}
      <div className="woman-product-wrapper">
        <Row className={`product-container g-4 grid`}>
          {storyListData?.data?.map((data, index: number) => (
            // <Col key={woman._id} xs={12} md={3} lg={3} xl={3}>
            //   <div className="womanproductbox">
            //     <Link href={'/'}>
            //       <div className="image">
            //         <Image
            //           src={getAWSImageUrl(woman?.bg_image)}
            //           width={328}
            //           height={350}
            //           alt={'offer'}
            //         />
            //       </div>
            //       <div className="info">
            //         <h6>Lorem ipsum dolor sit amet.</h6>
            //         <div className="pr-price">
            //           <ins>$55.00</ins>
            //           <del>$60.00</del>
            //         </div>
            //       </div>
            //     </Link>
            //   </div>
            // </Col>
            <OurStoryCard data={data} key={index} />
          ))}
        </Row>
        <CustomPagination
          currentPage={storyListData?.currentPage ?? 0}
          totalPage={storyListData?.totalPage ?? 0}
        />
      </div>
    </>
  );
};

export default OurStoryList;
