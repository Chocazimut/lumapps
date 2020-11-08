import createReducer from 'helpers/redux/createReducer'
import fetchReducerHelper from 'helpers/fetch/fetchReducerHelper'

import {loadCharacterDetailsFetchActions} from './actions'

const initialState = {
  characterDetails: {...fetchReducerHelper.subStateAfterInit()},
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

const detailsReducer = createReducer(initialState, {
  [loadCharacterDetailsFetchActions.request
    .type]: handleLoadCharacterDetailsRequest,
  [loadCharacterDetailsFetchActions.success
    .type]: handleLoadCharacterDetailsSuccess,
  [loadCharacterDetailsFetchActions.failure
    .type]: handleLoadCharacterDetailsFailure,
})

export default detailsReducer
