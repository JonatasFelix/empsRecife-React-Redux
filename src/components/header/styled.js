import styled from "styled-components";

export const Header = styled.header`
    background-color: var(--primary);
    width: 100%;
    padding: 10px 50px;
    display: flex;
   justify-content: center;

    @media (max-width: 380px) {
        padding: 10px 10px;
    }

`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 668px) {
        justify-content: center;
        gap: 10px;
        text-align: center;
    }

`

export const Logo = styled.div`
    cursor: pointer;
    h1, h2 {
        color: var(--secondary);
    }

    h2 {
        font-size: 0.9rem;
    }

`

export const BoxAux = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`

export const NavBar = styled.nav`
    display: flex;
    gap: 8px;
`

export const ButtonMenu = styled.button`
    color: ${props => props.active ? "var(--secondary)" : "var(--white)"};
    font-size: 1rem;
    background-color: transparent;
    border: none;
`