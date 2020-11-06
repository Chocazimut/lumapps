import {mdiMagnify} from '@lumx/icons'
import {TextField, Theme} from '@lumx/react'
import React from 'react'

const SearchField = () => (
  <TextField theme={Theme.dark} placeholder="Search ..." icon={mdiMagnify} />
)

export default SearchField
