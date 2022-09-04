import { combineReducers } from 'redux';
import GroupReducers from './GroupReducers';
import FavoritesReducers from './FavoritesReducers';

const rootReducer = combineReducers({ GroupReducers, FavoritesReducers });
export default rootReducer;