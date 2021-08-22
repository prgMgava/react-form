import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 6;

  @media (max-width: 870px) {
    position: absolute;
    display: ${props => !props.isSignIn && "flex"};
  }
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  padding: ${(props) =>
    props.panelDirection ? "3rem 17% 2rem 12%" : "3rem 12% 2rem 17%"};
  img {
    width: 100%;
    /* transition: 1.1s 0.4s ease-in-out; */
    ${(props) =>
      !props.isSignIn &&
      css`
        animation: ${ToLeft} 1s ease-in-out;
      `}
  }
  ${(props) =>
    props.isSignIn &&
    css`
      animation: ${ToRight} 1s ease-in-out;
    `}
    }
  z-index: ;

  @media (max-width:870px){
    flex-direction: row;
    img{
      width: 200px;
     transition: .9s 0.6s ease-in-out;
     ${(props) =>
       props.isSignIn &&
       css`
         animation: ${ToBottom} 1.7s ease-in-out .4s;
       `}
       ${(props) =>
       !props.isSignIn &&
       css`
         animation: ${ToTop} 1.5s ease-in-out;
       `}
    }
    }
  }
  @media (max-width:570px) {
    justify-content: center;
    padding-right: 0;
    img{
      display: none;
    }
  }
`;



export const Content = styled.div`
    color: var(--white);
    transition: .9s .6s ease-in-out;
     ${(props) =>
      !props.isSignIn &&
      css`
        animation: ${ToLeft} 1.7s ease-in-out;
      `}
    } 
    
     ${(props) =>
      props.isSignIn &&
      css`
        animation: ${ToRight} 1.7s ease-in-out;
      `}
    }
    h3{
        font-weight: 600;
        line-height: 1;
        font-size: 1.5rem;
    }

    p{
        font-size: 0%.95rem;
        padding: .7rem 0;
    }

    button{
        margin: 0;
        background: none;
        border: 2px solid var(--white);
        width: 130px;
        height: 41px;
        font-weight: 600;
        font-size: .8rem;
    }

    @media (max-width: 870px) {
      padding-right:15%;
     transition: .9s 0.8s ease-in-out; 
     ${(props) =>
       props.isSignIn &&
       css`
         animation: ${ToBottom} 1.7s ease-in-out;
       `}
       ${(props) =>
       !props.isSignIn &&
       css`
         animation: ${ToTop} 1.7s ease-in-out;
       `}
    }

      h3{
        font-size: 1.2rem;
      }
      p{
        font-size: .7rem;
        padding: 0.5rem 0;
      }
      button{
        width:110px;
        height:35px;
        font-size: .7rem;
      }
    }
`;

export const ToLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(1600px)
    }
    to {
        opacity:1;
        transform: translateX(0px)
    }
`;

export const ToRight = keyframes`
    from{
        opacity: 0;
        transform: translateX(-1600px)
    }
    to {
        opacity:1;
        transform: translateX(0px)
    }
`;

export const ToBottom = keyframes`
from{
  transform: translateY(-1600px);
}
to{
  transform: translateY(0px);
}
`;

export const ToTop = keyframes`
  from{
  transform: translateY(1600px);
}
to{
  transform: translateY(0px);
}
`
