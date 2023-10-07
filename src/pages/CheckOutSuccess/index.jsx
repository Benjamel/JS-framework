import React, { useEffect } from 'react';
import { useDispatch } from '../../components/Cart/Context';
import * as S from '../../App.styles';

function CheckOut() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'clearCart' });
  }, []);

  return (
    <div>
      <S.CartSuccess>
        <h1>Thanks for your purchase!</h1>
        <p>Order number: 1151140</p>
      </S.CartSuccess>
    </div>
  );
}

export default CheckOut;
