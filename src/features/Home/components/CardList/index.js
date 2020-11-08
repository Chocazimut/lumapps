import {addIndex, map} from 'ramda'
import {FlexBox} from '@lumx/react'
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
  const {isLoading} = useSelector(getFetchMarvelCharactersStatus)
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
