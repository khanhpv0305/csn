import musicItemInitialState from '../initialStates/musicItemInitialState';
import * as actionTypes from '../constants/actionTypes';

export default (state = musicItemInitialState, action) => {
  switch (actionTypes) {
    case actionTypes.MUSIC_GET_ITEM:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
}