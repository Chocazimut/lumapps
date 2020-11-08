import {Alignment, FlexBox, Orientation} from '@lumx/react'
import React from 'react'

const HeadlinesBlock = () => (
  <FlexBox
    orientation={Orientation.vertical}
    vAlign={Alignment.center}
    className="lumx-spacing-padding-huge headlines-container"
  >
    <h1 className="lumx-typography-display1">
      <span className="blue-span">Marvel</span> Characters
    </h1>
    <h3 className="lumx-typography-subtitle2 lumx-spacing-padding-vertical-big">
      Get hooked on a hearty helping of heroes and villains from the humble
      House of Ideas!
    </h3>
  </FlexBox>
)

export default HeadlinesBlock
