import {head} from 'ramda'
import {useCallback} from 'react'
import {useDispatch} from 'react-redux'

import endpoints from 'config/endpoints'
import fetchApi from 'helpers/fetch/fetchApi'

import {loadCharacterDetailsFetchActions} from '../store/actions'

const useFetchCharacterDetails = () => {
  const dispatch = useDispatch()

  return useCallback(
    async ({characterId}) => {
      const axiosConfig = {
        method: 'GET',
        url: `${endpoints.apiRestCharacters}/${characterId}`,
      }

      const formatData = ({data}) => {
        const {results} = data

        return head(results)
      }

      await dispatch(loadCharacterDetailsFetchActions.request.create())

      const {data, error, status} = await fetchApi(axiosConfig, formatData)

      if (data) {
        await dispatch(
          loadCharacterDetailsFetchActions.success.create({data, status}),
        )
      } else {
        await dispatch(
          loadCharacterDetailsFetchActions.failure.create({error, status}),
        )
      }
    },
    [dispatch],
  )
}

export default useFetchCharacterDetails
