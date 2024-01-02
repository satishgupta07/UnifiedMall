import * as actionType from "../constants/cartConstant";

// Load the cart items from local storage if available
const storedCartItems = localStorage.getItem("cartItems");
const initialState = {
  cartItems: storedCartItems ? JSON.parse(storedCartItems) : [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = action.payload;
      const exist = state.cartItems.find(
        (product) => product.data.id === item.id
      );
      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map((data) =>
            data.product === exist.product ? item : data
          ),
        };
      } else {
        const newCartItems = [...state.cartItems, item];
        // Save the updated cart items to local storage
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        return { ...state, cartItems: newCartItems };
      }
    case actionType.REMOVE_FROM_CART:
      const updatedCartItems = state.cartItems.filter(
        (product) => product.data.id !== action.payload
      );
      // Save the updated cart items to local storage
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return { ...state, cartItems: updatedCartItems };
    default:
      return state;
  }
};
