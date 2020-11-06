import debounce from 'lodash/fp/debounce'
import React, {useMemo} from 'react'

const useDebouncedInput = (value, onChange) => {
  const [innerValue, setInnerValue] = React.useState(value)

  const debouncedOnChange = useMemo(() => debounce(400, onChange), [onChange])

  const handleChange = event => {
    event.preventDefault()

    const newValue = event.target.value

    setInnerValue(newValue)
    debouncedOnChange(newValue)
  }

  return [innerValue, handleChange]
}

export default useDebouncedInput
