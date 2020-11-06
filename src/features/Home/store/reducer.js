import createReducer from 'helpers/redux/createReducer'
import fetchReducerHelper from 'helpers/fetch/fetchReducerHelper'

import {loadMarvelCharactersFetchActions} from './actions'

const initialState = {
  marvelCharacters: {...fetchReducerHelper.subStateAfterInit([])},
}

const handleLoadMarvelCharactersRequest = state => ({
  ...state,
  marvelCharacters: {
    ...state.marvelCharacters,
    ...fetchReducerHelper.subStateAfterRequest(),
  },
})

const handleLoadMarvelCharactersSuccess = (state, {data, status}) => ({
  ...state,
  marvelCharacters: {
    ...state.marvelCharacters,
    ...fetchReducerHelper.subStateAfterSuccess(data, status),
  },
})

const handleLoadMarvelCharactersFailure = (state, {error, status}) => ({
  ...state,
  marvelCharacters: {
    ...state.marvelCharacters,
    ...fetchReducerHelper.subStateAfterFailure(error, status),
  },
})

const homeReducer = createReducer(initialState, {
  [loadMarvelCharactersFetchActions.request
    .type]: handleLoadMarvelCharactersRequest,
  [loadMarvelCharactersFetchActions.success
    .type]: handleLoadMarvelCharactersSuccess,
  [loadMarvelCharactersFetchActions.failure
    .type]: handleLoadMarvelCharactersFailure,
})

export default homeReducer
