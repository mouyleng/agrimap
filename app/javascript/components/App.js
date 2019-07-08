import React from "react"

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { Provider } from 'react-redux'

import HelloWorld from './HelloWorld'
import Login from './Session/Login'
import Home from './Home/Home'

import configureStore, {history} from '../configureStore'
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route path="/hello" render={() => <HelloWorld greeting="Friend"/>} />
            <Route path="/home" render={() => <Home />} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App
