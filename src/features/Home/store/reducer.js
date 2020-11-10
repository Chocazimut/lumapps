import createReducer from 'helpers/redux/createReducer'
import fetchReducerHelper from 'helpers/fetch/fetchReducerHelper'

import {
  loadMarvelCharactersFetchActions,
  setLoadMoreOffsetAction,
} from './actions'

const initialState = {
  marvelCharacters: {...fetchReducerHelper.subStateAfterInit([])},
  offset: 0,
}

const handleLoadMarvelCharactersRequest = state => ({
  ...state,
  marvelCharacters: {
    ...state.marvelCharacters,
    ...fetchReducerHelper.subStateAfterRequest(),
  },
})

const handleLoadMarvelCharactersSuccess = (state, {data, status, more}) => {
  if (!more) {
    return {
      ...state,
      marvelCharacters: {
        ...state.marvelCharacters,
        ...fetchReducerHelper.subStateAfterSuccess(data, status),
      },
    }
  }

  const {results} = data

  return {
    ...state,
    marvelCharacters: {
      ...state.marvelCharacters,
      isLoading: false,
      data: {
        ...state.marvelCharacters.data,
        results: [...state.marvelCharacters.data.results, ...results],
        status,
      },
    },
  }
}

const handleLoadMarvelCharactersFailure = (state, {error, status}) => ({
  ...state,
  marvelCharacters: {
    ...state.marvelCharacters,
    ...fetchReducerHelper.subStateAfterFailure(error, status),
  },
})

const handleSetLoadMoreOffset = (state, {offset}) => ({
  ...state,
  offset,
})

const homeReducer = createReducer(initialState, {
  [loadMarvelCharactersFetchActions.request
    .type]: handleLoadMarvelCharactersRequest,
  [loadMarvelCharactersFetchActions.success
    .type]: handleLoadMarvelCharactersSuccess,
  [loadMarvelCharactersFetchActions.failure
    .type]: handleLoadMarvelCharactersFailure,
  [setLoadMoreOffsetAction.type]: handleSetLoadMoreOffset,
})

export default homeReducer
