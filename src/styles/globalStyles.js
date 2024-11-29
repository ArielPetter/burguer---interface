import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
//PRETTIER NÃO CORRIGE DENTRO DO STYLED-COMPONENTS    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-style: normal;
    }

    button, a {
        cursor: pointer;
    } 
`;

export default globalStyles;
