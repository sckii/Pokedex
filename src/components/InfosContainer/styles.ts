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
    margin: 1rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    header {
      width: 88%;
      display: flex;
      justify-content: space-between;
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
    width: 100%;
  }

  main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    color: white;
    width: 100%;
    height: 100%;

  }
  
  h6 {
    text-align: center;
  }

  h5 {
    color: white; 
    width: 100%;
    margin-bottom: 0.5rem;
    border-bottom: .5px solid white;
    padding: 0.2rem;
    text-align: center;
  }

`



export {Content}