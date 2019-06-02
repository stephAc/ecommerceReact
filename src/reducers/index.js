import { combineReducers } from 'redux';

const initialState = {
  shoppingCart: [],
};
const shoppingCartReducer = (state = initialState, action) => {
  if (action.type === 'ADDING_ARTICLE') {
    return { shoppingCart: [...state.shoppingCart, action.item] };
  }

  return state;
};

export default combineReducers({
  shoppingCart: shoppingCartReducer,
});
