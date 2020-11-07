import createActions from 'helpers/redux/createAction'
import STORE_NAMESPACES from 'store/namespaces'

const namespace = STORE_NAMESPACES.LAYOUT

export const setSearchFieldAction = createActions(namespace, 'searchField', [
  'value',
])
