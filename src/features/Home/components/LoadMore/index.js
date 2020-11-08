import {Alignment, Button, FlexBox} from '@lumx/react'
import {mdiPlus} from '@lumx/icons'
import {useDispatch, useSelector} from 'react-redux'
import React from 'react'

import {getLoadMoreOffset} from '../../store/selectors'
import {setLoadMoreOffsetAction} from '../../store/actions'

const LoadMore = () => {
  const dispatch = useDispatch()
  const currentOffset = useSelector(getLoadMoreOffset)

  const handleLoadMoreResults = () => {
    dispatch(setLoadMoreOffsetAction.create({offset: currentOffset + 1}))
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
