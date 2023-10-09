export const initialState = { cart: [], total: 0 };

export function reducer(state, action) {
  switch (action.type) {
    case 'addToCart':
      const updatedCart = [...state.cart];
      const existingItemIndex = updatedCart.findIndex((item) => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex].quantity += 1;
      } else {
        updatedCart.push({ ...action.payload, quantity: 1 });
      }

      const updatedTotal = updatedCart.reduce(
        (total, item) => total + item.discountedPrice * item.quantity,
        0
      );

      return { ...state, cart: updatedCart, total: updatedTotal };

    case 'removeFromCart':
      const updatedCartAfterRemove = state.cart.filter((item) => item.id !== action.payload.id);
      const updatedTotalAfterRemove = updatedCartAfterRemove.reduce(
        (total, item) => total + item.discountedPrice * item.quantity,
        0
      );

      return { ...state, cart: updatedCartAfterRemove, total: updatedTotalAfterRemove };

    case 'clearCart':
      return { cart: [], total: 0 };

    default:
      return state;
  }
}
