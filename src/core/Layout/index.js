import {bool, element} from 'prop-types'
import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'

const Layout = ({isHeaderHidden, isLightHeader, children}) => (
  <div>
    {!isHeaderHidden && <Header isLightHeader={isLightHeader} />}
    <main className="main-container">{children}</main>
    {!isHeaderHidden && <Footer />}
  </div>
)

Layout.propTypes = {
  children: element.isRequired,
  isHeaderHidden: bool,
  isLightHeader: bool,
}
Layout.defaultProps = {
  isHeaderHidden: false,
  isLightHeader: false,
}

export default Layout
