import {compact} from 'lodash/fp'
import {head, last, map, path, split, take} from 'ramda'
import {useCallback} from 'react'
import {useDispatch} from 'react-redux'

import endpoints from 'config/endpoints'
import fetchApi from 'helpers/fetch/fetchApi'

import {loadCharacterDetailsFetchActions} from '../store/actions'
import useFetchComicsDetails from './useFetchComicsDetails'

const useFetchCharacterDetails = () => {
  const dispatch = useDispatch()
  const fetchComicsDetails = useFetchComicsDetails()

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
        const lastComics = compact(take(3, path(['comics', 'items'], data)))

        map(({resourceURI}) => {
          const comicsId = last(split('/', resourceURI))

          fetchComicsDetails({comicsId})
        }, lastComics)
      } else {
        await dispatch(
          loadCharacterDetailsFetchActions.failure.create({error, status}),
        )
      }
    },
    [dispatch, fetchComicsDetails],
  )
}

export default useFetchCharacterDetails
