import createAction from 'helpers/redux/createAction'
import createFetchActions from 'helpers/fetch/createFetchActions'
import STORE_NAMESPACES from 'store/namespaces'

const namespace = STORE_NAMESPACES.HOME

export const loadMarvelCharactersFetchActions = createFetchActions(
  namespace,
  'marvelCharacters',
  ['more'],
)

export const setLoadMoreOffsetAction = createAction(namespace, 'offset', [
  'offset',
])
