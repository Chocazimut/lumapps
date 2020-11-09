import {Alignment, AspectRatio, FlexBox, Thumbnail} from '@lumx/react'
import {bool} from 'prop-types'
import {Link, useLocation} from 'react-router-dom'
import React from 'react'

import {getPagePath} from 'config/routes'
import marvelLogo from 'assets/images/marvel-logo.svg'

import SearchField from '../SearchField'

const Header = ({isLightHeader}) => {
  const {pathname} = useLocation()

  return (
    <header
      className={`lumx-spacing-padding-big header ${
        isLightHeader ? 'header-light' : 'header-dark'
      }`}
    >
      <FlexBox
        vAlign={Alignment.spaceBetween}
        hAlign={Alignment.center}
        fillSpace
        className="header-content-container"
      >
        <Link to={{pathname: getPagePath('home'), state: {from: pathname}}}>
          <Thumbnail
            className="marvel-logo"
            size="xl"
            aspectRatio={AspectRatio.original}
            image={marvelLogo}
          />
        </Link>
        <SearchField isLightHeader={isLightHeader} />
      </FlexBox>
    </header>
  )
}

Header.propTypes = {
  isLightHeader: bool,
}
Header.defaultProps = {
  isLightHeader: false,
}

export default Header
