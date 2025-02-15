'use client';

import '@/app/styles/blog.css';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

import blogimg1 from '@/public/images/blog-img-1.webp';
import blogimg2 from '@/public/images/blog-image-2.webp';
import blogimg3 from '@/public/images/blog-image-3.webp';
import blogimg4 from '@/public/images/blog-image-4.webp';
import blogimg5 from '@/public/images/blog-image-5.webp';
import blogimg6 from '@/public/images/blog-image-6.webp';
import blogimg7 from '@/public/images/blog-image-7.webp';
import blogimg8 from '@/public/images/blog-image-8.webp';
import blogimg9 from '@/public/images/blog-image-9.webp';

export default function Blogpage() {
  return (
    <>
      <div className="blog-page">
        <div className="container">
          <div className="blog-listing">
            <Row>
              <Col md={12}>
                <div className="blog-box-full">
                  <div className="img">
                    <Image src={blogimg1} alt="" width={1260} height={500} />
                  </div>
                  <div className="blog-box-over">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <div className="link">
                      <Link href="/">Read more</Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="blog-box">
                  <div className="img">
                    <Image src={blogimg2} alt="" width={380} height={215} />
                  </div>
                  <div className="blog-box-sub">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae
                      lacus tellus. Duis consectetur risus id mattis vehicula. Duis eget nisl non
                      metus ultricies mattis.
                    </p>
                    <div className="link">
                      <Link href="/">Read more</Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="blog-box">
                  <div className="img">
                    <Image src={blogimg2} alt="" width={380} height={215} />
                  </div>
                  <div className="blog-box-sub">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae
                      lacus tellus. Duis consectetur risus id mattis vehicula. Duis eget nisl non
                      metus ultricies mattis.
                    </p>
                    <div className="link">
                      <Link href="/">Read more</Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="blog-box">
                  <div className="img">
                    <Image src={blogimg3} alt="" width={380} height={215} />
                  </div>
                  <div className="blog-box-sub">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae
                      lacus tellus. Duis consectetur risus id mattis vehicula. Duis eget nisl non
                      metus ultricies mattis.
                    </p>
                    <div className="link">
                      <Link href="/">Read more</Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="blog-box">
                  <div className="img">
                    <Image src={blogimg4} alt="" width={380} height={215} />
                  </div>
                  <div className="blog-box-sub">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae
                      lacus tellus. Duis consectetur risus id mattis vehicula. Duis eget nisl non
                      metus ultricies mattis.
                    </p>
                    <div className="link">
                      <Link href="/">Read more</Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="blog-box">
                  <div className="img">
                    <Image src={blogimg5} alt="" width={380} height={215} />
                  </div>
                  <div className="blog-box-sub">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae
                      lacus tellus. Duis consectetur risus id mattis vehicula. Duis eget nisl non
                      metus ultricies mattis.
                    </p>
                    <div className="link">
                      <Link href="/">Read more</Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="blog-box">
                  <div className="img">
                    <Image src={blogimg6} alt="" width={380} height={215} />
                  </div>
                  <div className="blog-box-sub">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae
                      lacus tellus. Duis consectetur risus id mattis vehicula. Duis eget nisl non
                      metus ultricies mattis.
                    </p>
                    <div className="link">
                      <Link href="/">Read more</Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="blog-box">
                  <div className="img">
                    <Image src={blogimg7} alt="" width={380} height={215} />
                  </div>
                  <div className="blog-box-sub">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae
                      lacus tellus. Duis consectetur risus id mattis vehicula. Duis eget nisl non
                      metus ultricies mattis.
                    </p>
                    <div className="link">
                      <Link href="/">Read more</Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="blog-box">
                  <div className="img">
                    <Image src={blogimg8} alt="" width={380} height={215} />
                  </div>
                  <div className="blog-box-sub">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae
                      lacus tellus. Duis consectetur risus id mattis vehicula. Duis eget nisl non
                      metus ultricies mattis.
                    </p>
                    <div className="link">
                      <Link href="/">Read more</Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="blog-box">
                  <div className="img">
                    <Image src={blogimg9} alt="" width={380} height={215} />
                  </div>
                  <div className="blog-box-sub">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae
                      lacus tellus. Duis consectetur risus id mattis vehicula. Duis eget nisl non
                      metus ultricies mattis.
                    </p>
                    <div className="link">
                      <Link href="/">Read more</Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="custom-paginaction">
              <ul>
                <li className="prev">
                  <Link href="/">
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M10.6673 6.00004H1.33398M1.33398 6.00004L6.00065 10.6667M1.33398 6.00004L6.00065 1.33337"
                          stroke="#1E1E1E"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                    <span>Previous</span>
                  </Link>
                </li>
                <li className="active">
                  <Link href="/">1</Link>
                </li>
                <li>
                  <Link href="/">2</Link>
                </li>
                <li>
                  <Link href="/">3</Link>
                </li>
                <li>
                  <Link href="/">4</Link>
                </li>
                <li>
                  <Link href="/">5</Link>
                </li>
                <li>
                  <Link href="/">6</Link>
                </li>

                <li className="next">
                  <Link href="/">
                    <span>Next</span>
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3.33398 8.00004H12.6673M12.6673 8.00004L8.00065 3.33337M12.6673 8.00004L8.00065 12.6667"
                          stroke="#1E1E1E"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
