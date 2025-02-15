import '@/app/styles/favourite.css';
import { Section6 } from '@/types/components';
import { Col, Container, Row } from 'react-bootstrap';
import FavouriteItem from './favourite-item';

interface IFavoriteProps {
  favouriteData: Section6;
}

export default function Favourite({ favouriteData }: IFavoriteProps) {
  return (
    <div className="favourite-wrapper">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <div className="section_title center">
              <h2>{favouriteData?.title}</h2>
            </div>
          </Col>
        </Row>
        <div className="favourite-post">
          <Row>
            {favouriteData?.cards?.map((favourite, index: number) => (
              <FavouriteItem
                key={index}
                href={favourite?.button_link}
                title={''}
                subtitle={''}
                image={favourite?.image}
                buttonText={favourite?.button_text}
              />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
