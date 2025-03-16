import '@/app/styles/client-story.css';
import { Section9 } from '@/types/components';
import { getAWSImageUrl } from '@/utils/common.utils';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
interface IClientStoryProps {
  clientStoryData: Section9;
}
export default function ClientStory({ clientStoryData }: IClientStoryProps) {
  return (
    <div
      className="client-wrapper"
      style={{
        backgroundImage: `url(${getAWSImageUrl(clientStoryData?.bg_image)})`,
        backgroundSize: 'cover', // Ensures the image covers the div
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents repeating
      }}
    >
      <div className="container">
        <div className="client-row">
          <Row className="g-0">
            <Col xs={12} lg={6}>
              <div className="image">
                <Image
                  src={getAWSImageUrl(clientStoryData?.left_image)}
                  width={590}
                  height={590}
                  alt={'client'}
                  loading="lazy"
                />
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="client_content">
                <h4>{clientStoryData?.title ?? ''}</h4>
                <p>{clientStoryData?.description ?? ''}</p>
                <button>
                  <Link href={clientStoryData?.link_url ?? ''}>
                    {clientStoryData?.link_text ?? ''}
                  </Link>
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
