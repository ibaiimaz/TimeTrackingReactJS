import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import activities from './data/activities';

const defaultState = {
  activities
}

//const store = createStore(rootReducer, defaultState);
const store = createStore(
  rootReducer,
  applyMiddleware(promise)
);

export const history  = syncHistoryWithStore(browserHistory, store);

export default store;
