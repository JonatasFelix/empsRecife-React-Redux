import styled from "styled-components";

export const Search = styled.form`
    display: flex;
    align-items: center;
    background-color: var(--white);
    height: 35px;
    border-radius: 10px;
    padding: 0 5px;

    input:focus {
        outline: none;
    }
`

export const Input = styled.input`
    border: none;
    padding: 2px;
    width: 155px;
`

export const Button = styled.button`
    padding: 0 15px;
`