import {Alignment, FlexBox, Progress} from '@lumx/react'
import React from 'react'

const Loader = () => (
  <FlexBox
    vAlign={Alignment.center}
    hAlign={Alignment.center}
    className="loader-container"
  >
    <Progress />
  </FlexBox>
)

export default Loader
