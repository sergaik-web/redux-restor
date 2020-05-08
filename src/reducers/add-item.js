const getNewCartAddItem = (preArr, newElem) => {
  const { title, price, url, category } = newElem;
  const index = preArr.findIndex((item) => item.title === title);

  if (index === -1) {
    const newCartItem = {
      title,
      price,
      url,
      category,
      counter: 1,
      id: preArr.length + 1,
    };

    return [...preArr, newCartItem];
  } else {
    const itemIncCounter = preArr[index];
    itemIncCounter.counter += 1;

    return [
      ...preArr.slice(0, index),
      itemIncCounter,
      ...preArr.slice(index + 1),
    ];
  }
};

export default getNewCartAddItem;
