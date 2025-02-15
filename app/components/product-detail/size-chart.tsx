import { useState } from 'react';
import { Button, Form, InputGroup, Modal, Nav, Tab } from 'react-bootstrap';

export default function SizeChart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>Size Chart</Button>

      <Modal show={show} onHide={handleClose} className="size-modal">
        <Tab.Container id="left-tabs-example" defaultActiveKey="cm">
          <Modal.Header>
            <Modal.Title>Select size</Modal.Title>
            <Nav variant="pills" className="flex-row">
              <Nav.Item>
                <Nav.Link eventKey="cm">CM</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="inches">INCHES</Nav.Link>
              </Nav.Item>
            </Nav>
            <Button variant="secondary" className="close" onClick={handleClose}>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0508 12.0502L21.9503 21.9497"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.0508 21.9498L21.9503 12.0503"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="inches">
                <InputGroup className="size-radiobuttons d-flex flex-wrap">
                  <Form.Check inline label="14" name="size" type="radio" id="14" />
                  <Form.Check inline label="14 1/2" name="size" type="radio" id="36" />
                  <Form.Check inline label="37" name="size" type="radio" id="37" />
                  <Form.Check inline label="39" name="size" type="radio" id="39" />
                  <Form.Check inline label="40" name="size" type="radio" id="40" />
                  <Form.Check inline label="41" name="size" type="radio" id="41" />
                  <Form.Check inline label="42" name="size" type="radio" id="42" />
                  <Form.Check inline label="43" name="size" type="radio" id="43" />
                  <Form.Check inline label="44" name="size" type="radio" id="44" />
                  <Form.Check inline label="45" name="size" type="radio" id="45" />
                  <Form.Check inline label="46" name="size" type="radio" id="46" />
                  <Form.Check inline label="47" name="size" type="radio" id="47" />
                  <Form.Check inline label="48" name="size" type="radio" id="48" />
                  <Form.Check inline label="49" name="size" type="radio" id="49" />
                </InputGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="cm">
                <InputGroup className="size-radiobuttons d-flex flex-wrap">
                  <Form.Check inline label="35" name="size" type="radio" id="35" />
                  <Form.Check inline label="36" name="size" type="radio" id="36" />
                  <Form.Check inline label="37" name="size" type="radio" id="37" />
                  <Form.Check inline label="39" name="size" type="radio" id="39" />
                  <Form.Check inline label="40" name="size" type="radio" id="40" />
                  <Form.Check inline label="41" name="size" type="radio" id="41" />
                  <Form.Check inline label="42" name="size" type="radio" id="42" />
                  <Form.Check inline label="43" name="size" type="radio" id="43" />
                  <Form.Check inline label="44" name="size" type="radio" id="44" />
                  <Form.Check inline label="45" name="size" type="radio" id="45" />
                  <Form.Check inline label="46" name="size" type="radio" id="46" />
                  <Form.Check inline label="47" name="size" type="radio" id="47" />
                  <Form.Check inline label="48" name="size" type="radio" id="48" />
                  <Form.Check inline label="49" name="size" type="radio" id="49" />
                </InputGroup>
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
}
