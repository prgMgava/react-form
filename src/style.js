import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row-reverse;

  &:before {
    content: "";
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: linear-gradient(
      -45deg,
      var(--blue-dark-circle),
      var(--blue-circle)
    );
    top: -10%;
    right: ${(props) => (props.isSignIn ? "48%" : "52%")};
    transform: translateY(-50%);
    z-index: 6;
    transform: ${(props) => !props.isSignIn && "translate(100%, -50%)"};
    transition: 1.8s ease-in-out;
  }

  @media (max-width: 870px) {
    min-height: 800px;
    height: 100vh;
    flex-direction: column;

    &:before{
      width: 1500px;
      height: 1500px;
      left: 30%;
      bottom: ${(props) => props.isSignIn ? "70%" : "25%"};
      right: initial;
      top: initial;
      transform: translateX(-50%);
      transition: 2s ease-in-out;
      transform: ${(props) => !props.isSignIn && "translate(-50%, 100%)"};
    }
  }
`;
