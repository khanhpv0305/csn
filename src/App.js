import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import configureStore from './stores/configureStore';
import initialState from './initialState';

// Components
import { MusicList } from './music/components/musicList';
import { MusicItem } from './music/components/musicItem';

const store = configureStore(initialState);

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={MusicList} />
            <Route path='/song/:id' component={MusicItem} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}