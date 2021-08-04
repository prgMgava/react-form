import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

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
`;

export const Content = styled.div`
  position:absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%,-50%);
  width: 50%;
  z-index: 5;
`

// o form sign esta z index 2 e o up opacity 0 e zz indx 1

//17'