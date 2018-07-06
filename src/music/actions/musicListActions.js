import actionTypes from '../constants/actionTypes';

export const doGetAll = () => {
  return {
    type: actionTypes.MUSIC_GET_ALL,
    payload: {
      // hot: {
      //   usUk: [],
      //   vn: [],
      //   kr: []
      // },
    
      // news: []
    }
  };
}