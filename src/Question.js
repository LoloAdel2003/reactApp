import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import './Question.css'; // نضيف ملف CSS خارجي للتنسيق
import Title from './Title';

const Question = () => {
  return (
    <Container className="py-5">
        <Title title="FAQ" />
      <Row>
        {/* القسم الأيسر: الأسئلة */}
        <Col md={7}>
          <Accordion defaultActiveKey="0" flush className="custom-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How can I place an order?</Accordion.Header>
              <Accordion.Body>
                You can place an order by browsing our catalog, selecting the items you want, and clicking "Add to Cart". Once you're ready, go to your cart and proceed to checkout.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>What payment methods do you accept?</Accordion.Header>
              <Accordion.Body>
                We accept major credit cards (Visa, MasterCard, American Express), debit cards, and PayPal for secure and convenient payments.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>What is your return policy?</Accordion.Header>
              <Accordion.Body>
                We offer a 30-day return policy. Items must be returned in their original condition with a receipt. Refunds are issued to the original method of payment.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>How can I track my order?</Accordion.Header>
              <Accordion.Body>
                After placing your order, you will receive a confirmation email with a tracking link. You can also track your order through your account dashboard.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Can I cancel my order after it has been placed?</Accordion.Header>
              <Accordion.Body>
                Yes, you can cancel your order within 1 hour of placement. After that, we may have already processed it. Please contact support as soon as possible.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* القسم الأيمن: العنوان */}
        <Col md={5} className="d-flex flex-column justify-content-center align-items-start px-4 d-none d-lg-flex" style={{ color: '#f6b31a', borderRadius: '12px' }}>
          <h6 className="text-uppercase text-muted">FAQ</h6>
          <h2 className="fw-bold" style={{ fontSize: '2rem', color: 'white' }}>
            Questions? Look <br /> here.
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Question;
