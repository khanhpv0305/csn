import { combineReducers } from 'redux';
import musicListReducers from './musicListReducer';
import musicItemReducers from './musicItemReducer';

export default combineReducers({
  musicList: musicListReducers,
  musicItem: musicItemReducers
});