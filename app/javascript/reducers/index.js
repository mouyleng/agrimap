import { combineReducers } from 'redux';

import { thingsReducer } from './things';
import authReducer from './auth';
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  things: thingsReducer,
  auth: authReducer,
  router: connectRouter(history),
});
