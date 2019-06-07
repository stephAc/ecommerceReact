export const addToCart = (article, articleQte) => {
  return {
    type: 'ADDING_ARTICLE',
    item: {
      article,
      articleQte,
    },
  };
};

export const deleteFromCart = article => {
  return {
    type: 'DELETE_ARTICLE',
    item: {
      article,
    },
  };
};
