import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';
// import { normalize, schema } from 'normalizr';
import { createAction } from 'redux-actions';

export const loadItem = createAction(actionTypes.ITEM_LOAD);

export const getItem = url => dispatch => {
  let requestUrl = `https://blooming-retreat-21036.herokuapp.com/song/${url}`;
  axios.get(requestUrl)
    .then(response => {
      let newState = {
        id: response.data.id,
        name: response.data.name,
        artist: response.data.artists,
        author: response.data.authors,
        url: response.data.downloadUrl
      };

      dispatch(loadItem(newState));
    });
}

// Watcher saga
export function* watcherSaga() {
  yield takeLatest(actionTypes.ITEM_LOAD, workerSaga);
}

const fetchItem = (url) => {
  return axios({
    method: 'get',
    url: `https://blooming-retreat-21036.herokuapp.com/song/${url}`
  });
}

// Worker saga
function* workerSaga() {
  try {
    const response = yield call(fetchItem);
    const payload = {
      id: response.data.id,
      name: response.data.name,
      artist: response.data.artists,
      author: response.data.authors,
      url: response.data.downloadUrl
    };

    yield put({
      type: actionTypes.ITEM_LOAD,
      payload
    });
  } catch (error) {
    yield put({
      type: actionTypes.ITEM_LOAD_FAILURE,
      payload: {
        errorMessage: 'ecmnrror'
      }
    });
  }
}