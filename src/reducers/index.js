const inicialState = {
  menu: [],
};

const reducer = (state = inicialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return { menu: action.payload };
    default:
      return state;
  }
};

export default reducer;
