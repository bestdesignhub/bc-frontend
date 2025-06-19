import '@/app/styles/woman.css';
import { IBannerData } from '@/types';

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
  bannerData: IBannerData
}

const OurStoryList = () => {
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
      {/* <BannerComponent bannerData={bannerData} /> */}
      <div className="woman-product-wrapper padd-top30">
        <div className='container'>
          <div className='content-bg'>
            <h2>Mind Behind Bespoke Cashmere</h2>
            <p>Wrap yourself in warmth and elegance with our exquisitely crafted women sweater. Designed to keep you comfortable without compromising on style, this sweater is made from ultra-soft, high-quality knit fabric that feels gentle against the skin. The breathable material ensures you stay cozy on chilly days without overheating, making it the perfect choice for any season. Featuring a relaxed yet flattering fit, this sweater drapes beautifully over the body, providing effortless style and ease of movement. The ribbed cuffs, hem, and neckline add a touch of sophistication while ensuring a snug fit that retains its shape. Choose from a variety of necklines, including classic crewneck, chic V-neck, or cozy turtleneck, to suit your personal style. </p>
            <p>Wrap yourself in warmth and elegance with our exquisitely crafted women sweater. Designed to keep you comfortable without compromising on style, this sweater is made from ultra-soft, high-quality knit fabric that feels gentle against the skin. The breathable material ensures you stay cozy on chilly days without overheating, making it the perfect choice for any season. Featuring a relaxed yet flattering fit, this sweater drapes beautifully over the body, providing effortless style and ease of movement. The ribbed cuffs, hem, and neckline add a touch of sophistication while ensuring a snug fit that retains its shape. Choose from a variety of necklines, including classic crewneck, chic V-neck, or cozy turtleneck, to suit your personal style. </p>
            <div className="our-profile">
              <div className='team'>
                <div className='team-img'>
                  <img src="../images/soren.jpg" />
                </div>
                <div className='team-description'>
                  <h4>Mr. Soren John Hansen</h4>
                  <h5>Co-Founder & Custom Tailoring Expert</h5>
                  <ul>
                    <li>36+ years in textiles, 12 Years in tailor-made fashion</li>
                    <li>Expert in premium customization, fitting and designing</li>
                    <li>Emphasizes less is more - producing only as needed to reduce waste and enhance personalization.</li>
                  </ul>
                </div>
              </div>
              <div className='team'>
                <div className='team-img'>
                  <img src="../images/mitony.jpg" />
                </div>
                <div className='team-description'>
                  <h4>Mr. Mitony</h4>
                  <h5>Co-Founder & Manufacturing Expert</h5>
                  <ul>
                    <li>30+ years in sweater manufacturing</li>
                    <li>Owner of a large-scale sweater manufacturing facility, producing 150,000+ cashmere sweaters <br /> annually for local and international market.</li>
                  </ul>
                </div>
              </div>
            </div>
            <br />            <br />            <br />
            <p>Wrap yourself in warmth and elegance with our exquisitely crafted women sweater. Designed to keep you comfortable without compromising on style, this sweater is made from ultra-soft, high-quality knit fabric that feels gentle against the skin. The breathable material ensures you stay cozy on chilly days without overheating, making it the perfect choice for any season. Featuring a relaxed yet flattering fit, this sweater drapes beautifully over the body, providing effortless style and ease of movement. The ribbed cuffs, hem, and neckline add a touch of sophistication while ensuring a snug fit that retains its shape. Choose from a variety of necklines, including classic crewneck, chic V-neck, or cozy turtleneck, to suit your personal style. </p>
          </div>
          {/* 
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
          /> */}
        </div>
      </div>
    </>
  );
};

export default OurStoryList;
