import React, { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from './Reducer';

const CartContext = createContext();

export function useDispatch() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useDispatch must be used within a CartProvider');
  }
  return context.dispatch;
}

export function useSelector(selector) {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useSelector must be used within a CartProvider');
  }
  return selector(context.state);
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}
