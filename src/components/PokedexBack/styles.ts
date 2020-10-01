import styled from 'styled-components'

const WrapperContent = styled.div`
  
  max-width: 25rem;
  width: 100%;
  height: 80vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: ${props => props.theme.colors.primary};

  padding: 0rem;
  border-radius: 1rem;
  box-shadow: 5px 5.5px 0px 5px ${props => props.theme.colors.secondary};

`

const PokedexHeader = styled.header`

  width: 100%;
  height: 100%;
  
  border-radius: 1rem;

  overflow: hidden;

`

const HeaderContent = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  color: ${props => props.theme.colors.secondary};

  padding: 1rem;

  box-shadow: 0px 4px 0px ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.primaryLight};

  img {
    width: 2rem;

    cursor: pointer;

    box-shadow: 2px 2px 0px 1px ${props => props.theme.colors.secondary};
    border-radius: 3rem;

  }
  
`

export { WrapperContent, PokedexHeader, HeaderContent }