import initialState from '../initialStates';
import * as actionTypes from '../constants/actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAYER_PLAY:
      return {
        ...state,
        isPlaying: action.payload.isPlaying
      }
    
    case actionTypes.PLAYER_MUTE:
      return {
        ...state,
        isMute: action.payload.isMute
      }

    case actionTypes.PLAYER_REPEAT:
      return {
        ...state,
        isRepeat: action.payload.isRepeat
      }

    default:
      return state;
  }
}