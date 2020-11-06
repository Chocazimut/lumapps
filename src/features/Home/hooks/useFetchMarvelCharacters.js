import {identity} from 'ramda'
import {useCallback} from 'react'
import {useDispatch} from 'react-redux'

import endpoints from 'config/endpoints'
import fetchApi from 'helpers/fetch/fetchApi'

import {loadMarvelCharactersFetchActions} from '../store/actions'

const useFetchMarvelCharacters = () => {
  const dispatch = useDispatch()

  return useCallback(async () => {
    const axiosConfig = {
      method: 'GET',
      url: `${endpoints.apiRestCharacters}`,
    }

    const formatData = identity

    await dispatch(loadMarvelCharactersFetchActions.request.create())

    const {data, error, status} = await fetchApi(axiosConfig, formatData)

    if (data) {
      await dispatch(
        loadMarvelCharactersFetchActions.success.create({data, status}),
      )
    } else {
      await dispatch(
        loadMarvelCharactersFetchActions.failure.create({error, status}),
      )
    }
  }, [dispatch])
}

export default useFetchMarvelCharacters
