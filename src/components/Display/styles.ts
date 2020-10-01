import styled from 'styled-components'

const WrapperContent = styled.div`
  width: 21.3rem;
  height: 60%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  background: ${props => props.theme.colors.white};
  box-shadow: 5px 5.5px 0px 5px ${props => props.theme.colors.secondary};

  padding: 0rem;
  margin: 2rem;

  border-radius: 0.8rem;

  @media (min-height: 720px) {
    height: 70%;
  }

  cursor: crosshair;

`

const BlueScreen = styled.div`

  width: 80%;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
  
  margin: 2rem;
  border-radius: 1rem;
  
  box-shadow: -2.5px -2.5px 0px 1px ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.screen};
  
  img {
    opacity: 0.8;
    width: 60%;
  }

  @media (min-height: 720px) {
    height: 60%;
  }

`
const List = styled.div`

  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

`
const Box = styled.div`

  display:flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 0.8rem;

  width: 12rem;
  height: 0rem;

  padding: .8rem;
  margin: 0.2rem;

  border-radius: 0.7rem 0rem 0.7rem 0rem;

  box-shadow: 2px 2px 0px 1px ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.secondaryDark};;
`

export {Box, WrapperContent, BlueScreen, List}