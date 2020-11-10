import {useCallback} from 'react'
import {useDispatch} from 'react-redux'

import endpoints from 'config/endpoints'
import fetchApi from 'helpers/fetch/fetchApi'

import {loadComicsDetailsFetchActions} from '../store/actions'

const useFetchComicsDetails = () => {
  const dispatch = useDispatch()

  return useCallback(
    async ({characterId}) => {
      const axiosConfig = {
        method: 'GET',
        url: `${endpoints.apiRestComics}`,
        params: {
          characters: characterId,
        },
      }

      const formatData = ({data}) => {
        const {results} = data

        return results
      }

      await dispatch(loadComicsDetailsFetchActions.request.create())

      const {data, error, status} = await fetchApi(axiosConfig, formatData)

      if (data) {
        await dispatch(
          loadComicsDetailsFetchActions.success.create({data, status}),
        )
      } else {
        await dispatch(
          loadComicsDetailsFetchActions.failure.create({error, status}),
        )
      }
    },
    [dispatch],
  )
}

export default useFetchComicsDetails
