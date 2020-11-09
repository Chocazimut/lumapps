import {isNil} from 'ramda'
import createReducer from 'helpers/redux/createReducer'
import fetchReducerHelper from 'helpers/fetch/fetchReducerHelper'

import {
  loadCharacterDetailsFetchActions,
  loadComicsDetailsFetchActions,
  updateCharacterDetailsAction,
} from './actions'

const initialState = {
  characterDetails: {...fetchReducerHelper.subStateAfterInit()},
  comicsDetails: {...fetchReducerHelper.subStateAfterInit()},
}

const handleLoadCharacterDetailsRequest = state => ({
  ...state,
  characterDetails: {
    ...state.characterDetails,
    ...fetchReducerHelper.subStateAfterRequest(),
  },
})

const handleLoadCharacterDetailsSuccess = (state, {data, status}) => ({
  ...state,
  characterDetails: {
    ...state.characterDetails,
    ...fetchReducerHelper.subStateAfterSuccess(data, status),
  },
})

const handleLoadCharacterDetailsFailure = (state, {error, status}) => ({
  ...state,
  characterDetails: {
    ...state.characterDetails,
    ...fetchReducerHelper.subStateAfterFailure(error, status),
  },
})

const handleLoadComicsDetailsRequest = state => ({
  ...state,
  comicsDetails: {
    ...state.comicsDetails,
    ...fetchReducerHelper.subStateAfterRequest(),
  },
})

const handleLoadComicsDetailsSuccess = (state, {data, status}) => ({
  ...state,
  comicsDetails: {
    ...state.comicsDetails,
    ...fetchReducerHelper.subStateAfterSuccess(data, status),
  },
})

const handleLoadComicsDetailsFailure = (state, {error, status}) => ({
  ...state,
  comicsDetails: {
    ...state.comicsDetails,
    ...fetchReducerHelper.subStateAfterFailure(error, status),
  },
})

const handleUpdateCharacterDetails = (state, {newComics}) => {
  const {lastComics} = state.characterDetails.data
  const newLastComics = isNil(lastComics)
    ? [newComics]
    : [...lastComics, newComics]

  return {
    ...state,
    characterDetails: {
      ...state.characterDetails,
      data: {
        ...state.characterDetails.data,
        lastComics: newLastComics,
      },
    },
  }
}

const detailsReducer = createReducer(initialState, {
  [loadCharacterDetailsFetchActions.request
    .type]: handleLoadCharacterDetailsRequest,
  [loadCharacterDetailsFetchActions.success
    .type]: handleLoadCharacterDetailsSuccess,
  [loadCharacterDetailsFetchActions.failure
    .type]: handleLoadCharacterDetailsFailure,
  [loadComicsDetailsFetchActions.request.type]: handleLoadComicsDetailsRequest,
  [loadComicsDetailsFetchActions.success.type]: handleLoadComicsDetailsSuccess,
  [loadComicsDetailsFetchActions.failure.type]: handleLoadComicsDetailsFailure,
  [updateCharacterDetailsAction.type]: handleUpdateCharacterDetails,
})

export default detailsReducer
