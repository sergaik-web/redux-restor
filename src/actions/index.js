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
    type: "MENU_CATCH"
  }
};

export { menuLoaded, menuRequested, menuError };
