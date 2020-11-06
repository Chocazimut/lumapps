import {path} from 'ramda'

import STORE_NAMESPACES from 'store/namespaces'

const namespace = STORE_NAMESPACES.HOME

export const getFetchMarvelCharactersStatus = state =>
  path([namespace, 'marvelCharacters'], state)

export const getMarvelCharactersList = state =>
  path(namespace, ['marvelCharacters', 'data'], state)
