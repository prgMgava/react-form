import styled from "styled-components";

export const InputContainer = styled.div`
    max-width: 380px;
    width: 100%;
    height: 55px;
    background-color: var(--white-input);
    margin: 10px 0;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 .4rem;

    svg{
        text-align:center;
        line-height: 55px;
        font-size: 1.1rem;
        color:var(--gray-light)
    }

    input{
        line-height: 1;
        font-weight:600;
        font-size: 1.1rem;
        color: var(--gray-dark)
    }

    input::placeholder{
        color:var(--gray-placeholder);
        font-weight: 500;
    }
`