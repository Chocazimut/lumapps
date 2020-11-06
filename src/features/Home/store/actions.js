import createFetchActions from 'helpers/fetch/createFetchActions'
import STORE_NAMESPACES from 'store/namespaces'

const namespace = STORE_NAMESPACES.HOME

export const loadMarvelCharactersFetchActions = createFetchActions(
  namespace,
  'marvelCharacters',
)
