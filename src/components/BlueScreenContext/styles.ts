import styled from 'styled-components'

const Content = styled.li`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;
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

export {Box, Content }