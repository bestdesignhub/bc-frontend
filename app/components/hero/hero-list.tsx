import { Fragment } from 'react';
import HeroData from './hero-data';
import HeroItem from './hero-item';

export default function HeroList() {
  return (
    <>
      {HeroData.map((hero: any) => (
        <Fragment key={hero.id}>
          <HeroItem
            href={hero.href}
            title={hero.title}
            image={hero.image}
            newTab={false}
            buttonText={hero.title}
          />
        </Fragment>
      ))}
    </>
  );
}
