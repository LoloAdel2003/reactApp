import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./App.css"
function Footer() {
  return (
    <footer className=" text-light py-4 text-center text-md-start">
      <Container>
      <hr className="text-light my-3" />
        <Row>
          <Col md={3} className='text-center text-md-start'>
            <h5 className="navbar-brand text-light">Fashion</h5>
            <p className="text-muted small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam.
            </p>
            <div>
              <a href="#" className="text-light me-2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-2"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light me-2"><i className="bi bi-youtube"></i></a>
              <a href="#" className="text-light me-2"><i className="bi bi-instagram"></i></a>
            </div>
          </Col>
          <Col md={3} sm={4}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Our Team</a></li>
              <li><a href="#" className="text-light text-decoration-none">Help Center</a></li>
            </ul>
          </Col>
          <Col md={3} sm={4}>
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Gift Cards</a></li>
              <li><a href="#" className="text-light text-decoration-none">Our Products</a></li>
              <li><a href="#" className="text-light text-decoration-none">My Accounts</a></li>
              <li><a href="#" className="text-light text-decoration-none">Shipping</a></li>
              <li><a href="#" className="text-light text-decoration-none">Returns</a></li>
            </ul>
          </Col>
          <Col md={3} sm={4}>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Payment Options</a></li>
              <li><a href="#" className="text-light text-decoration-none">Store Locator</a></li>
              <li><a href="#" className="text-light text-decoration-none">Accessibility</a></li>
              <li><a href="#" className="text-light text-decoration-none">Affiliates</a></li>
            </ul>
          </Col>
         
        </Row>
        <hr className="text-light my-3" />
        <Row className="justify-content-between align-items-center">
          <Col md="auto">
            <p className="text-muted small">Copyright © 2023 Fashion. All Rights Reserved.</p>
          </Col>
          <Col md="auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item"><a href="#" className="text-light text-decoration-none small">User Terms & Conditions</a></li>
              <li className="list-inline-item ms-3"><a href="#" className="text-light text-decoration-none small">Privacy Policy</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;