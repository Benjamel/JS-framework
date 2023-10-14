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
      const updateRemoveCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });

      const updateTotalCart = updateRemoveCart.reduce(
        (total, item) => total + item.discountedPrice * item.quantity,
        0
      );

      return { ...state, cart: updateRemoveCart, total: updateTotalCart };

    case 'clearCart':
      return { cart: [], total: 0 };

    default:
      return state;
  }
}
