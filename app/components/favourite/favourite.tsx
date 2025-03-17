import '@/app/styles/favourite.css';
import { Section6 } from '@/types/components';
// import { Col, Container, Row } from 'react-bootstrap';
import FavouriteItem from './favourite-item';

interface IFavoriteProps {
  favouriteData: Section6;
}

export default function Favourite({ favouriteData }: IFavoriteProps) {
  return (
    <div className="favourite-wrapper">
      <h2>{favouriteData?.title}</h2>
      <div className='favourite-section'>
      {favouriteData?.cards?.map((favourite, index: number) => (
              <FavouriteItem
                key={index}
                href="/shop"
                // href={favourite?.button_link}
                title={''}
                subtitle={''}
                image={favourite?.image}
                buttonText={favourite?.button_text}
              />
            ))}
            </div>
      </div>
  );
}
