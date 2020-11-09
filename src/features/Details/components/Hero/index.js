import {
  Alignment,
  FlexBox,
  Icon,
  Orientation,
  Progress,
  Size,
} from '@lumx/react'
import {isEmpty, isNil} from 'ramda'
import {mdiArrowLeft} from '@lumx/icons'
import {useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'
import React from 'react'

import {emptyCharacterDescription} from 'config/constants'
import {getPagePath} from 'config/routes'
import history from 'store/history'
import wave from 'assets/images/wave2.png'

import {CharacterImage} from './styles'
import {
  getCharacterDetails,
  getFetchCharacterDetailsStatus,
} from '../../store/selectors'

const Hero = () => {
  const {pathname, state} = useLocation()
  const {hasInit, isLoading, error} = useSelector(
    getFetchCharacterDetailsStatus,
  )

  const characterDetails = useSelector(getCharacterDetails)

  const {name, description, thumbnail} = characterDetails || ''

  const characterDescription =
    hasInit && !isLoading && isEmpty(description)
      ? emptyCharacterDescription
      : description

  const handleGoBack = () => {
    if (isNil(state)) {
      history.push({pathname: getPagePath('home'), state: {from: pathname}})
    } else {
      history.goBack()
    }
  }

  if (hasInit && isLoading) {
    return (
      <div className="hero-wrapper loading-wrapper">
        <Progress />
        <FlexBox vAlign={Alignment.center} className="wave-container">
          <img
            src={wave}
            alt="bottom-hero-background-wave"
            className="hero-wave"
          />
        </FlexBox>
      </div>
    )
  }

  return (
    <div className="hero-wrapper">
      <FlexBox vAlign={Alignment.center} className="wave-container">
        <img
          src={wave}
          alt="bottom-hero-background-wave"
          className="hero-wave"
        />
      </FlexBox>
      <FlexBox className="hero-content-container lumx-spacing-padding-huge">
        <FlexBox
          orientation={Orientation.vertical}
          vAlign={Alignment.start}
          className="left-container lumx-spacing-padding-huge"
        >
          {error && (
            <>
              <h3 className="lumx-typography-title hero-subtitle lumx-spacing-padding-bottom-huge">
                Sorry... It looks like this character is gone... :&apos;(
              </h3>
              <h3 className="lumx-typography-title hero-subtitle">
                {`Or ${error.message}...`}
              </h3>
            </>
          )}
          <h2 className="lumx-typography-display1 hero-title lumx-spacing-padding-bottom-huge">
            {name}
          </h2>
          <h3 className="lumx-typography-title hero-subtitle">
            {characterDescription}
          </h3>
        </FlexBox>
        <FlexBox
          orientation={Orientation.vertical}
          vAlign={Alignment.end}
          className="right-container lumx-spacing-padding-huge"
        >
          <div className="hero-image">
            <CharacterImage
              imageUrl={thumbnail && `${thumbnail.path}.${thumbnail.extension}`}
            />
          </div>
        </FlexBox>
      </FlexBox>
      <FlexBox className="lumx-spacing-padding-huge back-section-container">
        <FlexBox
          orientation={Orientation.horizontal}
          hAlign={Alignment.center}
          className="back-section"
          onClick={handleGoBack}
        >
          <Icon
            icon={mdiArrowLeft}
            size={Size.s}
            className="lumx-spacing-margin-right-big back-icon"
          />
          <p className="lumx-typography-subtitle2 back-text">
            Back <span>to Characters</span>
          </p>
        </FlexBox>
      </FlexBox>
    </div>
  )
}

export default Hero
