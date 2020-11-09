import createAction from 'helpers/redux/createAction'
import createFetchActions from 'helpers/fetch/createFetchActions'
import STORE_NAMESPACES from 'store/namespaces'

const namespace = STORE_NAMESPACES.DETAILS

export const loadCharacterDetailsFetchActions = createFetchActions(
  namespace,
  'characterDetails',
)

export const loadComicsDetailsFetchActions = createFetchActions(
  namespace,
  'comicsDetails',
)

export const updateCharacterDetailsAction = createAction(
  namespace,
  'lastComics',
  ['newComics'],
)
