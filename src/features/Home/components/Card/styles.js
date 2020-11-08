import styled from 'styled-components'

export const CharacterImage = styled.div(props => ({
  backgroundImage: `url('${props.imageUrl}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderTopLeftRadius: '4px',
  borderBottomLeftRadius: '4px',
  width: '100%',
  height: '100%',
}))
