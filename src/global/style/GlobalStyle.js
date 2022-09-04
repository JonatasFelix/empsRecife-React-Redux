import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #044FA1;
        --secondary: #FDDF19;
        --white: #FFFFFF;
        --black: #000000;
        --gray: #959EA7;
    }

    *   {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Roboto', sans-serif;
        flex-wrap: wrap;
        list-style-type: none;
    }
    body {
        width: 100%;
        height: 100%;
    }

    button {
        cursor: pointer;
    }
    label {
        cursor: pointer;
    }
`;
