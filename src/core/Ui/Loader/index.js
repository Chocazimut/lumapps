import {Alignment, FlexBox, Progress} from '@lumx/react'
import React from 'react'

const Loader = () => (
  <FlexBox vAlign={Alignment.center} hAlign={Alignment.center}>
    <Progress />
  </FlexBox>
)

export default Loader
