import {addIndex, find, map, propEq, take} from 'ramda'
import {Alignment, FlexBox, Orientation} from '@lumx/react'
import {startCase} from 'lodash/fp'
import {useSelector} from 'react-redux'
import React from 'react'

import {onSaleDateFormat} from 'helpers/dates/formatDates'
import sortComicListFromLastDate from 'helpers/lists/sortListFromLastDate'

import {getComicList} from '../../../../store/selectors'

const ComicCard = () => {
  const comicList = useSelector(getComicList)

  const test = take(3, sortComicListFromLastDate(comicList))

  const mapIndexed = addIndex(map)

  return map(({id, dates, prices, title, thumbnail}) => {
    const {date: onSaleDate} = find(propEq('type', 'onsaleDate'))(dates)

    return (
      <FlexBox
        key={`last-comic-${id}`}
        orientation={Orientation.vertical}
        className="lumx-spacing-margin-huge comics-card"
      >
        <FlexBox
          vAlign={Alignment.center}
          hAlign={Alignment.center}
          className="cover-container lumx-spacing-margin-bottom-huge lumx-color-background-dark-"
        >
          <img
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={`${title} cover`}
            className="cover-img"
          />
        </FlexBox>
        <p className="lumx-typography-subtitle2 lumx-spacing-margin-bottom-big">
          {title}
        </p>
        <p className="lumx-typography-subtitle1 lumx-spacing-margin-bottom-tiny">
          On sale:{' '}
          <span className="lumx-typography-body1">
            {onSaleDateFormat(new Date(onSaleDate))}
          </span>
        </p>
        <p className="lumx-typography-subtitle1 lumx-spacing-margin-bottom-tiny">
          Prices:
        </p>
        {mapIndexed(
          ({type, price}, index) => (
            <p
              className="lumx-typography-body1 lumx-spacing-margin-bottom-tiny lumx-spacing-margin-left-tiny"
              key={`last-comic-price-${index}`}
            >
              {startCase(type)}: {price}$
            </p>
          ),
          prices,
        )}
      </FlexBox>
    )
  }, test)
}

export default ComicCard
