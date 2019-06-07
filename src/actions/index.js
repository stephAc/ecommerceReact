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

export const addQteArticle = article => {
  return {
    type: 'ADD_QTE_ARTICLE',
    item: {
      article,
    },
  };
};

export const diminueQteArticle = article => {
  return {
    type: 'DIMINUE_QTE_ARTICLE',
    item: {
      article,
    },
  };
};
