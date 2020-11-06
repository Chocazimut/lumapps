import {
  all,
  compose,
  filter,
  includes,
  is,
  isEmpty,
  isNil,
  join,
  keys,
  length,
  uniq,
} from 'ramda'
import snakeCase from 'lodash/fp/snakeCase'
import toUpper from 'lodash/fp/toUpper'

export const formatForRedux = compose(toUpper, snakeCase)

export const createActionType = (namespace, key) => {
  if (isNil(namespace) || !is(String, namespace) || isEmpty(namespace)) {
    throw new Error('Action namespace must be a non-empty string')
  }

  if (isNil(key) || !is(String, key) || isEmpty(key)) {
    throw new Error('Action key must be a non-empty string')
  }

  return `${formatForRedux(namespace)}/${formatForRedux(key)}`
}

export const createActionCreator = (type, ...payloadKeys) => {
  if (isNil(type) || !is(String, type) || isEmpty(type)) {
    throw new Error('Type must be a non-empty string')
  }

  if (!all(is(String))(payloadKeys)) {
    throw new Error('Payload keys must be an array of non-empty strings')
  }

  if (length(payloadKeys) !== length(uniq(payloadKeys))) {
    throw new Error('Payload keys must not contain duplicates')
  }

  return payload => {
    const unsupportedKeys = filter(
      key => !includes(key, payloadKeys),
      keys(payload),
    )

    if (unsupportedKeys.length) {
      const keysList = join(', ', unsupportedKeys)

      throw new Error(
        `Keys ${keysList} are not supported in payload of action ${type}`,
      )
    }

    return {
      type,
      ...payload,
    }
  }
}

const createAction = (namespace, key, payloadKeys = []) => {
  const actionType = createActionType(namespace, key)
  const actionCreator = createActionCreator(actionType, ...payloadKeys)

  return {create: actionCreator, type: actionType}
}

export default createAction
