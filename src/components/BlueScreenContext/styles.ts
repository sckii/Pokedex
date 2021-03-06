import styled from 'styled-components'

const Content = styled.li`
  background: #202020;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 3.5rem 2rem 0.4rem 2rem;

  img {
    width: 8rem;
  }
  border-radius: .8rem;
  box-shadow: 4px 4px 0px 3px ${props => props.theme.colors.white};

  transition: all .2s;
  &:hover {
    transform: translate(4px, 4px);
    box-shadow: none;
    
    &::after {
      content: 'Click for more infos';
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      border-radius: .8rem;
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.colors.secondaryDark};
      opacity: 0.8;
    }
  }

`

const Box = styled.div`

  display:flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 0.8rem;

  width: 100%;
  height: 0rem;

  padding: .8rem;
  margin-bottom: 1rem;
  background: #101010;

`
const Id = styled.div`
  display:flex;
  align-items: initial;
  justify-content: left;

  width: 12rem;
  height: 0rem;

  padding: 1rem 1rem 1rem 0.5rem;
  margin-bottom: 0.5rem;

  color: white;

`

const Name = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;

  letter-spacing: .1rem;
  color: white;
  font-weight: bold;

  position: relative;
  top: .7rem;
`

export {Box, Content, Id, Name }