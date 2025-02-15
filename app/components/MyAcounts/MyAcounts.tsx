'use client';
import { useState } from 'react';
import '@/app/styles/my-account.css';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Modal from 'react-bootstrap/Modal';
export default function MyAcountspage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="my-account-page">
        <div className="container">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col md={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">My Account</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">My Address</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Order history</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="four">Settings</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="five">Log out</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="my-account-block-main">
                      <h2>Accounts</h2>
                      <div className="border-box-account">
                        <h3>Name and contact</h3>
                        <div className="form-main">
                          <form action="">
                            <Row>
                              <Col sm={4}>
                                <div className="input-box">
                                  <input type="text" className="input-text" placeholder="name" />
                                </div>
                              </Col>
                              <Col sm={4}>
                                <div className="input-box">
                                  <input type="text" className="input-text" placeholder="surname" />
                                </div>
                              </Col>
                              <Col sm={4}>
                                <div className="input-box">
                                  <input
                                    type="text"
                                    className="input-text"
                                    placeholder="Middle name"
                                  />
                                </div>
                              </Col>
                              <Col sm={4}>
                                <div className="input-box">
                                  <input type="text" className="input-text" placeholder="email" />
                                </div>
                              </Col>
                              <Col sm={4}>
                                <div className="input-box">
                                  <input type="text" className="input-text" placeholder="phone" />
                                </div>
                              </Col>
                              <Col sm={4}>
                                <div className="input-box">
                                  <input
                                    type="text"
                                    className="input-text"
                                    placeholder="telephone"
                                  />
                                </div>
                              </Col>
                              <Col sm={4}>
                                <div className="input-box">
                                  <input
                                    type="number"
                                    className="input-text"
                                    placeholder="height"
                                  />
                                </div>
                              </Col>
                              <Col sm={4}>
                                <div className="input-box">
                                  <input
                                    type="number"
                                    className="input-text"
                                    placeholder="weight"
                                  />
                                </div>
                              </Col>
                              <Col sm={12}>
                                <div className="input-box checkout-box-main">
                                  <div className="checkout-box">
                                    <input type="radio" id="one" name="name" />
                                    <label htmlFor="one">Men</label>
                                  </div>
                                  <div className="checkout-box">
                                    <input type="radio" id="one-1" name="name" />
                                    <label htmlFor="one-1">Women</label>
                                  </div>
                                </div>
                              </Col>
                              <Col sm={12}>
                                <div className="input-box submit-row">
                                  <input type="submit" value="save" />
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </div>
                      </div>
                      <div className="border-box-account">
                        <h3>Change password</h3>
                        <div className="form-main">
                          <form action="">
                            <Row>
                              <Col sm={4}>
                                <div className="input-box">
                                  <input
                                    type="text"
                                    className="input-text"
                                    placeholder="old password"
                                  />
                                  <div className="eye-icon">
                                    <Link href="#"></Link>
                                  </div>
                                </div>
                              </Col>
                              <Col sm={4}>
                                <div className="input-box">
                                  <input
                                    type="text"
                                    className="input-text"
                                    placeholder="New password"
                                  />
                                  <div className="eye-icon">
                                    <Link href="#"></Link>
                                  </div>
                                </div>
                              </Col>
                              <Col sm={4}>
                                <div className="input-box">
                                  <input
                                    type="text"
                                    className="input-text"
                                    placeholder="Confirm password"
                                  />
                                  <div className="eye-icon">
                                    <Link href="#"></Link>
                                  </div>
                                </div>
                              </Col>

                              <Col sm={12}>
                                <div className="input-box submit-row">
                                  <input type="submit" value="save new password" />
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="my-account-block-main">
                      <h2>My address</h2>
                      <div className="border-box-account">
                        <h3>Select address</h3>
                        <div className="form-main">
                          <form action="">
                            <Row>
                              <Col sm={6}>
                                <h4>Delivery Address</h4>
                                <div className="black-btn">
                                  <Link href="#" onClick={handleShow}>
                                    + Add
                                  </Link>
                                </div>
                                <div className="address-box">
                                  <span>Soren Hansen</span>
                                  <p>
                                    441 <br /> Ram Nath Deoria
                                    <br /> 274001 , DEORIA <br />
                                    Phone number : 08839349033
                                  </p>
                                </div>
                              </Col>
                              <Col sm={6}>
                                <h4>Billing address</h4>
                                <div className="black-btn">
                                  <Link href="#" onClick={handleShow}>
                                    + Add
                                  </Link>
                                </div>
                                <div className="address-box">
                                  <span>Soren Hansen</span>
                                  <p>
                                    441 <br /> Ram Nath Deoria
                                    <br /> 274001 , DEORIA <br />
                                    Phone number : 08839349033
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="my-account-block-main">
                      <h2>My orders</h2>
                      <div className="border-box-account">
                        <h3>Orders</h3>
                        <div className="order-table-main">
                          <div className="order-table">
                            <ul className="thead">
                              <li>
                                <div className="text-1">Product name </div>
                                <div className="text-2">Amount </div>
                                <div className="text-3">Order status </div>
                                <div className="text-4">View order</div>
                              </li>
                            </ul>
                            <ul className="tbody">
                              <li>
                                <div data-title="Product name" className="text-1">
                                  sweater
                                </div>
                                <div data-title="Amount" className="text-2">
                                  $ 25.00
                                </div>
                                <div data-title="Order status" className="text-3">
                                  Active
                                </div>
                                <div data-title="View order" className="text-4">
                                  <Link href="#">view</Link>
                                  <Link href="#">cancle</Link>
                                </div>
                              </li>
                              <li>
                                <div data-title="Product name" className="text-1">
                                  sweater
                                </div>
                                <div data-title="Amount" className="text-2">
                                  $ 25.00
                                </div>
                                <div data-title="Order status" className="text-3">
                                  Active
                                </div>
                                <div data-title="View order" className="text-4">
                                  <Link href="#">view</Link>
                                  <Link href="#">cancle</Link>
                                </div>
                              </li>
                              <li>
                                <div data-title="Product name" className="text-1">
                                  sweater
                                </div>
                                <div data-title="Amount" className="text-2">
                                  $ 25.00
                                </div>
                                <div data-title="Order status" className="text-3">
                                  Active
                                </div>
                                <div data-title="View order" className="text-4">
                                  <Link href="#">view</Link>
                                  <Link href="#">cancle</Link>
                                </div>
                              </li>
                              <li>
                                <div data-title="Product name" className="text-1">
                                  sweater
                                </div>
                                <div data-title="Amount" className="text-2">
                                  $ 25.00
                                </div>
                                <div data-title="Order status" className="text-3">
                                  Active
                                </div>
                                <div data-title="View order" className="text-4">
                                  <Link href="#">view</Link>
                                  <Link href="#">cancle</Link>
                                </div>
                              </li>
                              <li>
                                <div data-title="Product name" className="text-1">
                                  sweater
                                </div>
                                <div data-title="Amount" className="text-2">
                                  $ 25.00
                                </div>
                                <div data-title="Order status" className="text-3">
                                  Active
                                </div>
                                <div data-title="View order" className="text-4">
                                  <Link href="#">view</Link>
                                  <Link href="#">cancle</Link>
                                </div>
                              </li>
                              <li>
                                <div data-title="Product name" className="text-1">
                                  sweater
                                </div>
                                <div data-title="Amount" className="text-2">
                                  $ 25.00
                                </div>
                                <div data-title="Order status" className="text-3">
                                  Active
                                </div>
                                <div data-title="View order" className="text-4">
                                  <Link href="#">view</Link>
                                  <Link href="#">cancle</Link>
                                </div>
                              </li>
                              <li>
                                <div data-title="Product name" className="text-1">
                                  sweater
                                </div>
                                <div data-title="Amount" className="text-2">
                                  $ 25.00
                                </div>
                                <div data-title="Order status" className="text-3">
                                  Active
                                </div>
                                <div data-title="View order" className="text-4">
                                  <Link href="#">view</Link>
                                  <Link href="#">cancle</Link>
                                </div>
                              </li>
                              <li>
                                <div data-title="Product name" className="text-1">
                                  sweater
                                </div>
                                <div data-title="Amount" className="text-2">
                                  $ 25.00
                                </div>
                                <div data-title="Order status" className="text-3">
                                  Active
                                </div>
                                <div data-title="View order" className="text-4">
                                  <Link href="#">view</Link>
                                  <Link href="#">cancle</Link>
                                </div>
                              </li>
                              <li>
                                <div data-title="Product name" className="text-1">
                                  sweater
                                </div>
                                <div data-title="Amount" className="text-2">
                                  $ 25.00
                                </div>
                                <div data-title="Order status" className="text-3">
                                  Active
                                </div>
                                <div data-title="View order" className="text-4">
                                  <Link href="#">view</Link>
                                  <Link href="#">cancle</Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="four">
                    <div className="my-account-block-main">
                      <h2>Settings</h2>
                      <div className="border-box-account">
                        <h3>Settings</h3>
                        <div className="form-main">
                          <form action="">
                            <Row>
                              <Col sm={4}>
                                <div className="input-box">
                                  <select name="" id="">
                                    <option>English</option>
                                    <option>English</option>
                                    <option>English</option>
                                    <option>English</option>
                                    <option>English</option>
                                    <option>English</option>
                                    <option>English</option>
                                    <option>English</option>
                                    <option>English</option>
                                    <option>English</option>
                                    <option>English</option>
                                    <option>English</option>
                                  </select>
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="five">First tab content</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="custom-modal" centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Delivery Address</Modal.Title>
        </Modal.Header>
        <div className="modal-form-block">
          <div className="form-main">
            <form action="">
              <Row>
                <Col sm={4}>
                  <div className="input-box">
                    <input type="text" className="input-text" placeholder="name" />
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="input-box">
                    <input type="text" className="input-text" placeholder="surname" />
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="input-box">
                    <input type="text" className="input-text" placeholder="Middle name" />
                  </div>
                </Col>
                <Col sm={12}>
                  <div className="input-box">
                    <input type="text" className="input-text" placeholder="company" />
                  </div>
                </Col>
                <Col sm={12}>
                  <div className="input-box">
                    <input type="text" className="input-text" placeholder="Address line 1" />
                  </div>
                </Col>
                <Col sm={12}>
                  <div className="input-box">
                    <input type="text" className="input-text" placeholder="Address line 2" />
                  </div>
                </Col>
                <Col sm={12}>
                  <div className="input-box">
                    <select>
                      <option>Phone code</option>
                      <option>Phone code</option>
                      <option>Phone code</option>
                      <option>Phone code</option>
                      <option>Phone code</option>
                      <option>Phone code</option>
                      <option>Phone code</option>
                      <option>Phone code</option>
                      <option>Phone code</option>
                      <option>Phone code</option>
                      <option>Phone code</option>
                    </select>
                  </div>
                </Col>
                <Col sm={12}>
                  <div className="input-box">
                    <input type="text" className="input-text" placeholder="phone number" />
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="input-box">
                    <input type="text" className="input-text" placeholder="town" />
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="input-box">
                    <input type="text" className="input-text" placeholder="Postal code" />
                  </div>
                </Col>

                <Col sm={12}>
                  <div className="input-box submit-row">
                    <input type="submit" value="submit" />
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
