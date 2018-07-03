import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import initialState from './initialState';

// Components
import { MusicList } from './music/components/musicList';

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <MusicList />
  </Provider>
);