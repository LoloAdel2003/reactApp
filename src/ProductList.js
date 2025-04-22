import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './productContext';
import Title from './Title';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './ProductList.css';

const ProductList = () => {
  const { products, setSelectProduct, handelAddCart } = useContext(ProductContext);

  const handleClickProduct = (product) => {
    setSelectProduct(product);
  };

  const handleCartProduct = (product) => {
    handelAddCart(product);
  };

  const displayedProducts = products.slice(0, 6); // عرض أول 12 منتج

  return (
    <>
      <Title title="Menu" id="Menu"/>
      <Container className="py-4">
        <Row className="g-4">
          {displayedProducts.map((product, index) => (
            <Col key={product.id} xs={12} sm={6} md={6} lg={4}>
              {/* كرت "See More" في آخر عنصر */}
              {index === 5 ? (

                <Card className="seeMore shadow-sm product-card h-100 d-flex justify-content-center align-items-center"> 
                <Link to="/AllProduct">
                <Button className="btn-gold">Explore All Products</Button>
              </Link>
              </Card>
              ) : (
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
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
