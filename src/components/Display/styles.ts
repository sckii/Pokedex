import styled from 'styled-components'

const WrapperContent = styled.div`
  width: 21.3rem;
  height: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  background: ${props => props.theme.colors.white};
  box-shadow: 5px 5.5px 0px 5px ${props => props.theme.colors.secondary};

  padding: 0rem;
  margin: 2rem;

  border-radius: 0.8rem;

`

const BlueScreen = styled.div`

  width: 80%;
  height: 10rem;

  margin: 2rem;
  border-radius: 1rem;

  box-shadow: -2.5px -2.5px 0px 1px ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.screen};

`

export {WrapperContent, BlueScreen}