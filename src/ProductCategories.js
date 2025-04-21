import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Title from './Title';

const ProductCategories = () => {
  return (
<>
<Title title="Category" id="Category" />
<Container className=" d-flex pb-5" >
      <Row className="g-4 d-flex align-items-center justify-content-center">
        {/* Women Category */}
        <Col lg={6} xs={12} >
          <Card className=" border-0 shadow p-3">
            <Row className="align-items-center g-0">
              <Col xs={6}>
                <h6 className="text-muted">250+ Products</h6>
                <h3>Women</h3>
                
                <ListGroup variant="flush">
                  {["Blazers", "T-Shirts and Blouses", "Dresses", "Jackets & Coats", "Jeans", "Knit", "Sarees"].map((item, idx) => (
                    <ListGroup.Item key={idx} className="px-0 py-1 border-0">
                      {item}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col xs={6} >
                <img
                  src="imges/girl.jpg"
                  alt="Women"
                  className="img-fluid ms-auto d-block "
                />
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Men Category */}
       <Col lg={6} xs={12}>
       <Row className="g-4">
       <Col lg={12} xs={12}>
       <Card className=" border-0 shadow p-3">
            <Row className="align-items-center g-0">
              <Col xs={6}>
                <h6 className="text-muted">250+ Products</h6>
                <h3>Men</h3>
               
                <ListGroup variant="flush">
                  {["Blazers", "T-Shirts and Sirts",  "Jackets & Coats", "Jeans"].map((item, idx) => (
                    <ListGroup.Item key={idx} className="px-0 py-1 border-0">
                      {item}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col xs={6}>
                <img
                  src="imges/man.png"
                  alt="man"
                  className="img-fluid ms-auto d-block "
                />
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Accessories Category */}
        <Col lg={12} xs={12}>
        <Card className=" border-0 shadow p-3">
            <Row className="align-items-center g-0">
              <Col xs={6}>
                <h6 className="text-muted">250+ Products</h6>
                <h3>Accessories</h3>
               
                <ListGroup variant="flush">
                  {["HandBag", "Watches", "Sunglasses", "Hat"].map((item, idx) => (
                    <ListGroup.Item key={idx} className="px-0 py-1 border-0">
                      {item}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col xs={6}>
                <img
                  src="imges/Bag.jpg"
                  alt="Women"
                  className="img-fluid ms-auto d-block "
                />
              </Col>
            </Row>
          </Card>
        </Col>
       </Row>

       </Col>
      </Row>
    </Container>
</>
   
  );
};

export default ProductCategories;
