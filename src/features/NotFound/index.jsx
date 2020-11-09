import {Alignment, Button, FlexBox, Orientation} from '@lumx/react'
import {Link} from 'react-router-dom'
import React from 'react'

import {getPagePath} from 'config/routes'
import CosmosIcon from 'assets/Icons/cosmos-icon.svg'

const NotFound = () => (
  <FlexBox
    vAlign={Alignment.center}
    hAlign={Alignment.center}
    orientation={Orientation.vertical}
    className="not-found-container"
  >
    <p className="lumx-typography-headline lumx-spacing-margin-bottom-huge">
      OUPS !
    </p>
    <p className="lumx-typography-headline lumx-spacing-margin-bottom-huge">
      It looks like you&apos;re Lost In The Cosmos...
    </p>
    <img
      className="cosmos-img lumx-spacing-margin-vertical-huge"
      src={CosmosIcon}
      alt="cosmos icon"
    />
    <Link
      to={getPagePath('home')}
      className="lumx-spacing-margin-vertical-huge"
    >
      <Button color="red">GO BACK TO HEARTH</Button>
    </Link>
  </FlexBox>
)

export default NotFound
