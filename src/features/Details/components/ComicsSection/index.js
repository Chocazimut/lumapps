import {Alignment, FlexBox, Orientation, Progress} from '@lumx/react'
import {isEmpty} from 'ramda'
import {useSelector} from 'react-redux'
import React from 'react'

import {getComicList, getFetchComicsDetailsStatus} from '../../store/selectors'
import ComicCard from './components/ComicCard'

const ComicsSection = () => {
  const {hasInit, isLoading} = useSelector(getFetchComicsDetailsStatus)
  const comicList = useSelector(getComicList)

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
          hAlign={Alignment.center}
          className="lumx-spacing-padding-huge comics-container"
        >
          {isEmpty(comicList) && (
            <p className="lumx-typography-subtitle2 lumx-spacing-margin-bottom-huge">
              No comic available... :&apos;(
            </p>
          )}
          <ComicCard />
        </FlexBox>
      </FlexBox>
    </section>
  )
}

export default ComicsSection
