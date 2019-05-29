const articleCart = (oldCart = [], action) => {
  if (action.type === 'ADDING_ARTICLE') {
    return [...oldCart, action.item];
  }

  return oldCart;
};
