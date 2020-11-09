import {useParams} from 'react-router-dom'
import React, {useEffect} from 'react'

import ComicsSection from './components/ComicsSection'
import Hero from './components/Hero'
import OtherSection from './components/OtherSection'
import useFetchCharacterDetails from './hooks/useFetchCharacterDetails'

const Details = () => {
  const fetchCharacterDetails = useFetchCharacterDetails()

  const {characterId} = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchCharacterDetails({characterId})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section>
      <Hero />
      <ComicsSection />
      <OtherSection />
    </section>
  )
}

export default Details
