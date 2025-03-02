'use client';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

interface FAQ {
  question: string;
  answer: string;
}

export interface IFaqRe {
  _id: string;
  slug: string;
  status: boolean;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  faqs: FAQ[];
}

export interface IListingFaqProps {
  faqData: IFaqRe;
}
const ListingFaq = ({ faqData }: IListingFaqProps) => {
  const faqs = faqData?.faqs || []; // Default to an empty array

  return (
    <div className="faq-wrapper">
      <Container fluid>
        <div className="section_title center">
          <h6>DISCOVER MORE</h6>
          <h2>Frequently Asked Questions</h2>
        </div>
        <Row className="justify-content-center">
          <Col xs={12} lg={7}>
            <Accordion>
              {faqs.length > 0 ? (
                faqs.map((faq: FAQ) => (
                  <Accordion.Item key={faq.question} eventKey={faq.question}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>{faq.answer}</Accordion.Body>
                  </Accordion.Item>
                ))
              ) : (
                <p>No FAQs available.</p>
              )}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListingFaq;
