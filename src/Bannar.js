import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./App.css"
import { Container,Col,Row} from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link';
import { FaShippingFast, FaMoneyBillWave, FaHeadset, FaCreditCard } from 'react-icons/fa';
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
    <Carousel data-bs-theme="dark">
      <Carousel.Item >
       <section className="bannar text-light ">
         <Container>
           <Row class="vh-100">
       
               <Col className="bannartex " sm={12} md={6}>
               <div id="landing" class=" landingSection d-flex align-items-center p-3 text-light ">
               <div class="content fw-normal">
                 Grab Big Deals On 
                 <span> Trendy Outfits!</span>
                 <p >Discover the latest fashion at unbeatable prices! </p>
                 <p>Shop now and elevate your wardrobe with stylish essentials</p>
                   <HashLink to="/#Menu" className="a  position-relative px-4 py-2">         
                           <button type="button" class="btn btn-outline-warning fw-bold ">shop Now</button>
                   </HashLink>
       
       
               </div>
               </div>
               </Col>
               <Col className="bannarimg" sm={12} md={4}>
               <div id="landing" class=" landingSection d-flex align-items-center   d-none d-md-flex">
                   <img src="imges/bbb.jpg" alt="" width="550px" />
               </div>
       
               </Col>
       
           </Row>
       
         </Container>
          </section>
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item >
        
       <img src="imges/commerence.png" alt="commerence" className="mx-auto d-block"/>
       </Carousel.Item>

      <Carousel.Item>
        
        <Carousel.Caption>
          <h5>100% Customer Satisfaction!</h5>
          <h1>We Provide Best Customer Experience</h1>
          <Container className="text-center py-5">
      <Row>
        {features.map((feature, index) => (
          <Col key={index} md={3} sm={6} className="mb-4">
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
  );
};

export default Bannar;
