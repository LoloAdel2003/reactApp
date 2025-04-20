import React, { useContext } from 'react';
import { ProductContext } from './productContext';

const Cart = () => {
  const { cart } = useContext(ProductContext);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
