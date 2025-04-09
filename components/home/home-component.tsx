import {
  Accessories,
  Hero
} from '@/app/components';
import { IProduct } from '@/app/components/accessories/accessories';
import { ZeeZap } from '@/app/components/zee-zap';
import { IHomeApiRes } from '@/types/components';
import Link from 'next/link';

interface IHomePageProps {
  homepageData: IHomeApiRes;
  homeStoryData: any;
  homeProductList: IProduct[];
  testimonialData: { position: string; title: string; name: string }[];
}

const HomeComponent = ({ homepageData, homeProductList }: IHomePageProps) => {
  const heroData = homepageData?.section1;
  // const perfectFitData = homepageData?.section2;
  // const categoryData = homepageData?.section3;
  const accessoriesData = homepageData?.section5;
  // const favouriteData = homepageData?.section6;
  const lookGoodData = homepageData?.section8;
  return (
    <>
      <main className="main-page">
        <Hero heroData={heroData} />
        {/* <Accessories accessoriesData={accessoriesData} homeProductList={homeProductList} />
          <PerfectFit perfectFitData={perfectFitData} />

          <Category categoryData={categoryData} />
          <ZeeZap lookGoodData={lookGoodData} />
          <Favourite favouriteData={favouriteData} />

          <LookGood lookGoodData={lookGoodData} />

          <Instagram />
          <Service /> */}

        <Accessories accessoriesData={accessoriesData} homeProductList={homeProductList} />

        <section className="create-custom f-container">
          <aside className="custom-sweater">
            <h3>Create Custom Sweater</h3>
            <ul className="custom-sweater-list">
              <li>
                <div className="custom-sweater-img">
                  <Link href="#" title="Quality Yarn">
                    <img src="/images/custom-sweater-1.webp" alt="Quality Yarn" />
                  </Link>
                </div>
                <Link className="custom-sweater-name" href="#" title="Quality Yarn">
                  Quality Yarn
                </Link>
              </li>
              <li>
                <div className="custom-sweater-img">
                  <Link href="#" title="Quality Handcraft">
                    <img src="/images/custom-sweater-2.webp" alt="Quality Handcraft" />
                  </Link>
                </div>
                <Link className="custom-sweater-name" href="#" title="Quality Handcraft">
                  Quality Handcraft
                </Link>
              </li>
              <li>
                <div className="custom-sweater-img">
                  <Link href="#" title="Finished Product">
                    <img src="/images/custom-sweater-3.webp" alt="Finished Product" />
                  </Link>
                </div>
                <Link className="custom-sweater-name" href="#" title="Finished Product">
                  Finished Product
                </Link>
              </li>
            </ul>
            <ul className="custom-sweater-btn">
              <li>
                <Link href="/sweater" title="Create My SWEATER">
                  Create My SWEATER
                </Link>
              </li>
              <li>
                <Link href="/shop" title="Customise a Sweater">
                  Customise a Sweater
                </Link>
              </li>
            </ul>
          </aside>
          <div className="your-style">
            <h3>Your Style & Colors</h3>
            <h4>We create Custom Solutions</h4>
            <img src="/images/your-style.webp" alt="Your Style & Colors" />
          </div>
        </section>
        <ZeeZap lookGoodData={lookGoodData} />
          {/* <div className="women-sweater">
            <img src="/images/ww.webp" />
          </div>
          <div className="men-sweater">
            <img src="/images/ww.webp" />
          </div> */}

        <section className="all-sweater-style f-container">
          <h3>Our All Sweater Styles</h3>
          <ul className="all-sweater-list">
            <li>
              <Link className="sweater-style-img" href="#" title="Crew Neck Pullover">
                <img src="/images/crew-neck-pullover.webp" alt="Crew Neck Pullover" />
              </Link>
              <Link className="sweater-style-name" href="#" title="Crew Neck Pullover">
                Crew Neck Pullover
              </Link>
            </li>
            <li>
              <Link className="sweater-style-img" href="#" title="V Neck Pullover">
                <img src="/images/v-neck-pullover.webp" alt="V Neck Pullover" />
              </Link>
              <Link className="sweater-style-name" href="#" title="V Neck Pullover">
                V Neck Pullover
              </Link>
            </li>
            <li>
              <Link className="sweater-style-img" href="#" title="Mock Neck Pullover">
                <img src="/images/mock-neck-pullover.webp" alt="Mock Neck Pullover" />
              </Link>
              <Link className="sweater-style-name" href="#" title="Mock Neck Pullover">
                Mock Neck Pullover
              </Link>
            </li>
            <li>
              <Link className="sweater-style-img" href="#" title="Turtle Neck Pullover">
                <img src="/images/turtle-neck-pullover.webp" alt="Turtle Neck Pullover" />
              </Link>
              <Link className="sweater-style-name" href="#" title="Turtle Neck Pullover">
                Turtle Neck Pullover
              </Link>
            </li>
            <li>
              <Link className="sweater-style-img" href="#" title="V Neck Button Cardigan">
                <img src="/images/v-neck-button-cardigan.webp" alt="V Neck Button Cardigan" />
              </Link>
              <Link className="sweater-style-name" href="#" title="V Neck Button Cardigan">
                V Neck Button Cardigan
              </Link>
            </li>
          </ul>
          <div className="view-all-style">
            <Link href="#" title="View All Styles">
              View All Styles
            </Link>
          </div>
        </section>
        <section className="ordering-steps">
          <div className="ordering-steps-img">
            <img src="/images/ordering-steps.webp" alt="4 easy ordering steps" />
          </div>
          <div className="four-steps">
            <h4>4 easy ordering steps</h4>
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit...
            </p>
            <ul className="order-steps">
              <li>
                <div className="step-box">
                  <span className="step-number">1</span>
                  <span className="step-icon">
                    <img src="/images/step-1.webp" alt="Fabric Color" />
                  </span>
                </div>
                <span className="step-text">Fabric Color</span>
              </li>
              <li>
                <div className="step-box">
                  <span className="step-number">2</span>
                  <span className="step-icon">
                    <img src="/images/step-2.webp" alt="Your Style" />
                  </span>
                </div>
                <span className="step-text">Your Style</span>
              </li>
              <li>
                <div className="step-box">
                  <span className="step-number">3</span>
                  <span className="step-icon">
                    <img src="/images/step-3.webp" alt="Measurement" />
                  </span>
                </div>
                <span className="step-text">Measurement</span>
              </li>
              <li>
                <div className="step-box">
                  <span className="step-number">4</span>
                  <span className="step-icon">
                    <img src="/images/step-4.webp" alt="Order Now" />
                  </span>
                </div>
                <span className="step-text">Order Now</span>
              </li>
            </ul>
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit...
            </p>
          </div>
        </section>

        <section className="explore-collection f-container">
          <div className="collection-content">
            <h3>Explore our Yarn Collection</h3>
            <p>
              Explore our carefully curated yarn collection, designed to provide you with the
              perfect solutions for all your knitting and crafting needs, ensuring quality,
              durability, and a luxurious finish for every project.
            </p>
            <Link className="download-book" href="#" title="Download Book">
              Download Book
            </Link>
          </div>
          <div className="collection-img">
            <img src="/images/collection-img.webp" alt="Explore our Yarn Collection" />
          </div>
        </section>

        <section className="about-bespoke">
          <div className="f-container">
            <h3>
              <span>About</span> Bespoke Cashmere
            </h3>
            <ul className="bespoke-list">
              <li>
                <span className="a-icon">
                  <img src="/images/global-shipping.webp" alt="Global Shipping" />
                </span>
                <span className="service-name">Global Shipping</span>
              </li>
              <li>
                <span className="a-icon">
                  <img src="/images/quick-delivery.webp" alt="Quick Delivery (3-4 weeks)" />
                </span>
                <span className="service-name">
                  Quick Delivery <span className="weeks">(3-4 weeks)</span>
                </span>
              </li>
              <li>
                <span className="a-icon">
                  <img src="/images/innovation-leader.webp" alt="Innovation Leader" />
                </span>
                <span className="service-name">Innovation Leader</span>
              </li>
              <li>
                <span className="a-icon">
                  <img src="/images/ethical-luxury.webp" alt="Ethical luxury" />
                </span>
                <span className="service-name">Ethical luxury</span>
              </li>
              <li>
                <span className="a-icon">
                  <img src="/images/customize-solutions.webp" alt="Customize Solutions" />
                </span>
                <span className="service-name">Customize Solutions</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="f-container about-content">
          <p>
            We are a leading e-commerce company specializing in custom sweaters for residential and
            commercial applications. With our cutting-edge technology, we have revolutionized the
            one-size-fits-all apparel industry, paving the way as pioneers in customized and
            personalized sweaters. We provide an extensive range of custom-made and standard-size
            sweaters, meticulously tailored to your specifications in terms of size, material,
            color, and even shape!
          </p>
          <p>
            Our fixed-size sweaters ensure you have access to the perfect fit for your needs. You
            can also brand the custom sweaters immediately with your own logo, design, or quote
            using our simple online personalizing tool.
          </p>
          <div className="about-detail">
            <Link href="#" title="Click More Details">
              Click More Details
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeComponent;
