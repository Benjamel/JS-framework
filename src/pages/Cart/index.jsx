import React from 'react';
import { useSelector, useDispatch } from '../../components/Cart/Context';
import * as S from '../../App.styles';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (productId) => {
    dispatch({ type: 'removeFromCart', payload: { id: productId } });
  };

  const total = cart.reduce((acc, item) => {
    return acc + item.discountedPrice * item.quantity;
  }, 0);

  return (
    <>
      <S.CartPage>
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id}>
                <div>
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                <div className='cart-item'>
                  <p>{item.title}</p>
                  <p>Price: ${item.discountedPrice}</p>
                  <p>Quantity: {item.quantity}</p>
                  <Button
                    className='removeFromCart'
                    variant='dark'
                    onClick={() => removeFromCart(item.id)}>
                    Remove from Cart
                  </Button>
                </div>
              </div>
            ))}
            <div>
              <span>Total: ${total.toFixed(2)}</span>
            </div>
            <Link to='/CheckOutSuccess'>
              <Button variant='dark'>Check Out</Button>
            </Link>
          </>
        )}
      </S.CartPage>
    </>
  );
}

export default Cart;
