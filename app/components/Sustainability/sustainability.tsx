'use client';

import '@/app/styles/Sustainability.css';
import ImageWithText from './ImageWithText';
import Image from 'next/image';
import Sustainabilityimg3 from '@/public/images/sus-image-3.webp';

export default function sustainabilitypage() {
  return (
    <>
      <div className="sustainability-page">
        <div className="sustainability-section-1">
          <div className="container">
            <div className="section-title">
              <h2>LOREM IPSUM DOLAR SIT</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus tristique
                tellus sit amet porta. Maecenas eu sem eu ex dignissim tincidunt. Vivamus efficitur
                diam nec justo ultricies, non mollis nulla consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fusce tempus tristique tellus sit amet porta.
              </p>
              <p>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus tristique t
                </strong>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus tristique
                tellus sit amet porta. Maecenas eu sem eu ex dignissim tincidunt.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="sustainability-section-2">
          <ImageWithText />
          <ImageWithText />
        </div>
        <div className="sustainability-section-3">
          <div className="container">
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at diam lobortis,
                tincidunt metus non, rutrum urna. Nulla sagittis tortor et ligula dapibus gravida et
                ac tortor. Vivamus ut felis augue. Integer vulputate porta vulputate. In rhoncus ac
                lacus non feugiat. Nam fringilla nibh ac maximus mattis. Suspendisse aliquet sapien
                eget mi euismod, vel vehicula neque euismod. Pellentesque blandit mi vel libero
                euismod, quis luctus ligula vulputate.{' '}
              </p>
              <p>
                Etiam vulputate scelerisque eros non rutrum. Sed ultricies purus non ipsum luctus,
                id faucibus ante placerat. Proin a quam cursus eros vulputate facilisis sed at
                ligula. Sed volutpat ex sed diam fringilla, a rutrum elit varius. Sed laoreet mauris
                at leo tristique blandit. Proin sed consequat turpis.
              </p>
            </div>
          </div>
        </div>
        <div className="sustainability-section-4">
          <div className="container">
            <div className="section-title">
              <h2>LOREM IPSUM DOLAR SIT</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel convallis nulla.
                Etiam nisl augue, rutrum in auctor sit amet, eleifend et ligula. Vestibulum ante.
              </p>
            </div>
          </div>
          <div className="full-image-outer">
            <div className="img-bg">
              <Image
                src={Sustainabilityimg3}
                alt="Sustainability-image"
                width={1920}
                height={692}
                loading="lazy"
              />
            </div>
            <div className="image-over-text">
              <div className="text-area-center">
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tristique
                    nibh. Nullam porta viverra massa, sed ornare tortor gravida efficitur. Phasellus
                    suscipit est ex, et tristique mi accumsan sit amet. Pellentesque non
                    sollicitudin nulla, ut faucibus est. Proin nec lobortis urna, et convallis
                    mauris. Proin et interdum metus. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Integer non tristique nibh. Nullam porta viverra massa, sed
                    ornare tortor gravida efficitur. Phasellus suscipit est ex, et tristique mi
                    accumsan sit amet. Pellentesque non sollicitudin nulla, ut faucibus est. Proin
                    nec lobortis urna, et convallis mauris. Proin et interdum metus. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Integer non tristique nibh. Nullam
                    porta viverra massa, sed ornare tortor gravida efficitur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sustainability-section-2 no-border-block">
          <ImageWithText />
        </div>
        <div className="sustainability-section-3 full-text-outer">
          <div className="container">
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at diam lobortis,
                tincidunt metus non, rutrum urna. Nulla sagittis.
              </p>
              <p>
                tortor et ligula dapibus gravida et ac tortor. Vivamus ut felis augue. Integer
                vulputate porta vulputate. In rhoncus ac lacus non feugiat.
              </p>
              <p>
                Nam fringilla nibh ac maximus mattis. Suspendisse aliquet sapien eget mi euismod,
                vel vehicula neque euismod.{' '}
              </p>
              <p>Pellentesque blandit mi vel libero euismod, quis luctus ligula vulputate. </p>
              <p>
                Etiam vulputate scelerisque eros non rutrum. Sed ultricies purus non ipsum luctus,
                id faucibus ante placerat.{' '}
              </p>
              <p>
                Proin a quam cursus eros vulputate facilisis sed at ligula. Sed volutpat ex sed diam
                fringilla, a rutrum elit varius.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="sustainability-section-2 no-border-block reverces-block">
          <ImageWithText />
          <ImageWithText />
          <ImageWithText />
          <ImageWithText />
        </div>
      </div>
    </>
  );
}
