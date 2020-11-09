import {FlexBox, Orientation, Progress} from '@lumx/react'
import {isEmpty, map} from 'ramda'
import {useSelector} from 'react-redux'
import React from 'react'

import {
  getCharacterLastComics,
  getFetchCharacterDetailsStatus,
} from '../../store/selectors'

const ComicsSection = () => {
  const {hasInit, isLoading} = useSelector(getFetchCharacterDetailsStatus)
  const lastComics = useSelector(getCharacterLastComics)

  if (hasInit && isLoading) {
    return (
      <section className="lumx-spacing-padding-huge content-container">
        <FlexBox
          orientation={Orientation.vertical}
          className="lumx-spacing-padding-huge"
        >
          <h1 className="lumx-typography-display1 section-title">
            Last <span>Comics</span>
          </h1>
          <div className="loading-wrapper">
            <Progress />
          </div>
        </FlexBox>
      </section>
    )
  }

  return (
    <section className="lumx-spacing-padding-huge content-container">
      <FlexBox
        orientation={Orientation.vertical}
        className="lumx-spacing-padding-huge"
      >
        <h1 className="lumx-typography-display1 section-title">
          Last <span>Comics</span>
        </h1>
        <FlexBox
          orientation={Orientation.horizontal}
          className="lumx-spacing-padding-huge comics-container"
        >
          {isEmpty(lastComics) && (
            <p className="lumx-typography-subtitle2 lumx-spacing-margin-bottom-huge">
              No comic available... :&apos;(
            </p>
          )}
          {map(
            ({title, thumbnail}, index) => (
              <FlexBox
                orientation={Orientation.vertical}
                className="lumx-spacing-margin-huge comics-card"
              >
                <img
                  src={`${thumbnail.path}.${thumbnail.extension}`}
                  alt={`${title} cover`}
                  className="cover-img lumx-spacing-margin-bottom-huge"
                />
                <p
                  className="lumx-typography-subtitle2 lumx-spacing-margin-bottom-huge"
                  key={`last-comic-${index}`}
                >
                  {title}
                </p>
              </FlexBox>
            ),
            lastComics,
          )}
        </FlexBox>
      </FlexBox>
    </section>
  )
}

export default ComicsSection
