'use client';
import React, { useState } from 'react';
import '@/app/styles/woman.css';
import Image from 'next/image';
import Link from 'next/link';
import { Accordion, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import WomanData from './woman-data';

export default function Woman() {
  const [view, setView] = useState('grid');
  return (
    <>
      <div className="page-banner">
        <div className="image">
          <Image src="/images/look-good1.png" width={1920} height={650} alt={'banner'} />
        </div>
        <div className="banner-caption min-heigth">
          <div className="container">
            <div className="banner-content">
              <h1>Lorem ipsum dolor sit</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel convallis nulla.
                Etiam nisl augue.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="woman-product-wrapper">
        <Row className="g-4">
          <Col xs={12} lg={2}>
            <div className="sidebar">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Gender</Accordion.Header>
                  <Accordion.Body>
                    <InputGroup className="gender-checkbox">
                      <Form.Check inline label="Male" name="gender" type="radio" id="male" />
                      <Form.Check inline label="Female" name="gender" type="radio" id="female" />
                    </InputGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Colour</Accordion.Header>
                  <Accordion.Body>
                    <InputGroup className="color-checkbox">
                      <div className="color-item">
                        <Form.Check aria-label="black" style={{ backgroundColor: '#000' }} />
                      </div>
                      <div className="color-item">
                        <Form.Check aria-label="red" style={{ backgroundColor: 'red' }} />
                      </div>
                      <div className="color-item">
                        <Form.Check aria-label="yellow" style={{ backgroundColor: 'yellow' }} />
                      </div>
                      <div className="color-item">
                        <Form.Check aria-label="cyan" style={{ backgroundColor: 'cyan' }} />
                      </div>
                      <div className="color-item">
                        <Form.Check aria-label="gray" style={{ backgroundColor: 'gray' }} />
                      </div>
                      <div className="color-item">
                        <Form.Check aria-label="mavy" style={{ backgroundColor: 'navy' }} />
                      </div>
                      <div className="color-item">
                        <Form.Check
                          aria-label="goldenrod"
                          style={{ backgroundColor: 'goldenrod' }}
                        />
                      </div>
                      <div className="color-item">
                        <Form.Check aria-label="goldenrod" style={{ backgroundColor: '' }} />
                      </div>
                    </InputGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Material</Accordion.Header>
                  <Accordion.Body>Material</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Pattern</Accordion.Header>
                  <Accordion.Body>Pattern</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Price</Accordion.Header>
                  <Accordion.Body>{/* <RangeSlider /> */}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col xs={12} lg={10}>
            <div className="product-topbar">
              <div className="d-flex flex-wrap">
                <div className="prodict-views d-flex">
                  <div className="view-item">
                    <button
                      onClick={() => setView('list')}
                      className={view === 'list' ? 'active' : ''}
                    >
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="7.64706" height="7.64706" fill="#868686" />
                        <rect
                          width="7.64706"
                          height="7.64706"
                          transform="translate(0 9.17651)"
                          fill="#868686"
                        />
                        <rect
                          width="7.64706"
                          height="7.64706"
                          transform="translate(0 18.3529)"
                          fill="#868686"
                        />
                        <rect
                          width="7.64706"
                          height="7.64706"
                          transform="translate(9.17676)"
                          fill="#868686"
                        />
                        <rect
                          width="7.64706"
                          height="7.64706"
                          transform="translate(9.17676 9.17651)"
                          fill="#868686"
                        />
                        <rect
                          width="7.64706"
                          height="7.64706"
                          transform="translate(9.17676 18.3529)"
                          fill="#868686"
                        />
                        <rect
                          width="7.64706"
                          height="7.64706"
                          transform="translate(18.3525)"
                          fill="#868686"
                        />
                        <rect
                          width="7.64706"
                          height="7.64706"
                          transform="translate(18.3525 9.17651)"
                          fill="#868686"
                        />
                        <rect
                          width="7.64706"
                          height="7.64706"
                          transform="translate(18.3525 18.3529)"
                          fill="#868686"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="view-item">
                    <button
                      onClick={() => setView('grid')}
                      className={view === 'grid' ? 'active' : ''}
                    >
                      <svg
                        width="27"
                        height="26"
                        viewBox="0 0 27 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(0.5)"
                          fill="#868686"
                        />
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(0.5 6.74072)"
                          fill="#868686"
                        />
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(0.5 13.4814)"
                          fill="#868686"
                        />
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(0.5 20.2222)"
                          fill="#868686"
                        />
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(7.24121)"
                          fill="#868686"
                        />
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(7.24121 6.74072)"
                          fill="#868686"
                        />
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(7.24121 13.4814)"
                          fill="#868686"
                        />
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(7.24121 20.2222)"
                          fill="#868686"
                        />
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(13.9814)"
                          fill="#868686"
                        />
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(13.9814 6.74072)"
                          fill="#868686"
                        />
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(13.9814 13.4814)"
                          fill="#868686"
                        />
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(13.9814 20.2222)"
                          fill="#868686"
                        />
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(20.7227)"
                          fill="#868686"
                        />
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(20.7227 6.74072)"
                          fill="#868686"
                        />
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(20.7227 13.4814)"
                          fill="#868686"
                        />
                        <rect
                          width="5.77778"
                          height="5.77778"
                          transform="translate(20.7227 20.2222)"
                          fill="#868686"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="view-item">
                    <p>150 Product</p>
                  </div>
                </div>
                <div className="product-search d-flex">
                  <Form.Group controlId="searchForm.ControlInput">
                    <Form.Control type="search" placeholder="Search Here..." />
                  </Form.Group>
                  <Form.Group controlId="searchForm.ControlInput">
                    <Form.Select aria-label="Default select example">
                      <option>Ascending price</option>
                      <option value="1">Ascending price</option>
                      <option value="2">Decending price</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
            </div>
            <Row className={`product-container g-4 ${view}`}>
              {WomanData.map((woman) => (
                <Col
                  key={woman.id}
                  xs={12}
                  md={view === 'grid' ? 3 : 4}
                  lg={view === 'grid' ? 3 : 4}
                  xl={view === 'grid' ? 3 : 4}
                >
                  <div className="womanproductbox">
                    <Link href={'/'}>
                      <div className="image">
                        <Image src={woman.image} width={328} height={350} alt={'offer'} />
                      </div>
                      <div className="info">
                        <h6>Lorem ipsum dolor sit amet.</h6>
                        <ul>
                          <li className="active">
                            <svg
                              width="16"
                              height="15"
                              viewBox="0 0 16 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                fill="currentColor"
                              />
                            </svg>
                          </li>
                          <li className="active">
                            <svg
                              width="16"
                              height="15"
                              viewBox="0 0 16 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                fill="currentColor"
                              />
                            </svg>
                          </li>
                          <li className="active">
                            <svg
                              width="16"
                              height="15"
                              viewBox="0 0 16 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                fill="currentColor"
                              />
                            </svg>
                          </li>
                          <li className="active">
                            <svg
                              width="16"
                              height="15"
                              viewBox="0 0 16 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                fill="currentColor"
                              />
                            </svg>
                          </li>
                          <li>
                            <svg
                              width="16"
                              height="15"
                              viewBox="0 0 16 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                fill="currentColor"
                              />
                            </svg>
                          </li>
                        </ul>
                        <div className="pr-price">
                          <ins>$55.00</ins>
                          <del>$60.00</del>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
      <div className="woman-cms-wrapper">
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} lg={10}>
              <div className="cms-content">
                <h3>Lorem ipsum dolor sit amet consectetur</h3>
                <p>
                  <strong>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tristique
                    nibh.{' '}
                  </strong>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae lacus
                  tellus. Duis consectetur risus id mattis vehicula. Duis eget nisl non metus
                  ultricies mattis. Sed pellentesque venenatis velit, ut finibus turpis fermentum
                  sit amet. Donec scelerisque dapibus condimentum. Sed ornare orci eu nisi porttitor
                  aliquam.
                </p>
                <p>
                  <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong>
                </p>
                <p>
                  Nullam imperdiet efficitur tellus vitae gravida. Quisque eu erat molestie sapien
                  blandit posuere id eu ex. Mauris ac turpis varius, pellentesque neque vel,
                  dignissim leo. Curabitur elit ex, imperdiet non augue quis, sodales dapibus nulla.
                  Donec ut gravida dui, sit amet congue purus.
                </p>
                <p>
                  <strong>
                    Donec metus tellus, consectetur id leo in, condimentum tempor enim.
                  </strong>
                </p>
                <p>
                  Donec blandit accumsan eros, et faucibus orci pretium sit amet. Praesent sit amet
                  leo ligula. Praesent auctor venenatis dui, et feugiat erat tempus sit amet.
                  Quisque vitae efficitur mi. Suspendisse maximus mauris ut leo tristique tincidunt.
                  Nam aliquet tellus eros, eu fermentum quam scelerisque pulvinar.
                </p>
                <p>
                  <strong>Aenean eu diam non justo tempor rhoncus.</strong>
                </p>
                <p>
                  ultricies sit amet gravida eget, venenatis in elit. Sed cursus sodales mauris,
                  quis porta ante varius quis. Morbi scelerisque leo id odio auctor gravida. Mauris
                  feugiat vulputate orci, a vehicula est consectetur a. Aliquam suscipit, erat sit
                  amet ultrices malesuada, dolor tellus ullamcorper ipsum,
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="faq-wrapper">
        <Container fluid>
          <div className="section_title center">
            <h6>DISCOVER MORE</h6>
            <h2>Frequently Asked Questions</h2>
          </div>
          <Row className="justify-content-center">
            <Col xs={12} lg={7}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Aliquam mattis cursus nulla sed porttitor?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Aenean eu diam non justo tempor rhoncus?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Nullam imperdiet efficitur tellus vitae gravida?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    dolor tellus ullamcorper ipsum, ac lobortis nisl nisi ut nun?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
