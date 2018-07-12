import musicListInitialState from '../initialStates/list';
import * as actionTypes from '../constants/actionTypes';

export default (state = musicListInitialState, action) => {
  switch (action.type) {
    case actionTypes.LIST_LOAD:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
}