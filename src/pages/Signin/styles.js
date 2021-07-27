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

      h2 {
        font-size: 2.2rem;
        color: var(--gray);
        margin-bottom: 10px;
      }
    }
  }
`;
