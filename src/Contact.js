import React, { useRef, useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import Title from './Title';
import "./App.css"

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const remove =()=>{
    setTimeout(() => {
      setStatus("")
    }, 2000);
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_il5i2es',
      'template_xihr7jc',
      formRef.current,
      '5zvNOuu6c5IGCvKjs'
    )
    .then(() => {
      setStatus("SUCCESS");
      // remove()
      formRef.current.reset();
      remove()
    })
    .catch(() => {
      setStatus("FAILED");
      remove()
    });
  };

  return (
    <Container className="py-5">
      <Title title="Contact Us" id="Contact" />
      {status === "SUCCESS" && <Alert variant="success">Message sent successfully!</Alert>}
      {status === "FAILED" && <Alert variant="danger">Failed to send message. Please try again.</Alert>}
      
      <Row>
        {/* معلومات التواصل */}
        <Col md={6} className="mb-4 text-light">
          <h4>Information</h4>
          <p>
            Contact us to insure an order or get more information about any tour or trip you are interested in. Our operators will provide you with all the information about your future journey.
          </p>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li>📞 Call Free: 555666777</li>
            {/* <li>📠 FAX: +1 376-775-5625</li> */}
            <li>🕒 Mon - Sat: 8:00 - 18:00</li>
            <li>✉️ contact@yourcompany.com</li>
          </ul>
        </Col>

        {/* نموذج التواصل */}
        <Col md={6}>
          <Form ref={formRef} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control type="text" name="user_name" placeholder="Your Name*" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" name="user_email" placeholder="Email*" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Control type="tel" name="user_phone" placeholder="Phone" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Control as="textarea" name="message" rows={5} placeholder="Message*" required />
            </Form.Group>
            <Button
              type="submit"
              // style={{ backgroundColor: '#f6b31a', border: 'none' }}
              className="px-4 py-2 rounded-pill send"
            >
              SEND MESSAGE
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
