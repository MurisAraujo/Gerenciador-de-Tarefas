import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        font-family: 'Titillium Web', sans-serif
    }
`;

export default GlobalStyle;