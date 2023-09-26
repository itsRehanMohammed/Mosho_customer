export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      sessionStorage.setItem("cart", JSON.stringify({ ...state, cart: [{ ...action.payload }, ...state.cart] }));
      return { ...state, cart: [{ ...action.payload }, ...state.cart] };
    case "REMOVE_TO_CART":
      const updatedCart = state.cart.filter((item) => item.id !== (action.payload._id ? action.payload._id : action.payload.id));
      sessionStorage.setItem("cart", JSON.stringify({ ...state, cart: updatedCart }));
      return { ...state, cart: updatedCart };
    case "CHANGE_CART_QTY":
      sessionStorage.setItem("cart", JSON.stringify({ ...state, cart: state.cart.filter((item) => (item.id === action.payload.id ? (item.qty = action.payload.qty) : item.qty)) }));
      return { ...state, cart: state.cart.filter((item) => (item.id === action.payload.id ? (item.qty = action.payload.qty) : item.qty)) };

    default:
      break;
  }
};
