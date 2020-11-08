import {isEmpty} from 'ramda'
import {useSelector} from 'react-redux'
import React, {useEffect} from 'react'

import {getSearchFieldValue} from 'core/Layout/store/selectors'

import {
  getFetchMarvelCharactersStatus,
  getLoadMoreOffset,
  getMarvelCharactersList,
} from './store/selectors'
import CardList from './components/CardList'
import HeadlinesBlock from './components/HeadlinesBlock'
import LoadMore from './components/LoadMore'
import useFetchMarvelCharacters from './hooks/useFetchMarvelCharacters'

const Home = () => {
  const fetchMarvelCharacters = useFetchMarvelCharacters()
  const characterList = useSelector(getMarvelCharactersList)
  const searchValue = useSelector(getSearchFieldValue)
  const currentOffset = useSelector(getLoadMoreOffset)
  const {hasInit, isLoading} = useSelector(getFetchMarvelCharactersStatus)
  const nameStartsWith = isEmpty(searchValue) ? undefined : searchValue

  useEffect(
    () => {
      const more = currentOffset > 0

      fetchMarvelCharacters({more, nameStartsWith})
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentOffset],
  )

  return (
    <section className="home">
      <div className="content-container lumx-spacing-padding-vertical-huge">
        <HeadlinesBlock />
        <CardList />
        {hasInit && !isLoading && !isEmpty(characterList) && <LoadMore />}
      </div>
    </section>
  )
}

export default Home
