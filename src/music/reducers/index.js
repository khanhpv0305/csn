import { combineReducers } from 'redux';
import musicListReducers from './list';
import musicItemReducers from './item';

export default combineReducers({
  list: musicListReducers,
  item: musicItemReducers
});