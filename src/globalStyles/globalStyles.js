import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    transition:0.3s ;
    transition-timing-function: ease-out;

}
body{
    
    font-family: 'Atkinson Hyperlegible', sans-serif;
    font-size: 1.5rem;
}`

export default GlobalStyle;