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
      const { title, price, url, category } = action.payload;
      const indx = state.cartItems.findIndex((item) => item.title === title);

      if (indx === -1) {
        const newCartItem = {
          title,
          price,
          url,
          category,
          counter: 1,
          id: state.cartItems.length + 1,
        };
        const cartArrAddItem = [...state.cartItems, newCartItem];

        return {
          ...state,
          cartItems: cartArrAddItem,
          totalPrice: cartArrAddItem.reduce(
            (count, item) => count + item.price * item.counter,
            0
          ),
        };
      } else {
        let updateItem = state.cartItems[indx];
        updateItem.counter += 1;
        const cartArrIncItem = [
          ...state.cartItems.slice(0, indx),
          updateItem,
          ...state.cartItems.slice(indx + 1),
        ];

        return {
          ...state,
          cartItems: cartArrIncItem,
          totalPrice: cartArrIncItem.reduce(
            (count, item) => count + item.price * item.counter,
            0
          ),
        };
      }

    case "DELETED_ITEM_CART":
      const index = state.cartItems.findIndex((item) => item.id === action.id);

      if (state.cartItems[index].counter === 1) {
        const cartArrDeletedItem = [
          ...state.cartItems.slice(0, index),
          ...state.cartItems.slice(index + 1),
        ];

        return {
          ...state,
          cartItems: cartArrDeletedItem,
          totalPrice: cartArrDeletedItem.reduce(
            (count, item) => count + item.price * item.counter,
            0
          ),
        };
      } else {
        const itemDecCounter = state.cartItems[index];
        itemDecCounter.counter -= 1;
        const cartArrDecrementItem = [
          ...state.cartItems.slice(0, index),
          itemDecCounter,
          ...state.cartItems.slice(index + 1),
        ];

        return {
          ...state,
          cartItems: cartArrDecrementItem,
          totalPrice: cartArrDecrementItem.reduce(
            (count, item) => count + item.price * item.counter,
            0
          ),
        };
      }

    default:
      return state;
  }
};

export default reducer;
