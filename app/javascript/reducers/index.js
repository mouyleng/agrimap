import { combineReducers } from 'redux';

import { thingsReducer } from './things';
import authReducer from './auth';

const rootReducer = combineReducers({
  things: thingsReducer,
  auth: authReducer
});

export default rootReducer;
