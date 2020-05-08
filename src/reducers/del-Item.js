const getNewCartDelItem = (preArr, id) => {
  const index = preArr.findIndex((item) => item.id === id);

  if (preArr[index].counter === 1) {
    return [...preArr.slice(0, index), ...preArr.slice(index + 1)];
  } else {
    const itemDecCounter = preArr[index];
    itemDecCounter.counter -= 1;

    return [
      ...preArr.slice(0, index),
      itemDecCounter,
      ...preArr.slice(index + 1),
    ];
  }
};

export default getNewCartDelItem;
