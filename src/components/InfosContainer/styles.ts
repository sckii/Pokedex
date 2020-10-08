import styled from 'styled-components'

const Content = styled.div`
  background: #202020;

  position: absolute;
  

  z-index: 200;

  width: 28rem;
  height: 30rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;

  box-shadow: 0px 0px 50px;

  animation-name: open;
  animation-duration: .2s;

  @keyframes open {
    from { width: 0rem;  height: 0rem }
    to { width: 28rem;  height: 30rem }
  }
  div {
    display: flex;
    height: 100%;
    width: 100%;
    div {
      height: fit-content;
    }
  }
  h2 {
    border: 1px solid white;
    padding: 0.5rem;
    border-radius: 1rem;
    margin: 1rem;
    font-size: 1.5rem;
    color: white;
    transition: opacity 0.2s;
  }

  h2:hover {
    opacity: 0.5;
  }

  h3 {
    color: white;
    text-align: center;
    margin-top: 2rem;
    height: 2rem;
    width: 75%;
  }
`


export {Content}