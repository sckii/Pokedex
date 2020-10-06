import styled from 'styled-components'

const WrapperContent = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.7rem;

  font-size: 1.2rem;

  border: none;
  border-radius: 0.5rem;

  outline: none;

  box-shadow: 5px 5.5px 0px 3px ${props => props.theme.colors.secondary};

  img {
    width: 1.5rem;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px)
  }
`

export {WrapperContent}