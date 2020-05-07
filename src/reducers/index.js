const inicialState = {
  menu: [],
  loading: true,
  error: false,
  cartItems: [],
  totalPrice: 0,
};

const reducer = (state = inicialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };

    case "MENU_REQUESTED":
      return {
        ...state,
        loading: true,
      };

    case "MENU_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };

    case "ADD_ITEM_TO_CART":
      const newCart = [...state.cartItems, action.payload];
      console.log(newCart);

      return {
        ...state,
        cartItems: newCart,
        totalPrice: newCart.reduce((count, item) => count + item.price, 0),
      };

    case "DELETED_ITEM_CART":
      console.log(action.id);
      const index = state.cartItems.findIndex((item) => item.id === action.id);
      console.log(index);
      const deletedItem = [
        ...state.cartItems.slice(0, index),
        ...state.cartItems.slice(index + 1),
      ];
      console.log(deletedItem);

      return {
        ...state,
        cartItems: deletedItem,
        totalPrice: deletedItem.reduce((count, item) => count + item.price, 0),
      };

    default:
      return state;
  }
};

export default reducer;
