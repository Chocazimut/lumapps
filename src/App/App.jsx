/* eslint-disable react/no-unescaped-entities */
import './App.scss'
import {ConnectedRouter} from 'connected-react-router'
import {Provider} from 'react-redux'
import React from 'react'

import history from 'store/history'
import Router from 'core/Router'
import store from 'store/configureStore'

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history} noInitialPop>
        <Router />
      </ConnectedRouter>
    </Provider>
  )
}

export default App
