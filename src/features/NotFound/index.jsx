import {Alignment, FlexBox} from '@lumx/react'
import React from 'react'

const NotFound = () => (
  <FlexBox vAlign={Alignment.center} hAlign={Alignment.center}>
    <p className="lumx-typography-headline">404</p>
  </FlexBox>
)

export default NotFound
