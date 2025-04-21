import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './productContext';
import Title from './Title';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './ProductList.css';
const AllProduct = () => {
const { products, setSelectProduct, handelAddCart } = useContext(ProductContext);

  const handleClickProduct = (product) => {
    setSelectProduct(product);
  };

  const handleCartProduct = (product) => {
    handelAddCart(product);
  };

//   const displayedProducts = products.slice(0, 6); // عرض أول 12 منتج

  return (
    <div className="" >
      <Title title="All Products" />
      <Container className="py-4">
        <Row className="g-4">
          {products.map((product, index) => (
            <Col key={product.id} xs={12} sm={6} md={6} lg={4}>
              {/* كرت "See More" في آخر عنصر */}
              
                <Card className="shadow-sm product-card h-100">
                  {product.image && (
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={product.title}
                      className="img-fluid"
                      style={{ height: '200px', objectFit: 'contain' }}
                    />
                  )}
                        <hr className="text-dark my-3" />

                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {product.description?.slice(0, 60) + '...'}
                    </Card.Text>
                    <div className="m-auto">
                      <Link to={`/products/${product.id}`} onClick={() => handleClickProduct(product)}>
                        <Button className="btn-gold me-2" size="sm" >
                          More Details
                        </Button>
                      </Link>
                      <Button className="btn-gold" size="sm" onClick={() => handleCartProduct(product)}>
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllProduct
