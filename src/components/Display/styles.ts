import styled from 'styled-components'

const WrapperContent = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: ${props => props.theme.colors.primary};

  padding: 0rem;
  border-radius: 0.8rem;
  box-shadow: 5px 5.5px 0px 5px ${props => props.theme.colors.secondary};

`

export {WrapperContent}