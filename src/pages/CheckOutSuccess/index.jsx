import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from '../../components/Cart/Context';
import * as S from '../../App.styles';
import Smiley from '../../assets/icons8-grinning-face-with-big-eyes-96.png';

function CheckOut() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'clearCart' });
  }, [dispatch]);

  return (
    <div>
      <S.CartSuccess>
        <div>
          <img src={Smiley} alt='Smiley face' />
        </div>
        <h1>Thanks for your purchase!</h1>
        <p>Order number: 1151140</p>
        <Link to='/'>Back to the store!</Link>
      </S.CartSuccess>
    </div>
  );
}

export default CheckOut;
