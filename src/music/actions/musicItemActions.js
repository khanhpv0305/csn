import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';

const doGetItem2 = (type, payload) => {
  return {
    type: type,
    payload: payload
  }
};

export const doGetItem = (url) => {
  return dispatch => {
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
  
        dispatch(
          doGetItem2(
            actionTypes.MUSIC_GET_ITEM,
            { ...newState }
          )
        );
      });
  }
}