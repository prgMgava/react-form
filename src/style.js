import styled from "styled-components";

export const Container = styled.div`
position: relative;
width: 100%;
min-height: 100vh;
background: var(--white);
overflow: hidden;

&:before{
    content: "";
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: linear-gradient(-45deg, var(--blue-dark-circle), var(--blue-circle));
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    z-index: 6;
}
`