import React, { useContext ,useEffect,useState} from 'react';
import { ProductContext } from './productContext';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import './cart.css';
import { BrowserRouter } from 'react-router';
import { ScaleLoader } from 'react-spinners';

const Cart = () => {
  const { cart, setCart } = useContext(ProductContext);

  const handleIncrement = (id) => {
    setCart(prevCart =>
      prevCart.map(product =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const handleDecrement = (id) => {
    setCart(prevCart =>
      prevCart.map(product =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleRemove = (id) => {
    setCart(prevCart => prevCart.filter(product => product.id !== id));
  };

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
const [load,setLoad]=useState(true);
useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
  <BrowserRouter>
  {load ?( <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20%' ,alignItems:'center'}}>
          <ScaleLoader color="#f6b31a" height={40} radius={14} width={5} />
        </div>)  :(<Container className="py-5" style={{ marginTop: '87px' }}>
      {cart.length > 0 && (
        <div className="d-flex justify-content-between align-items-center mb-4 text-light">
          <h2>Cart</h2>
          <Button className="checkout">Checkout</Button>
        </div>
      )}

      {cart.length === 0 ? (
        <h4 className="text-light">Your cart is empty</h4>
      ) : (
        <>
          <h5 className="total text-light mb-4">Total: ${totalPrice.toFixed(2)}</h5>
          {cart.map((product) => (
            <Card key={product.id} className="mb-4 shadow-sm">
              <Card.Body>
                <Row className="align-items-center text-center text-md-start">
                  <Col xs={12} md={3} className="mb-3 mb-md-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="img-fluid"
                      style={{ maxHeight: '150px', objectFit: 'contain' }}
                    />
                  </Col>

                  <Col xs={12} md={5} className="mb-3 mb-md-0">
                    <h5>{product.title}</h5>
                    <p className="text-muted small">{product.description}</p>
                    <strong>${product.price}</strong>
                  </Col>

                  <Col xs={12} md={2} className="mb-3 mb-md-0">
                    <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDecrement(product.id)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{product.quantity}</span>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleIncrement(product.id)}
                      >
                        +
                      </Button>
                    </div>
                  </Col>

                  <Col xs={12} md={2} className="text-center text-md-end">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemove(product.id)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </Container>)}
  </BrowserRouter>
    
  );
};

export default Cart;
