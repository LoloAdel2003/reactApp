import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { FaShippingFast, FaMoneyBillWave, FaHeadset, FaCreditCard } from 'react-icons/fa';

// بيانات الميزات
const features = [
  {
    icon: <FaShippingFast size={40} />,
    title: 'Free Shipping',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    icon: <FaMoneyBillWave size={40} />,
    title: 'Money Guarantee',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    icon: <FaHeadset size={40} />,
    title: '24×7 Support',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    icon: <FaCreditCard size={40} />,
    title: 'Flexible Payment',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
];

const Bannar = () => {
  return (
    <>
      {/* ✅ يظهر فقط في الشاشات الصغيرة والمتوسطة */}
      <div className="d-lg-none land">
        <Carousel controls={false} indicators={false} data-bs-theme="dark">
          <Carousel.Item>
            <section className="bannar text-light">
              <Container>
                <Row className="vh-100">
                  <Col className="bannartex" sm={12}>
                    <div className="landingSection d-flex align-items-center p-4 text-light">
                      <div className="content fw-normal ">
                        Grab Big Deals On
                        <span> Trendy Outfits!</span>
                        <p>Discover the latest fashion at unbeatable prices!</p>
                        <p>Shop now and elevate your wardrobe with stylish essentials</p>
                        <HashLink to="/#Menu" className="a position-relative px-4 py-2">
                          <button type="button" className="btn btn-outline-warning fw-bold">shop Now</button>
                        </HashLink>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* ✅ يظهر فقط في الشاشات الكبيرة */}
      <div className="d-none d-lg-block land">
        <Carousel data-bs-theme="dark">
          {/* Slide 1 */}
          <Carousel.Item>
            <section className="bannar text-light">
              <Container>
                <Row className="vh-100">
                  <Col className="bannartex" md={6}>
                    <div className="landingSection d-flex align-items-center p-3 text-light">
                      <div className="content fw-normal">
                        Grab Big Deals On
                        <span> Trendy Outfits!</span>
                        <p>Discover the latest fashion at unbeatable prices!</p>
                        <p>Shop now and elevate your wardrobe with stylish essentials</p>
                        <HashLink to="/#Menu" className="a position-relative px-4 py-2">
                          <button type="button" className="btn btn-outline-warning fw-bold">shop Now</button>
                        </HashLink>
                      </div>
                    </div>
                  </Col>
                  <Col className="bannarimg d-flex align-items-center" md={6}>
                    <img src="imges/bbb.jpg" alt="" width="550px" />
                  </Col>
                </Row>
              </Container>
            </section>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <img src="imges/commerence.png" alt="commerence" className="mx-auto d-block img-fluid" />
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <Carousel.Caption>
              <h5>100% Customer Satisfaction!</h5>
              <h1>We Provide Best Customer Experience</h1>
              <Container className="text-center py-5">
                <Row>
                  {features.map((feature, index) => (
                    <Col key={index} md={3} className="mb-4">
                      <div className="feature-box">
                        <div className="mb-3 icon">{feature.icon}</div>
                        <h5 className="fw-bold">{feature.title}</h5>
                        <p className="text-muted">{feature.text}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Bannar;
