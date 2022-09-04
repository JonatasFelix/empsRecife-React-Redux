import styled from "styled-components";

export const Main = styled.main`
    margin: 25px 50px;
    display: flex;
    flex-direction: column;
    gap: 26px;

    @media (max-width: 668px) {
        margin: 25px 0;
        padding: 0 20px;
    }

`

export const EmptyFavorites = styled.h1`
    margin-top: 25px;
    text-align: center;
`