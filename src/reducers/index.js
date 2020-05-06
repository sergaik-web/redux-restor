const inicialState = {
  menu: [],
  loading: true,
  error: false,
};

const reducer = (state = inicialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        menu: action.payload,
        loading: false,
        error: state.error,
      };
    case "MENU_REQUESTED":
      return {
        menu: state.menu,
        loading: true,
        error: state.error,
      };
    case "MENU_ERROR":
      return {
        menu: state.menu,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
