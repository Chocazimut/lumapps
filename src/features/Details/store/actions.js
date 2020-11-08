import createFetchActions from 'helpers/fetch/createFetchActions'
import STORE_NAMESPACES from 'store/namespaces'

const namespace = STORE_NAMESPACES.DETAILS

export const loadCharacterDetailsFetchActions = createFetchActions(
  namespace,
  'characterDetails',
)
