import createReducer from 'helpers/redux/createReducer'
import fetchReducerHelper from 'helpers/fetch/fetchReducerHelper'

import {
  loadCharacterDetailsFetchActions,
  loadComicsDetailsFetchActions,
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
})

export default detailsReducer
