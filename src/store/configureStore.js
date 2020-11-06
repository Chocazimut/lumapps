import {applyMiddleware, compose, createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'

import createRootReducer from 'store/rootReducer'
import history from 'store/history'

const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  createRootReducer(history),
  enhancedCompose(applyMiddleware(routerMiddleware(history))),
)

export default store
