import {path} from 'ramda'

import STORE_NAMESPACES from 'store/namespaces'

const namespace = STORE_NAMESPACES.LAYOUT

export const getSearchFieldValue = state =>
  path([namespace, 'searchField'], state)
