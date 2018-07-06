import { combineReducers } from 'redux';
import musicListReducers from './musicListReducer';
import musicItemReducers from './musicItemReducer';

export default combineReducers({
  list: musicListReducers,
  item: musicItemReducers
});