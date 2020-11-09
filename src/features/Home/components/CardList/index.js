import {addIndex, isEmpty, map} from 'ramda'
import {Alignment, FlexBox} from '@lumx/react'
import {isEven} from 'ramda-adjunct'
import {useSelector} from 'react-redux'
import React from 'react'

import {
  getFetchMarvelCharactersStatus,
  getMarvelCharactersList,
} from '../../store/selectors'
import Card from '../Card'
import CardLoader from '../Skeleton'

const CardList = () => {
  const characterList = useSelector(getMarvelCharactersList)
  const {hasInit, isLoading, error} = useSelector(
    getFetchMarvelCharactersStatus,
  )
  const mapIndex = addIndex(map)

  if (isLoading) {
    return (
      <FlexBox className="card-list-container">
        {mapIndex(
          ({id, name, description, thumbnail}, index) => (
            <Card
              key={id}
              id={id}
              name={name}
              description={description}
              position={isEven(index) ? 'left' : 'right'}
              thumbnail={thumbnail}
            />
          ),
          characterList,
        )}
        <CardLoader marginLeft />
        <CardLoader />
        <CardLoader marginLeft />
        <CardLoader />
      </FlexBox>
    )
  }

  if (hasInit && !isLoading && isEmpty(characterList) && !error) {
    return (
      <FlexBox vAlign={Alignment.center}>
        <p className="lumx-typography-body2">
          Sorry... No result found :&apos;(
        </p>
      </FlexBox>
    )
  }

  if (hasInit && !isLoading && error) {
    return (
      <FlexBox vAlign={Alignment.center}>
        <p className="lumx-typography-body2">
          {`Sorry... ${error.message} :'(`}
        </p>
      </FlexBox>
    )
  }

  return (
    <FlexBox className="card-list-container">
      {mapIndex(
        ({id, name, description, thumbnail}, index) => (
          <Card
            key={id}
            id={id}
            name={name}
            description={description}
            position={isEven(index) ? 'left' : 'right'}
            thumbnail={thumbnail}
          />
        ),
        characterList,
      )}
    </FlexBox>
  )
}

export default CardList
