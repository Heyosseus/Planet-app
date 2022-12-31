import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: rgb(7,7,36);
        color: white;
        font-family: 'League Spartan', sans-serif;
        overflow-x: hidden;
    }
`

export default GlobalStyles;