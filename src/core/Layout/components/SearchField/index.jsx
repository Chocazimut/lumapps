import {bool} from 'prop-types'
import {mdiMagnify} from '@lumx/icons'
import {TextField, Theme} from '@lumx/react'
import {useDispatch, useSelector} from 'react-redux'
import history from 'store/history'
import React from 'react'

import {setLoadMoreOffsetAction} from 'features/Home/store/actions'
import useDebouncedInput from 'hooks/useDebouncedInput'

import {getPagePath} from 'config/routes'
import {getSearchFieldValue} from '../../store/selectors'
import {setSearchFieldAction} from '../../store/actions'

const SearchField = ({isLightHeader}) => {
  const dispatch = useDispatch()
  const searchValue = useSelector(getSearchFieldValue)
  const handleChange = value => dispatch(setSearchFieldAction.create({value}))

  const [debouncedValue, debouncedOnChange] = useDebouncedInput(
    searchValue,
    handleChange,
  )

  const handleEnterKeyPress = event => {
    if (event.key === 'Enter') {
      dispatch(setLoadMoreOffsetAction.create({offset: 0}))
      history.push(getPagePath('home'))
    }
  }

  return (
    <TextField
      theme={isLightHeader ? Theme.light : Theme.dark}
      placeholder="Search ..."
      icon={mdiMagnify}
      value={debouncedValue}
      onChange={debouncedOnChange}
      onKeyPress={handleEnterKeyPress}
    />
  )
}

SearchField.propTypes = {
  isLightHeader: bool,
}
SearchField.defaultProps = {
  isLightHeader: false,
}

export default SearchField
