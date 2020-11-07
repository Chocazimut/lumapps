import createReducer from 'helpers/redux/createReducer'

import {setSearchFieldAction} from './actions'

const initialState = {
  searchField: '',
}

const handleSetSearchField = (state, {value}) => ({
  ...state,
  searchField: value,
})

const layoutReducer = createReducer(initialState, {
  [setSearchFieldAction.type]: handleSetSearchField,
})

export default layoutReducer
