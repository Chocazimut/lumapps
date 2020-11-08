import {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import endpoints from 'config/endpoints'
import fetchApi from 'helpers/fetch/fetchApi'

import {getLoadMoreOffset} from '../store/selectors'
import {loadMarvelCharactersFetchActions} from '../store/actions'

const useFetchMarvelCharacters = () => {
  const dispatch = useDispatch()
  const offset = useSelector(getLoadMoreOffset)

  const calcOffset = offset * 4

  return useCallback(
    async ({more}) => {
      const axiosConfig = {
        method: 'GET',
        url: `${endpoints.apiRestCharacters}`,
        params: {
          limit: 4,
          offset: calcOffset,
        },
      }

      const formatData = ({data}) => {
        const {results} = data

        return results
      }

      await dispatch(loadMarvelCharactersFetchActions.request.create())

      const {data, error, status} = await fetchApi(axiosConfig, formatData)

      if (data) {
        await dispatch(
          loadMarvelCharactersFetchActions.success.create({data, status, more}),
        )
      } else {
        await dispatch(
          loadMarvelCharactersFetchActions.failure.create({error, status}),
        )
      }
    },
    [calcOffset, dispatch],
  )
}

export default useFetchMarvelCharacters
