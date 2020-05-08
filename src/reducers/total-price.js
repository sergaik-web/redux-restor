const totalPrice = (arr) => {
  return arr.reduce((count, item) => count + item.price * item.counter, 0);
};

export default totalPrice;
