import {useSelector} from 'react-redux'
import React, {useEffect} from 'react'

import {getLoadMoreOffset} from './store/selectors'
import CardList from './components/CardList'
import HeadlinesBlock from './components/HeadlinesBlock'
import LoadMore from './components/LoadMore'
import useFetchMarvelCharacters from './hooks/useFetchMarvelCharacters'

const Home = () => {
  const fetchMarvelCharacters = useFetchMarvelCharacters()
  const currentOffset = useSelector(getLoadMoreOffset)

  useEffect(
    () => {
      const more = currentOffset > 0

      fetchMarvelCharacters({more})
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentOffset],
  )

  return (
    <section className="home">
      <div className="content-container lumx-spacing-padding-vertical-huge">
        <HeadlinesBlock />
        <CardList />
        <LoadMore />
      </div>
    </section>
  )
}

export default Home
