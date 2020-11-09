import {Alignment, FlexBox, Orientation} from '@lumx/react'
import React from 'react'

import lumappsLogo from 'assets/images/logo-lumapps.png'

const Footer = () => (
  <footer className="lumx-spacing-padding-huge footer">
    <FlexBox
      className="footer-content-container lumx-spacing-padding-vertical-huge"
      orientation={Orientation.vertical}
      hAlign={Alignment.center}
      vAlign={Alignment.start}
    >
      <FlexBox className="lumx-spacing-padding-vertical-huge footer-top">
        <p className="lumx-typography-body2 lumx-spacing-margin-right-big">
          Réalisé par{' '}
          <span className="lumx-typography-subtitle2"> Margaux Plovier</span>{' '}
          pour
        </p>
        <a
          href="https://www.lumapps.com/"
          target="blank"
          rel="noopener noreferrer"
        >
          <img className="lumapps-logo" src={lumappsLogo} alt="lumapps-logo" />
        </a>
      </FlexBox>
      <div className="separative-line lumx-spacing-margin-vertical-big" />
      <p className="lumx-typography-body1 lumx-spacing-margin-right-tiny lumx-spacing-padding-vertical-huge">
        Novembre 2020.
      </p>
    </FlexBox>
  </footer>
)

export default Footer
