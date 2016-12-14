import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import activities from './activities';

const rootReducer = combineReducers({ activities, routing: routerReducer});

export  default rootReducer;
