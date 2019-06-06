import { combineReducers } from 'redux';

const initialState = {
  shoppingCart: [],
};
const shoppingCartReducer = (state = initialState, action) => {
  if (action.type === 'ADDING_ARTICLE') {
    if (state.shoppingCart.length > 0) {
      let articleIndex = state.shoppingCart.findIndex(
        obj => obj.article.article_id === action.item.article.article_id,
      );
      if (articleIndex !== -1) {
        state.shoppingCart[articleIndex].articleQte++;
      } else {
        return { shoppingCart: [...state.shoppingCart, action.item] };
      }
    } else {
      return { shoppingCart: [...state.shoppingCart, action.item] };
    }
  }
  return state;
};

export default combineReducers({
  shoppingCart: shoppingCartReducer,
});
