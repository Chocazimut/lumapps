import React, {useEffect} from 'react'

import useFetchMarvelCharacters from './hooks/useFetchMarvelCharacters'

const Home = () => {
  const fetchMarvelCharacters = useFetchMarvelCharacters()

  useEffect(
    () => {
      fetchMarvelCharacters()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return (
    <section className="lumx-spacing-padding-horizontal-huge rules">
      <h1>HOME</h1>
    </section>
  )
}

export default Home
