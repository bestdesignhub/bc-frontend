import {
  Accessories,
  Category,
  Hero,
  Instagram,
  LookGood,
  PerfectFit,
  Service,
} from '@/app/components';
import { IProduct } from '@/app/components/accessories/accessories';
import { Favourite } from '@/app/components/favourite';
import { ZeeZap } from '@/app/components/zee-zap';
import { IHomeApiRes } from '@/types/components';

interface IHomePageProps {
  homepageData: IHomeApiRes;
  homeStoryData: any;
  homeProductList: IProduct[];
  testimonialData: { position: string; title: string; name: string }[];
}

const HomeComponent = ({ homepageData, homeProductList }: IHomePageProps) => {
  const heroData = homepageData?.section1;
  const perfectFitData = homepageData?.section2;
  const categoryData = homepageData?.section3;
  const accessoriesData = homepageData?.section5;
  const favouriteData = homepageData?.section6;
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

        <section className="latest-product f-container">
          <h2>Our Latest Products</h2>
          <ul className="latest-product-list">
            <li>
              <div className="product-box">
                <a className="product-img" href="#" title="Turtle Neck Pullover">
                  <img src="/images/product-1.webp" alt="Turtle Neck Pullover" />
                </a>
                <a className="product-name" href="#" title="Turtle Neck Pullover">
                  Turtle Neck Pullover
                </a>
                <div className="price-box">
                  <span className="start-from">Start from</span>
                  <span className="product-price">$150.00</span>
                </div>
              </div>
            </li>
            <li>
              <div className="product-box">
                <a className="product-img" href="#" title="Mock Neck Pullover">
                  <img src="/images/product-2.webp" alt="Mock Neck Pullover" />
                </a>
                <a className="product-name" href="#" title="Mock Neck Pullover">
                  Mock Neck Pullover
                </a>
                <div className="price-box">
                  <span className="start-from">Start from</span>
                  <span className="product-price">$170.00</span>
                </div>
              </div>
            </li>
            <li>
              <div className="product-box">
                <a className="product-img" href="#" title="V Neck Pullover">
                  <img src="/images/product-3.webp" alt="V Neck Pullover" />
                </a>
                <a className="product-name" href="#" title="V Neck Pullover">
                  V Neck Pullover
                </a>
                <div className="price-box">
                  <span className="start-from">Start from</span>
                  <span className="product-price">$140.00</span>
                </div>
              </div>
            </li>
            <li>
              <div className="product-box">
                <a className="product-img" href="#" title="V Neck Sleeveless Vest">
                  <img src="/images/product-4.webp" alt="V Neck Sleeveless Vest" />
                </a>
                <a className="product-name" href="#" title="V Neck Sleeveless Vest">
                  V Neck Sleeveless Vest
                </a>
                <div className="price-box">
                  <span className="start-from">Start from</span>
                  <span className="product-price">$110.00</span>
                </div>
              </div>
            </li>
            <li>
              <div className="product-box">
                <a className="product-img" href="#" title="Crew Neck Pullover">
                  <img src="/images/product-5.webp" alt="Crew Neck Pullover" />
                </a>
                <a className="product-name" href="#" title="Crew Neck Pullover">
                  Crew Neck Pullover
                </a>
                <div className="price-box">
                  <span className="start-from">Start from</span>
                  <span className="product-price">$190.00</span>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section className="create-custom f-container">
          <aside className="custom-sweater">
            <h3>Create Custom Sweater</h3>
            <ul className="custom-sweater-list">
              <li>
                <div className="custom-sweater-img">
                  <a href="#" title="Quality Yarn">
                    <img src="/images/custom-sweater-1.webp" alt="Quality Yarn" />
                  </a>
                </div>
                <a className="custom-sweater-name" href="#" title="Quality Yarn">
                  Quality Yarn
                </a>
              </li>
              <li>
                <div className="custom-sweater-img">
                  <a href="#" title="Quality Handcraft">
                    <img src="/images/custom-sweater-2.webp" alt="Quality Handcraft" />
                  </a>
                </div>
                <a className="custom-sweater-name" href="#" title="Quality Handcraft">
                  Quality Handcraft
                </a>
              </li>
              <li>
                <div className="custom-sweater-img">
                  <a href="#" title="Finished Product">
                    <img src="/images/custom-sweater-3.webp" alt="Finished Product" />
                  </a>
                </div>
                <a className="custom-sweater-name" href="#" title="Finished Product">
                  Finished Product
                </a>
              </li>
            </ul>
            <ul className="custom-sweater-btn">
              <li>
                <a href="#" title="Create My SWEATER">
                  Create My SWEATER
                </a>
              </li>
              <li>
                <a href="#" title="Customise a Sweater">
                  Customise a Sweater
                </a>
              </li>
            </ul>
          </aside>
          <div className="your-style">
            <h3>Your Style & Colors</h3>
            <h4>We create Custom Solutions</h4>
            <img src="/images/your-style.webp" alt="Your Style & Colors" />
          </div>
        </section>

        <section className="women-men-sweater">
          <div className="women-sweater">
            <img src="/images/ww.webp" />
          </div>
          <div className="men-sweater">
            <img src="/images/ww.webp" />
          </div>
        </section>

        <section className="all-sweater-style f-container">
          <h3>Our All Sweater Styles</h3>
          <ul className="all-sweater-list">
            <li>
              <a className="sweater-style-img" href="#" title="Crew Neck Pullover">
                <img src="/images/crew-neck-pullover.webp" alt="Crew Neck Pullover" />
              </a>
              <a className="sweater-style-name" href="#" title="Crew Neck Pullover">
                Crew Neck Pullover
              </a>
            </li>
            <li>
              <a className="sweater-style-img" href="#" title="V Neck Pullover">
                <img src="/images/v-neck-pullover.webp" alt="V Neck Pullover" />
              </a>
              <a className="sweater-style-name" href="#" title="V Neck Pullover">
                V Neck Pullover
              </a>
            </li>
            <li>
              <a className="sweater-style-img" href="#" title="Mock Neck Pullover">
                <img src="/images/mock-neck-pullover.webp" alt="Mock Neck Pullover" />
              </a>
              <a className="sweater-style-name" href="#" title="Mock Neck Pullover">
                Mock Neck Pullover
              </a>
            </li>
            <li>
              <a className="sweater-style-img" href="#" title="Turtle Neck Pullover">
                <img src="/images/turtle-neck-pullover.webp" alt="Turtle Neck Pullover" />
              </a>
              <a className="sweater-style-name" href="#" title="Turtle Neck Pullover">
                Turtle Neck Pullover
              </a>
            </li>
            <li>
              <a className="sweater-style-img" href="#" title="V Neck Button Cardigan">
                <img src="/images/v-neck-button-cardigan.webp" alt="V Neck Button Cardigan" />
              </a>
              <a className="sweater-style-name" href="#" title="V Neck Button Cardigan">
                V Neck Button Cardigan
              </a>
            </li>
          </ul>
          <div className="view-all-style">
            <a href="#" title="View All Styles">
              View All Styles
            </a>
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
            <a className="download-book" href="#" title="Download Book">
              Download Book
            </a>
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
            <a href="#" title="Click More Details">
              Click More Details
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeComponent;
