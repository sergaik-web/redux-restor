import getNewCartAddItem from "./add-item";
import getNewCartDelItem from "./del-Item";
import totalPrice from "./total-price";

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
      const arrAddItem = getNewCartAddItem(state.cartItems, action.payload);
      return {
        ...state,
        cartItems: arrAddItem,
        totalPrice: totalPrice(arrAddItem),
      };

    case "DELETED_ITEM_CART":
      const arrDelItem = getNewCartDelItem(state.cartItems, action.id);
      return {
        ...state,
        cartItems: arrDelItem,
        totalPrice: totalPrice(arrDelItem),
      };

    default:
      return state;
  }
};

export default reducer;
