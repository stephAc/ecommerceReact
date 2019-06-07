import { combineReducers } from 'redux';

const initialState = {
  shoppingCart: [],
};
const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDING_ARTICLE':
      if (state.shoppingCart.length > 0) {
        let articleIndex = state.shoppingCart.findIndex(
          obj => obj.article.article_id === action.item.article.article_id,
        );
        if (articleIndex !== -1) {
          let tmpShoppingCart = [...state.shoppingCart];
          tmpShoppingCart[articleIndex].articleQte++;
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
    default:
      return state;
  }
};

export default combineReducers({
  shoppingCart: shoppingCartReducer,
});
