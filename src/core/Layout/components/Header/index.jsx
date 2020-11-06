import {Alignment, FlexBox} from '@lumx/react'
import React from 'react'
import SearchField from '../SearchField'

const Header = () => (
  <header className="lumx-spacing-padding-big header">
    <FlexBox vAlign={Alignment.right}>
      <SearchField />
    </FlexBox>
  </header>
)

export default Header
