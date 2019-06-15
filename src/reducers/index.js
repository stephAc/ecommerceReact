import { combineReducers } from 'redux';

import panier from './panier';
import user from './user';

export default combineReducers({
  panier,
  user,
});
