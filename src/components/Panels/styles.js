import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`

export const Panel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    padding: ${props => props.panelDirection ? "3rem 17% 2rem 12%" : "3rem 12% 2rem 17%"};
    img{
        width: 100%;
    }
    z-index: 7;
`

export const Content = styled.div`
    color: var(--white);

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
`

//transforme de 800 para animacao nos paineis