import {head} from 'ramda'
import {useCallback} from 'react'
import {useDispatch} from 'react-redux'

import endpoints from 'config/endpoints'
import fetchApi from 'helpers/fetch/fetchApi'

import {
  loadComicsDetailsFetchActions,
  updateCharacterDetailsAction,
} from '../store/actions'

const useFetchComicsDetails = () => {
  const dispatch = useDispatch()

  return useCallback(
    async ({comicsId}) => {
      const axiosConfig = {
        method: 'GET',
        url: `${endpoints.apiRestComics}/${comicsId}`,
      }

      const formatData = ({data}) => {
        const {results} = data

        return head(results)
      }

      await dispatch(loadComicsDetailsFetchActions.request.create())

      const {data, error, status} = await fetchApi(axiosConfig, formatData)

      if (data) {
        await dispatch(
          loadComicsDetailsFetchActions.success.create({data, status}),
        )
        await dispatch(updateCharacterDetailsAction.create({newComics: data}))
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
