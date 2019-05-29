export const addToCart = (article, articleQte) => {
  return {
    type: 'ADDING_ARTICLE',
    item: {
      article,
      articleQte,
    },
  };
};
