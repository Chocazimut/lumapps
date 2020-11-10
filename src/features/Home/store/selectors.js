import {path, pathOr} from 'ramda'

import STORE_NAMESPACES from 'store/namespaces'

const namespace = STORE_NAMESPACES.HOME

export const getFetchMarvelCharactersStatus = state =>
  path([namespace, 'marvelCharacters'], state)

export const getMarvelCharactersList = state =>
  pathOr([], [namespace, 'marvelCharacters', 'data', 'results'], state)

export const getTotalResults = state =>
  path([namespace, 'marvelCharacters', 'data', 'total'], state)

export const getLoadMoreOffset = state => path([namespace, 'offset'], state)
