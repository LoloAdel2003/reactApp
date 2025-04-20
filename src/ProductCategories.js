import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const ProductCategories = () => {
  return (
    <Container className="py-5">
      <Row className="g-4">
        {/* Women Category */}
        <Col md={6}>
          <Card className="h-100 border-0 shadow">
            <Row className="g-0 align-items-center">
              <Col md={6} className="p-4">
                <Card.Body>
                  <h6 className="text-muted">250+ Products</h6>
                  <Card.Title>Women</Card.Title>
                  <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  </Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="px-0 py-1 border-0">Blazers</ListGroup.Item>
                    <ListGroup.Item className="px-0 py-1 border-0">T-Shirts and Blouses</ListGroup.Item>
                    <ListGroup.Item className="px-0 py-1 border-0">Dresses</ListGroup.Item>
                    <ListGroup.Item className="px-0 py-1 border-0">Jackets & Coats</ListGroup.Item>
                    <ListGroup.Item className="px-0 py-1 border-0">Jeans</ListGroup.Item>
                    <ListGroup.Item className="px-0 py-1 border-0">Knit</ListGroup.Item>
                    <ListGroup.Item className="px-0 py-1 border-0">Sarees</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Col>
              <Col md={6}>
                <img
                  src="https://i.ibb.co/DKf5JdF/women-model.png"
                  alt="Women"
                  className="img-fluid rounded-end"
                />
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Men Category */}
        <Col md={3}>
          <Card className="h-100 border-0 shadow text-center">
            <Card.Body>
              <h6 className="text-muted">150+ Products</h6>
              <Card.Title>Men</Card.Title>
              <ListGroup variant="flush" className="mb-3">
                <ListGroup.Item className="border-0 py-1">Blazers</ListGroup.Item>
                <ListGroup.Item className="border-0 py-1">T-Shirts and Shirts</ListGroup.Item>
                <ListGroup.Item className="border-0 py-1">Jackets & Coats</ListGroup.Item>
                <ListGroup.Item className="border-0 py-1">Jeans</ListGroup.Item>
              </ListGroup>
              <img
                src="https://i.ibb.co/DLpbFGn/men-model.png"
                alt="Men"
                className="img-fluid"
              />
            </Card.Body>
          </Card>
        </Col>

        {/* Accessories Category */}
        <Col md={3}>
          <Card className="h-100 border-0 shadow text-center">
            <Card.Body>
              <h6 className="text-muted">150+ Products</h6>
              <Card.Title>Accessories</Card.Title>
              <ListGroup variant="flush" className="mb-3">
                <ListGroup.Item className="border-0 py-1">HandBag</ListGroup.Item>
                <ListGroup.Item className="border-0 py-1">Watches</ListGroup.Item>
                <ListGroup.Item className="border-0 py-1">Sunglasses</ListGroup.Item>
                <ListGroup.Item className="border-0 py-1">Hat</ListGroup.Item>
              </ListGroup>
              <img
                src="https://i.ibb.co/mzvMzVG/accessories.png"
                alt="Accessories"
                className="img-fluid"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCategories;
