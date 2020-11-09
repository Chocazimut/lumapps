import styled from 'styled-components'

export const CharacterImage = styled.div(props => ({
  backgroundImage: `url('${props.imageUrl}')`,
  backgroundColor: '#F4F4F4',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '50%',
  width: '80%',
  height: '80%',
}))
