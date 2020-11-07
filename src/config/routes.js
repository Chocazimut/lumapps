import {
  compose,
  find,
  isEmpty,
  join,
  map,
  prop,
  propEq,
  propOr,
  split,
  startsWith,
} from 'ramda'

const routes = [
  {
    id: 'home',
    path: '/',
    exact: true,
    feature: 'Home',
    pageName: 'Home',
    isPublic: true,
  },
  {
    id: 'details',
    path: '/details/:characterId',
    exact: true,
    feature: 'Details',
    pageName: 'Details',
    isPublic: true,
    isLightHeader: true,
  },
  {
    id: 'notFound',
    path: '/404',
    exact: true,
    feature: 'NotFound',
    pageName: '404',
    isPublic: true,
    isHeaderHidden: true,
  },
]

export const getPagePath = (id, parameters = {}) =>
  compose(
    join('/'),
    map(part =>
      startsWith(':', part) && !isEmpty(parameters)
        ? propOr(part, part.slice(1), parameters)
        : part,
    ),
    split('/'),
    prop('path'),
    find(propEq('id', id)),
  )(routes)

export default routes
