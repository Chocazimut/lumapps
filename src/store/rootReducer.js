import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

// import detailsReducer from 'features/Details/store/reducer'
import homeReducer from 'features/Home/store/reducer'

import STORE_NAMESPACES from './namespaces'

const createRootReducer = history =>
  combineReducers({
    [STORE_NAMESPACES.HOME]: homeReducer,
    // [STORE_NAMESPACES.DETAILS]: detailsReducer,
    [STORE_NAMESPACES.ROUTER]: connectRouter(history),
  })

export default createRootReducer
