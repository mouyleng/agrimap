import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

const initialState = {
  things: [{
      name: "test",
      guid: "123"
    }]
};

import createRootReducer from './reducers'
export const history = createBrowserHistory()

export default function configureStore(){
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
      )
    )
  );
  return store;
}
