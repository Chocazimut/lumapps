import {path} from 'ramda'

import STORE_NAMESPACES from 'store/namespaces'

const namespace = STORE_NAMESPACES.DETAILS

export const getFetchCharacterDetailsStatus = state =>
  path([namespace, 'characterDetails'], state)

export const getCharacterDetails = state =>
  path([namespace, 'characterDetails', 'data'], state)

export const getLoadMoreOffset = state => path([namespace, 'offset'], state)
