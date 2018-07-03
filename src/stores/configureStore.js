import { createStore, applyMiddlware } from 'redux';
import rootReducer from '../../reducers';

const createStoreWithMiddleware = applyMiddlware()(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}