import React from 'react';
import { useSelector, useDispatch } from '../../components/Cart/Context';
import * as S from '../../App.styles';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (productId) => {
    console.log(productId);
    dispatch({ type: 'removeFromCart', payload: { id: productId } });
  };

  const total = cart.reduce((acc, item) => {
    return acc + item.discountedPrice * item.quantity;
  }, 0);

  return (
    <S.CartPage>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='cart-container'>
          {cart.map((item) => (
            <div key={item.id} className='cart-item'>
              <img src={item.imageUrl} alt={item.title} />
              <div className='cart-item-details'>
                <h4>{item.title}</h4>
                <p>${item.discountedPrice}</p>
                <p>Quantity: {item.quantity}</p>
                <Button
                  className='removeFromCart'
                  variant='dark'
                  onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <hr />
          <div className='total-container'>
            <span>Total: ${total.toFixed(2)}</span>
            <div>
              <Link to='/CheckOutSuccess'>
                <Button variant='dark'>Check Out</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </S.CartPage>
  );
}

export default Cart;
