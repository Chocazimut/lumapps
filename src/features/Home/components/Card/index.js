import {Alignment, FlexBox, Orientation} from '@lumx/react'
import {isEmpty} from 'ramda'
import {Link} from 'react-router-dom'
import {number, shape, string} from 'prop-types'
import React from 'react'

import {getPagePath} from 'config/routes'
import wave from 'assets/images/wave.png'

import {CharacterImage} from './styles'

const Card = ({id, name, description, position, thumbnail}) => {
  const {path, extension} = thumbnail
  const imgUrl = `${path}.${extension}`

  return (
    <Link
      to={getPagePath('details', {characterId: id})}
      className={`details-link lumx-spacing-margin-vertical-big ${
        position === 'left'
          ? 'lumx-spacing-margin-right-big'
          : 'lumx-spacing-margin-left-big'
      }`}
    >
      <FlexBox vAlign={Alignment.start} className="card-container">
        <div className="character-image-wrapper">
          <CharacterImage
            className="character-image"
            imageUrl={thumbnail && imgUrl}
          />
        </div>
        <FlexBox
          orientation={Orientation.vertical}
          hAlign={Alignment.end}
          vAlign={Alignment.spaceBetween}
          className="lumx-spacing-padding-huge right-container"
        >
          <FlexBox
            orientation={Orientation.vertical}
            hAlign={Alignment.start}
            className="character-desc-container"
          >
            <p className="lumx-typography-title lumx-spacing-padding-top-huge">
              {name}
            </p>
            <p className="lumx-typography-body2 lumx-spacing-padding-top-big">
              {isEmpty(description)
                ? "Another Hero without short description...  :'("
                : `${description.substring(0, 120)}...`}
            </p>
          </FlexBox>
          <p className="see-more lumx-typography-body1 lumx-spacing-padding-top-huge lumx-spacing-margin-right-huge">
            See More
          </p>
        </FlexBox>
        <img src={wave} alt="more" className="wave" />
      </FlexBox>
    </Link>
  )
}

Card.propTypes = {
  description: string,
  id: number.isRequired,
  name: string,
  position: string,
  thumbnail: shape({
    path: string,
    extension: string,
  }),
}
Card.defaultProps = {
  description: '',
  name: '',
  position: 'left',
  thumbnail: {
    path: '',
    extension: 'jpg',
  },
}
export default Card
