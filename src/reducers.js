import { combineReducers } from 'redux';
import musicReducers from './music/reducers';
import playerReducers from './player/reducers';

export default combineReducers({
  music: musicReducers,
  player: playerReducers
});