import styled from 'styled-components'

const WrapperContent = styled.input`

  margin: 0rem 4rem 0rem 4rem;
  padding: 0.7rem;

  font-size: 1.2rem;

  border: none;
  border-radius: 0.5rem;

  outline: none;

  box-shadow: 5px 5.5px 0px 3px ${props => props.theme.colors.secondary};
`

export {WrapperContent}