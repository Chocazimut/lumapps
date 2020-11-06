import {bool, element} from 'prop-types'
import React from 'react'

import Header from './components/Header'

const Layout = ({isHeaderHidden, children}) => (
  <div>
    {!isHeaderHidden && <Header />}
    <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: element.isRequired,
  isHeaderHidden: bool,
}
Layout.defaultProps = {
  isHeaderHidden: false,
}

export default Layout
