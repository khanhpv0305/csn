import musicItemInitialState from '../initialStates/item';
import { loadItem } from '../actions/item';
import { handleActions } from 'redux-actions';

const reducer = handleActions(
  {
    [loadItem]: (state, action) => ({
      ...state,
      ...action.payload
    })
  },
  musicItemInitialState
);

export default reducer;