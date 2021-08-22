import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;

  div {
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0 5rem;
      overflow: hidden;
      h2 {
        font-size: 2.2rem;
        color: var(--gray);
        margin-bottom: 10px;
      }
    }
  }

  @media (max-width:570px) {
    div{
      form{
        padding: 0 1.5rem;
      }
    }
  }

  @media (max-width: 320px) {
    width: 50%;
    div{
      form{
        padding: 0;
        width: 300px;
        }
    }
`;

export const ToLeft = keyframes`
  from {
    left: 75%;
  }
  to{
    left: 25%
  }
`
export const ToTop = keyframes`
  from{
    top: 600%;
  }
  to {
    top: 70%;
  }
`

export const ToBottom = keyframes`
from {
    opacity: 0;
    top: -50%;
  }
  to {
    opacity: 1;
    top: 85%;
  }
`
export const Content = styled.div`
  position:absolute;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 50%;
  z-index: 5;
  transition: 2s 1s ease-in-out;
  left: ${props => props.isSignIn ? "75%" : "25%"};
  animation: ${ToLeft} 1s ease-in-out 1s;
  animation-direction: ${props => props.isSignIn && "reverse"} ;

  @media (max-width:870px) {
    top: ${props => props.isSignIn ? "85%": "70%"};  
   ${(props) => !props.isSignIn && css`
      animation: ${ToTop} 2s ease-in-out .7s;
   `}
   ${(props) => props.isSignIn && css`
      animation: ${ToBottom} 2s ease-in-out .7s;
   `}
    width: 100%;
    left:50%;
    transform: translate(-50%,-100%);
  }
`

