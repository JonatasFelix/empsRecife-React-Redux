import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;

    width: 235px;
    padding: 23px 10px;
    border-radius: 26px;
    background: linear-gradient(315deg, #c3c3c3, #e8e8e8);
    box-shadow:  -7px -7px 14px #b4b4b4,
                7px 7px 14px #fefefe;


    &:hover {
        transform: scale(1.1);
        transition-duration: 0.2s;
    }

`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

export const Image = styled.img`
    width: 84px;
    height: 84px;
`

export const Tittle = styled.h3`
    font-size: 1.2rem;
    text-align: center;

`

export const Text = styled.p`
    font-size: 1rem;
    text-align: center;
`