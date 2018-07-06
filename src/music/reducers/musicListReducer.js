import musicListInitialState from '../initialStates/musicListInitialState';
import * as actionTypes from '../constants/actionTypes';

export default (state = musicListInitialState, action) => {
  switch (action.type) {
    case actionTypes.MUSIC_GET_ALL:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
}