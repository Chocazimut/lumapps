import {bool} from 'prop-types'
import ContentLoader from 'react-content-loader'
import React from 'react'

import useIsMobile from 'hooks/useIsMobile'

const CardLoader = ({marginLeft}) => {
  const isMobile = useIsMobile()
  const desktopMargin = marginLeft ? '0 16px 16px 0 ' : '0 0 16px 0'

  return (
    <div
      style={{
        margin: isMobile ? '0 16px 16px 16px ' : desktopMargin,
      }}
    >
      <ContentLoader
        speed={2}
        width={540}
        height={300}
        viewBox="0 0 540 300"
        backgroundColor="#ededed"
        foregroundColor="#e4e2e2"
      >
        <rect x="0" y="0" rx="4" ry="4" width="211" height="300" />
        <rect x="216" y="0" rx="0" ry="0" width="324" height="300" />
      </ContentLoader>
    </div>
  )
}

CardLoader.propTypes = {
  marginLeft: bool,
}
CardLoader.defaultProps = {
  marginLeft: false,
}

export default CardLoader
