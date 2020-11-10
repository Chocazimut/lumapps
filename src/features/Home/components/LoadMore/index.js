import {Alignment, Button, FlexBox} from '@lumx/react'
import {mdiPlus} from '@lumx/icons'
import {useDispatch, useSelector} from 'react-redux'
import React from 'react'

import {
  getLoadMoreOffset,
  getMarvelCharactersList,
  getTotalResults,
} from '../../store/selectors'
import {setLoadMoreOffsetAction} from '../../store/actions'

const LoadMore = () => {
  const dispatch = useDispatch()
  const currentOffset = useSelector(getLoadMoreOffset)
  const totalResults = useSelector(getTotalResults)
  const charactersList = useSelector(getMarvelCharactersList)

  const handleLoadMoreResults = () => {
    dispatch(setLoadMoreOffsetAction.create({offset: currentOffset + 1}))
  }

  if (charactersList.length === totalResults) {
    return null
  }

  return (
    <FlexBox
      className="lumx-spacing-padding-vertical-huge"
      vAlign={Alignment.center}
    >
      <Button color="red" leftIcon={mdiPlus} onClick={handleLoadMoreResults}>
        LOAD MORE
      </Button>
    </FlexBox>
  )
}

export default LoadMore
