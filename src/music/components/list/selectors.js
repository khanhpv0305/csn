import { createSelector } from 'reselect';

export const getMusicList = createSelector(
  [ state => ({ ...state.music.list }) ],
  ( List ) => ({
    ...List
  })
);