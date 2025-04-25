import React, { useContext } from 'react';
import { ProductContext } from './productContext';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import "./ProductList.css"

const ProductDetails = () => {
  const { selectProduct, handelAddCart } = useContext(ProductContext);

  const handleCartProduct = (product) => {
    if (selectProduct) {
      handelAddCart(product);
    }
  };

  if (!selectProduct) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="warning" />
        <p className="mt-2">Loading product details...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5" style={{ marginTop: '78px', minHeight: 'calc(100vh - 78px)' }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg border-0">
            <Row className="g-0">
              <Col xs={12} md={6} className="text-center p-3">
                <Card.Img
                  src={selectProduct.image}
                  alt={selectProduct.title}
                  className="img-fluid"
                  style={{
                    objectFit: 'contain',
                    maxHeight: '300px',
                    width: '100%',
                  }}
                />
              </Col>
              <Col xs={12} md={6}>
                <Card.Body>
                  <Card.Title as="h2" className="mb-4">
                    {selectProduct.title}
                  </Card.Title>
                  <Card.Text className="mb-3" style={{ fontSize: '1.1rem' }}>
                    {selectProduct.description}
                  </Card.Text>
                  <h4 className="text-warning mb-4">Price: ${selectProduct.price}</h4>
                  <Button
                    onClick={() => handleCartProduct(selectProduct)}
                    className="rounded-pill px-4 py-2 btn-gold"
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
