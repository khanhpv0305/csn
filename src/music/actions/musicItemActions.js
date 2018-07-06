import actionTypes from '../constants/actionTypes';

export const doGetItem = (id) => {
  return {
    type: actionTypes.MUSIC_GET_ITEM,
    payload: {
      // id: '',
      // name: '',
      // artist: [],
      // author: [],
      // url: ''
    }
  }
}