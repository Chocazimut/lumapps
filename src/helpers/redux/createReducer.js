import {any, has, is, isNil, keys} from 'ramda'

/**
 Creates a reducer.
 @param {{count: number, placeholderData: *}} initialState - The initial state for this reducer.
 @param {object} handlers - Keys are action types (strings), values are reducers (functions).
 @return {object} A reducer object.
 */
const createReducer = (initialState, handlers) => {
  // initial state is required
  if (isNil(initialState) || !is(Object, initialState)) {
    throw new Error('initial state is a required object')
  }

  // handlers must be an object
  if (isNil(handlers) || !is(Object, handlers)) {
    throw new Error('handlers must be an object')
  }

  // handlers cannot have an undefined key
  if (any(isNil)(keys(handlers))) {
    throw new Error('handlers cannot have an undefined key')
  }

  // create the reducer function
  return (state = initialState, action = null) => {
    if (isNil(action) || !has('type', action)) {
      return state
    }

    const handler = handlers[action.type]

    if (isNil(handler)) {
      return state || initialState
    }

    return handler(state, action)
  }
}

export default createReducer
