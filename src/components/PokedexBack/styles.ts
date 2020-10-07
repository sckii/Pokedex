import styled from 'styled-components'

const WrapperContent = styled.div`
  
  max-width: 25rem;
  width: 100%;
  height: 90vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  background: ${props => props.theme.colors.primary};

  padding: 0rem;
  border-radius: 1rem;
  box-shadow: 5px 5.5px 0px 5px ${props => props.theme.colors.secondary};
  
`

const Content = styled.header`
  display: flex;
  flex-direction: column;

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

const Search = styled.input`
  margin-right: 1rem;

  padding: 0.7rem;

  font-size: 1.2rem;

  border: none;
  border-radius: 0.5rem;

  outline: none;

  box-shadow: 5px 5.5px 0px 3px ${props => props.theme.colors.secondary};

  &:focus {
    box-shadow: none;
    transform: translate(2px, 2px)
  }
  
`

const Box = styled.div `
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
    margin-bottom: 1rem;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`

const Filter = styled.input`
  margin-right: 1rem;

  padding: 0.7rem;

  font-size: 1.2rem;

  border: none;
  border-radius: 0.5rem;

  outline: none;

  box-shadow: 5px 5.5px 0px 3px ${props => props.theme.colors.secondary};


  &:active {
    box-shadow: none;
    transform: translate(2px, 2px)
  }
  
  span {
    color: white;

  }

`

const Types = styled.div`
  color: white; 
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.2rem;
  text-align: center;
`

export { WrapperContent, Types, Content, HeaderContent, Box, Search, Filter }