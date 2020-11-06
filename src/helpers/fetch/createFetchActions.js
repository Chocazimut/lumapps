import {keys, map, zipObj} from 'ramda'

import {createActionCreator, createActionType} from '../redux/createAction'

const createFetchActionTypes = (namespace, key) => ({
  request: `${createActionType(namespace, key)}__REQUEST`,
  success: `${createActionType(namespace, key)}__SUCCESS`,
  failure: `${createActionType(namespace, key)}__FAILURE`,
})

const createFetchActionCreators = (types, moreKeys) => ({
  request: createActionCreator(types.request, ...moreKeys),
  success: createActionCreator(types.success, 'data', 'status', ...moreKeys),
  failure: createActionCreator(types.failure, 'error', 'status', ...moreKeys),
})

const createFetchActions = (namespace, key, morePayloadKeys = []) => {
  const fetchActionTypes = createFetchActionTypes(namespace, key)

  const fetchActionCreators = createFetchActionCreators(
    fetchActionTypes,
    morePayloadKeys,
  )

  const steps = keys(fetchActionTypes)

  const actions = map(
    step => ({
      create: fetchActionCreators[step],
      type: fetchActionTypes[step],
    }),
    steps,
  )

  return zipObj(steps, actions)
}

export default createFetchActions
