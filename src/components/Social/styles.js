import styled from "styled-components";

export const Container = styled.div`
  p {
    padding: 0.7rem 0;
    font-size: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  a{
      width:46px;
      height: 46px;
      border: 1px solid var(--gray-dark);
      margin: 0 .45rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: var(--gray-dark);
      font-size: 1.1rem;
      border-radius: 50%;
      transition: .3s
  }

  a:hover{
      color:var(--blue-hover);
      border-color: var(--blue-hover);
  }
`;
