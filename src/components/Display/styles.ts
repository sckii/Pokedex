import styled from 'styled-components'

const WrapperContent = styled.div`
  width: 21.3rem;
  height: 65%;

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

const BlueScreen = styled.ul`
  ::-webkit-scrollbar {
    width: 5px;
    background: none; 
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primaryLight}
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.primary}
  }

  overflow-x: auto;

  width: 80%;
  height: 70%;

  display: flex;
  flex-direction: column;
  
  opacity: 0.7;
  
  margin: 1rem;
  border-radius: 1rem 0rem 0rem 1rem;
  
  box-shadow: -2.5px -2.5px 0px 1px ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.screen};
  
  img {
    width: 60%;
  }

  @media (min-height: 720px) {
    height: 60%;
    margin: 3rem;

  }

`

const List = styled.div`

  display:flex;
  align-items: center;
  justify-content: space-between;

`

const ButtonFake = styled.button`
  width: 3rem;
  height: 3rem;

  margin-right: 2rem;

  background: #FD1A55;

  outline: none;

  border: .4rem solid ${props => props.theme.colors.secondaryDark};
  border-radius: 3rem;

  img {
    display:flex;
    align-items: center;
    margin-left: 0.25rem;
    width: 1.7rem;
  }
`

const SoundFake = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin-bottom: 0.4rem;
    width: 10rem;
    height: .5rem;

    border-radius: 2rem;

    background: ${props => props.theme.colors.secondaryDark};;
  }
`

export { WrapperContent, BlueScreen, List, ButtonFake, SoundFake }