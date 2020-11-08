import {useParams} from 'react-router-dom'
import React, {useEffect} from 'react'

import useFetchCharacterDetails from './hooks/useFetchCharacterDetails'

const Details = () => {
  const fetchCharacterDetails = useFetchCharacterDetails()

  const {characterId} = useParams()

  useEffect(() => {
    fetchCharacterDetails({characterId})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="lumx-spacing-padding-vertical-huge content-container">
      <h1>DETAILS PAGE</h1>
    </section>
  )
}

export default Details
