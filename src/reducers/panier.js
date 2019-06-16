const initialState = {
  shoppingCart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADDING_ARTICLE':
      if (state.shoppingCart.length > 0) {
        let articleIndex = state.shoppingCart.findIndex(
          obj => obj.article.article_id === action.item.article.article_id,
        );
        if (articleIndex !== -1) {
          let tmpShoppingCart = [...state.shoppingCart];
          tmpShoppingCart[articleIndex].articleQte += action.item.articleQte;
          return { ...state, shoppingCart: tmpShoppingCart };
        } else {
          return {
            ...state,
            shoppingCart: [...state.shoppingCart, action.item],
          };
        }
      } else {
        return { ...state, shoppingCart: [...state.shoppingCart, action.item] };
      }
    case 'DELETE_ARTICLE':
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          object =>
            object.article.article_id !== action.item.article.article_id,
        ),
      };
    case 'ADD_QTE_ARTICLE':
      let tmpAddShoppingCart = [...state.shoppingCart];
      tmpAddShoppingCart[
        state.shoppingCart.findIndex(
          obj => obj.article.article_id === action.item.article.article_id,
        )
      ].articleQte++;
      return { ...state, shoppingCart: tmpAddShoppingCart };

    case 'DIMINUE_QTE_ARTICLE':
      let tmpDiminueShoppingCart = [...state.shoppingCart];
      tmpDiminueShoppingCart[
        state.shoppingCart.findIndex(
          obj => obj.article.article_id === action.item.article.article_id,
        )
      ].articleQte--;
      return { ...state, shoppingCart: tmpDiminueShoppingCart };

    case 'CLEAR_CART':
      let cart = [];
      return { ...state, shoppingCart: cart };
    default:
      return state;
  }
};
