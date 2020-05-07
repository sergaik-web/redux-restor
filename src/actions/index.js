const menuLoaded = (newMenu) => {
  return {
    type: "MENU_LOADED",
    payload: newMenu,
  };
};

const menuRequested = () => {
  return {
    type: "MENU_REQUESTED",
  };
};

const menuError = () => {
  return {
    type: "MENU_CATCH",
  };
};

const addItemToCart = (newItem) => {
  return {
    type: "ADD_ITEM_TO_CART",
    payload: newItem,
  };
};

const deletedItemCart = (id) => {
  return {
    type: "DELETED_ITEM_CART",
    id: id,
  };
};

export { menuLoaded, menuRequested, menuError, addItemToCart, deletedItemCart };
